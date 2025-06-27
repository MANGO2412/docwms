import React,{useEffect} from 'react';
import { AuthProvider } from '@site/src/contexts/AuthContext';
import Layout from '@theme-original/Admonition/Layout';

export default function LayoutWrapper(props) {
  alert("jajaj")
    useEffect(()=>{
    console.log("este es el root")
  })

  return (
    <>
       <AuthProvider><p>sss</p> <Layout {...props} /></AuthProvider>;
    </>
  );
}



