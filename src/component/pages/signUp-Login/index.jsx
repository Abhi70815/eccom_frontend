import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../Redux/ProductSlice';
import { Link, useNavigate } from 'react-router-dom';
import regImage from '../Assets/bgm1.png'

const SignupLogin = () => {
  const [userExist, setUserExist] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password
    };

    if (userExist) {
      // Send login data to server API
      const user ={
        email:userData.email,
        password:userData.password
      }
      fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
            if(data.status === 'Success'){
                console.log(data)
                toast.success(data.msg);
                dispatch(setUserAuth(true));
                navigate('/home')
            }else{
                console.log(data)
                toast.error(data.msg)
            }
        })
        .catch((error) => toast.error("error"));
    } else {
      // Send signup data to server API
      fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {  if(data.status === 'Success'){
          console.log(data)
          toast.success(data.msg);
          dispatch(setUserAuth(true));
          navigate('/home')

      }else{
          console.log(data)
          alert("User already exist")
          toast.error(data.msg)
      }
  })
  .catch((error) => toast.error("error"));
    }
  };

  return (
    <div className="sigup_login">
      {userExist ? (
        <div className="s_container">
          <div className="signup-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" style={{width:"100px"}}>Login</button>
            <div className="login-link">
              Don't have an account?{' '}
              <p onClick={() => setUserExist(false)}>SignUp</p>
            </div>
            
          </form>
        </div>
          <div className="users_img">
          <img src={regImage} alt="reg image" />
        </div>
        </div>
        
      ) : (
       <div className="s_container">
         <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" style={{width:"100px"}}>Sign Up</button>
            <div className="login-link">
              Already have an account?{' '}
              <p onClick={() => setUserExist(true)}>Login</p>
            </div>
            {/* <div className="terms">
              <input
                type="checkbox"
                checked={terms}
                onChange={(event) => setTerms(event.target.checked)}
              />{' '}
              By continuing, I agree to the terms of use & privacy policy
            </div> */}
          </form>
        </div>
        <div className="users_img">
          <img src={regImage} alt="reg image" />
        </div>
       </div>
      )}
    </div>
  );
};

export default SignupLogin;


export const Signup = () => {
  return (
      <div>
          <div className="head">
              <div className="logo">Shopee</div>
              <Link to='/login' className='btn'>Log In</Link>
              
          </div>
          <div className="signup">
             
              <div className="form-section">
                  <h2>Create an account</h2>
                  <Link to="/login" style={{color:'blue'}}>log in instead</Link>
                  <form>
                      <input placeholder="First name" type="text" />
                      <input placeholder="Last name" type="text" />
                      <input placeholder="Email" type="email" />
                      <input placeholder="Password" type="password" />
                      <div className="terms">
                          <input type="checkbox" />
                          {/* <span>
                              By creating an account, I agree to our
                              <a href="#"> Terms of Use</a> and
                              <a href="#"> Privacy Policy</a>.
                          </span> */}
                      </div>
                      <button>Create an account</button>
                  </form>
                
              </div>
              <div className="image-section">
                  <img
                      alt="Abstract geometric shapes"
                      src={regImage}
                  />
              </div>
          </div>
      </div>
  );
};

export const Login = () => {
  return (
      <div>
          <div className="head">
              <div className="logo">Shopee</div>
              <Link to='/signup'>Signup</Link>
              
          </div>
          <div className="signup">
             
              <div className="form-section">
                  <h2>Log in</h2>
                  <Link to="/signup" style={{color:'blue'}}>signup in instead</Link>
                  <form>
                      <input placeholder="Email" type="email" />
                      <input placeholder="Password" type="password" />
                      <div className="terms">
                          <input type="checkbox" />
                          {/* <span>
                              By creating an account, I agree to our
                              <a href="#"> Terms of Use</a> and
                              <a href="#"> Privacy Policy</a>.
                          </span> */}
                      </div>
                      <button>Log in</button>
                  </form>
                
              </div>
              <div className="image-section">
                  <img
                      alt="Abstract geometric shapes"
                      src={regImage}
                  />
              </div>
          </div>
      </div>
  );
};