import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut  } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleLogout = async () => {
    await signOut(auth);
  }
	return (
		<React.Fragment>
			<div className='h-[80px] w-screen bg-[#121212] text-white flex justify-between items-center px-[50px]'>
				<div>
					<Link to='/'>
						<img className='w-[40px] h-[40px]' src='/logo192.png' alt='react logo' />
					</Link>
				</div>
				<div className="flex gap-[10px] items-center">
					<ul className='flex gap-[25px]'>
						<Link to='/'>
							<li>Home</li>
						</Link>
            {
              user && (
                <Link to='/create-post'>
                  <li>Create Post</li>
                </Link>
              )
            }
            {
              !auth.currentUser ? <Link to="/login"><li>Login</li></Link> : <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
            }
					</ul>
            { user && (
              <div className="flex gap-[10px] items-center">
                <div>
                  <p>{user?.displayName}</p>
                </div>
                <div>
                  <img className="object-contain w-[30px] h-[30px] rounded-full" src={user?.photoURL || null} alt="dp" />
                </div>
              </div>
            )}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
