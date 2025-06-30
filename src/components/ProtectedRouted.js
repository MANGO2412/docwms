import React, { useEffect, useState } from 'react';
import { useHistory } from '@docusaurus/router';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      history.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) return null; // o spinner

  return <>{children}</>;
}