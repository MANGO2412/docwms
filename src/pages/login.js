//link del template: https://codepen.io/Mohuth/pen/QWgrPvp
import { useHistory } from '@docusaurus/router';

import {useState,useEffect} from 'react'

export default function login(){
    const [value,setValue]=useState('')
    const [colorMode,setColorMode]=useState('light');
    const history = useHistory();

    useEffect(()=>{
        setColorMode(document.documentElement.getAttribute('data-theme'))
    },[])

    const toggleFilledClass=(field)=>{
        if(field.value){
         field.classList.add("filled")
        }else{
         field.classList.remove("filled")
        }
    }

    const inputKey=(e)=>{
     const {target,keyCode}=e;
     if(keyCode===8){
      target.value='';
      if(target.previousElementSibling){
       target.previousElementSibling.focus();
     }
    }

    if (target.value && target.nextElementSibling && keyCode != 8) {
        target.nextElementSibling.focus();
    }

    toggleFilledClass(target)    
    }

    return(
      <section className="opt-page">
        <div className={colorMode=="light"?"container":"container container-dark"}>
            <h1 style={{color:"red"}} >Sorry you don't have access this content, enter a code to access this content </h1>
            <h2 className='title'>Enter your code</h2>
            <form id='otp-form'>
                <input type='text' className={colorMode=="light"?"otp-input":"otp-input otp-input-dark"} maxLength={1}  onKeyDown={inputKey}/>
                <input type='text' className={colorMode=="light"?"otp-input":"otp-input otp-input-dark"} maxLength={1}  onKeyDown={inputKey}/>
                <input type='text' className={colorMode=="light"?"otp-input":"otp-input otp-input-dark"} maxLength={1}  onKeyDown={inputKey}/>
                <input type='text' className={colorMode=="light"?"otp-input":"otp-input otp-input-dark"} maxLength={1}  onKeyDown={inputKey}/>
                <input type='text' className={colorMode=="light"?"otp-input":"otp-input otp-input-dark"} maxLength={1}  onKeyDown={inputKey}/>
            </form>
            <div style={{display:'flex', flexDirection:'column', marginTop:'30px'}}>
                <button className='btn'>Verify Code</button>
                <button  className="btn back-btn" onClick={()=>history.push('./docs/intro')}>Back </button>
            </div>
        </div>
      </section>
    )
}