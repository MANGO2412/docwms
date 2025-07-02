import React, { useEffect, useState } from 'react';
import { useHistory } from '@docusaurus/router';
import {useAuth} from '../contexts/AuthContext'

export default function ProtectedRoute({ children }) {
  const {isAuthenticated}=useAuth()
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, []);

  if (isAuthenticated === null) return null; // o spinner

  return <>{children}</>;
}