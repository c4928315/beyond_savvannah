import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fireBase';
import { useNavigate } from 'react-router-dom';

const SignIn = ({setFormState}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log("auth", auth)

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        // Redirect to a protected route (e.g., dashboard)
        // alert("Successfully logged in!");
        navigate("/chat");
      } else {
        setError("Please verify your email address before logging in.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='main'>
        {error && <div className='errorSMSContainer'><p className='errorSMS'>{error}</p></div>}
      <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>
        <p className='options'>Don't have an account? <b onClick={() => setFormState(false)}>Signup</b></p>
      </form>
    </div>
  );
};

export default SignIn;