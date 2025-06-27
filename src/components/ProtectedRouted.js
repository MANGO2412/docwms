import React,{useEffect} from 'react'
import {useAuth} from '@site/src/contexts/AuthContext'

import { useHistory } from '@docusaurus/router'


export default function ProtectedRoute({children}){
    const { isAuthenticated } = useAuth();
    const history=useHistory();

    useEffect(()=>{
        if(!isAuthenticated){
            console.log(isAuthenticated)
            console.log("si pasa")
            // history.push('/login')
        }
    },[])

    if(!isAuthenticated) return null;

    return <>{children}</>
}