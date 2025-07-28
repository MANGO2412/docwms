import React,{useEffect} from 'react';
import DefaultLayout from '@theme-original/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { SideChatbot } from "../components/UiChatBot/SideChatbot.js";

export default function Layout(props) {
  return (
    <AuthProvider>
      <DefaultLayout {...props}/>
      <SideChatbot/>
      
    </AuthProvider>
  );
}