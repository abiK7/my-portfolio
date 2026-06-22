import resume from './assets/resume/Abinaya_Kesavan_Resume_New.pdf';
import "./assets/css/Introduction.css";
import ProfileImage from './ProfileImage';
import Tooltip from './Tooltip';
import { useState } from "react";
function Introduction({contactRef,focusedSection}) {
    const[toolTipVisibility,setToolTipVisibiliy]=useState(false);
    const copyToClipboard=(e)=>{
        navigator.clipboard.writeText(e.target.innerText);
        setToolTipVisibiliy(true);
        setTimeout(function(){
          setToolTipVisibiliy(false);  
        },2000)
    }
    return (
        <div className=' text-xs px-10 py-4 bgShade text-white'>
            <section className=' intro flex justify-between border-b border-gray-600'>
                <div className='w-96'>
                    <span className='text-xs text-gray-400 border px-4 py-1 rounded-full border-solid border-white'>Senior UI Developer</span> <span className='text-xs text-gray-400'>with 7+ years of experience</span>
                    <h1 className='mt-4 text-xl'>Hi, I'm <b className='highLightTextColor'>Abinaya</b> UI Developer</h1>
                    <p className='text-xs pt-3.5 text-gray-400 w-96'>I build responsive, accessible and user-friendly web and mobile experiences with clean code and modern technologies.</p>
                    <a className="commonBgColor px-2 py-2 float-left mt-5 text-xs rounded" href={resume} download="Abinaya_Kesavan_Resume.pdf"><i></i>Download Resume</a>
                </div>
                <div className='px-10'>
                    <ProfileImage />
                </div>
            </section>
            <section ref={contactRef} id="contactSection" className='contactList'>
                <Tooltip text="Copied to clipboard" toolTipVisibility={toolTipVisibility}/>
                <div className='flex justify-between py-5'>
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 mr-2 float-left">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <span onClick={(e)=>{copyToClipboard(e)}}>abinayauidesigner@gmail.com</span>
                    </label>
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 mr-2 float-left">
                            <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
                        </svg>
                        <span onClick={(e)=>{copyToClipboard(e)}}>+919994911237</span>
                    </label>
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 mr-2 float-left">
                            <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
                        </svg>
                        Tamil Nadu, India
                    </label>
                    <label>
                        <span className="inline-block w-3 h-3 relative top-0.5 rounded-full border border-slate-400 mr-2 float-left">
                            <span className="inline-block w-1.5 h-1.5 blinkAnimation absolute top-0.5 left-0.5 rounded-full commonBgColor"></span>
                        </span>
                        Open to opportunities in <strong> India(remote), Singapore</strong>
                    </label>
                </div>
                <ul className='flex'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 float-left mr-2">
                            <path fillRule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                        </svg>
                        <a href="https://www.linkedin.com/in/abinaya-kesavan-4b0616159/" target="_blank"><i></i>LinkedIn</a>
                    </li>
                    <li className='ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 float-left mr-2 ml-4">
                            <path fillRule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                        </svg>
                        <a href="https://github.com/abiK7?tab=repositories" target="_blank"><i></i>GitHub</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default Introduction;