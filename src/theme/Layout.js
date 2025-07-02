import React,{useEffect} from 'react';
import DefaultLayout from '@theme-original/Layout';
import { AuthProvider } from '../contexts/AuthContext';

export default function Layout(props) {
  return (
    <AuthProvider>
      <DefaultLayout {...props}/>
    </AuthProvider>
  );
}