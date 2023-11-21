import React, { useEffect, useRef, useState } from 'react';
import MenuModal from './MenuModal';

const Navbar = () => {
    const [modal, setmodal] = useState(false);
    const nav = useRef()
    const listsvg = useRef()

    const openModal = ()=>{
        setmodal(true)
    }
    
    useEffect(()=>{
        const a = document.querySelectorAll("ul li a")
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 85) {
                nav.current.classList.add('nav')
                a.forEach((link)=>link.style.color = "#03A678")
                listsvg.current.style.color = "#03A678"
            }else{
                nav.current.classList.remove('nav')
                a.forEach((link)=>link.style.color = "#FFE")
                listsvg.current.style.color = "#fff"
            }
        })
    },[])
    return (
        <div className=' w-[100vw] h-14 py-[10px] px-[80px] flex justify-between items-center fixed top-0 bg-[--blue] z-10 transition-colors' ref={nav} id='nav'>
            <div className='logo'>
                <h2 className=' text-[30px] text-[--green] font-semibold items-center px-5'>MZ</h2>
            </div>
            <ul className=' w-auto flex p-3 items-center navul'>
                <li><a href="#about"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>About</a></li>
                <li><a href="#experience"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Experience</a></li>
                <li><a href="#works"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Works</a></li>
                <li><a href="#contact"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Contact</a></li>
                <a href="cv/cv.docx" className=' p-1 bg-transparent text-[--green] border text-[13px] rounded border-[--green] mx-[8px]' id='btn' >Resume</a>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list text-[--blanc]" viewBox="0 0 16 16" id='listsvg' ref={listsvg} onClick={openModal}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
           { modal && <MenuModal closeModal={()=>setmodal(false)}/> }
        </div>
    );
};

export default Navbar;