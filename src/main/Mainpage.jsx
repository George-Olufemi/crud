import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../config/firebase';
import Post from './post';

const Mainpage = () => {
	const [ postList, setPostList ] = useState(null);
	const postReference = collection(database, 'posts');
	const getPosts = async () => {
		const data = await getDocs(postReference);
		setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	}
  useEffect(() => {
    getPosts()
  }, [])
  
	return (
		<React.Fragment>
			<div>
				<h1 className='text-3xl mt-[30px] font-[700] mb-[30px] text-center'>All Posts</h1>
				<div className='flex justify-center items-center'>
					<div className="">
						{
							postList?.map((post) => (
								<Post post={post} />
							))
						}
					</div>
        </div>
			</div>
		</React.Fragment>
	);
};

export default Mainpage;
