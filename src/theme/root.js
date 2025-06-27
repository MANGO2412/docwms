import React,{useEffect} from 'react';
import { AuthProvider } from '@site/src/contexts/AuthContext';

export default function Root({ children }) {
  useEffect(()=>{
    console.log("este es el root")
  })
  return <AuthProvider>{children}</AuthProvider>;
}