import { useState } from 'react';
import { auth } from './fireBase';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';

import './forms.css'
import SignIn from './fireBaseSignIn';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  // New state for user's name
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with the name
      await updateProfile(user, {
        displayName: name,
      });

      // Send verification email
      await sendEmailVerification(user);

      setMessage("A verification email has been sent to your email address. Please verify before logging in.");

      setTimeout(() => {
        navigate("/signinFirebase")
      }, 5000);

    } catch (error) {
      setMessage(error.message);
    }
  };

  const resendVerificationEmail = async () => {
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      await sendEmailVerification(auth.currentUser);
    //   alert("Verification email sent again!");
    }
  };

  const [formState, setFormState] = useState(false);

  return (
    <div className='main'>
      {message && <div className='errorSMSContainer'><p className='errorSMS'>{message}</p></div>}
     { !formState ? <form onSubmit={handleSignUp} className='fireBaseForm'>
      <h2>Sign Up</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"   // Input for user's name
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={resendVerificationEmail}>Resend Verification Email</button>

        <p className='options'>Already Signed up.<b onClick={() => setFormState(true)}>login</b></p>
      </form> : <SignIn  setFormState={setFormState}/>}

      
    </div>
  );
};

export default SignUp;