import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './fireBase';

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/signupFirebase" />;
  }

  if (!auth.currentUser.emailVerified) {
    return <Navigate to="/verify" />;
  }

  return children;
};

export default ProtectedRoute;