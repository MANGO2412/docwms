import React,{useEffect} from 'react'
import {useAuth} from '@site/src/contexts/AuthContext'

import { useHistory } from '@docusaurus/router'


export default function ProtectedRoute({children}){
    const { isAuthenticated } = useAuth();
    const history=useHistory();

    useEffect(()=>{
        if(!isAuthenticated){
            history.push('/login')
        }
    },[isAuthenticated,history])

    if(!isAuthenticated) return null;

    return <>{children}</>
}