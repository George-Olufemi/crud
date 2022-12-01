import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, database } from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'

export const CreateForm = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth)

  const schema = yup.object().shape({
    title: yup.string().required("You must have a Title"),
    description: yup.string().required("Enter description"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const postReference = collection(database, "posts");

  const onCreatePost = async (data) => {
    await addDoc(postReference, {
      title: data.title,
      description: data.description,
      username: user.displayName,
      userId: user.uid,
    });
    await navigate('/')
  }

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onCreatePost)}>
				<input
					className='block m-[20px] p-[7px] w-[400px] border rounded-lg'
					type='text'
					placeholder='Title'
					{...register('title')}
				/>
        <p className="text-red-700 text-[17px] pl-[30px]">{errors.title?.message}</p>
				<textarea
					className='block m-[20px] p-[7px] w-[400px] border rounded-lg'
					type='text'
					placeholder='Description'
					{...register('description')}
				/>
        <p className="text-red-700 text-[17px] pl-[30px]">{errors.description?.message}</p>
				<button
					className='cursor-pointer block m-[20px] p-[5px] w-[400px] h-[45px] bg-[#5DD2F0] opacity-75 hover:opacity-100 rounded-lg shadow-lg transition-all'
					type='submit'
				>Post</button>
			</form>
		</React.Fragment>
	);
};

export default CreateForm;
