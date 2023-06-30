import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { projectAuth } from '../firebase';

const PrivateRoutesLayout = () => {
  const location = useLocation();
  return (
    projectAuth.currentUser ? (<Outlet/>) : (
      <Navigate to="/authenticate" state={{from: location}}
      replace />
    )
  )
}

export default PrivateRoutesLayout;