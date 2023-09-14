import React, { useEffect, useRef } from 'react';

const Navbar = () => {
    const nav = useRef()
    const listsvg = useRef()
    const navul = useRef()
    const handleclick = (e)=>{
        e.preventDefault()
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
        const handleClick = () => {
            if(navul.current && navul.current.classList.contains('active')){
                navul.current.classList.remove('active');
            } else {
                navul.current.classList.add('active');
            }
        };
        
        listsvg.current && listsvg.current.addEventListener('click', handleClick);
    
        return () => {
            listsvg.current && listsvg.current.removeEventListener('click', handleClick);
        };
    },[])
    return (
        <div className=' w-[100vw] h-14 p-[10px] flex justify-between items-center fixed top-0 bg-[--blue] z-10 transition-colors' ref={nav} id='nav'>
            <div className='logo'>
                <h2 className=' text-[30px] text-[--green] font-semibold items-center px-5'>MZ</h2>
            </div>
            <ul className=' w-auto flex p-3 items-center navul' ref={navul}>
                <li><a href="#"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>About</a></li>
                <li><a href="#"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Experience</a></li>
                <li><a href="#"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Works</a></li>
                <li><a href="#"className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Contact</a></li>
                <a href="/cv/cv.docx" className=' p-1 bg-transparent text-[--green] border text-[13px] rounded border-[--green] mx-[8px]' id='btn' onClick={handleclick}>Resume</a>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list text-[--blanc]" viewBox="0 0 16 16" id='listsvg' ref={listsvg}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
    );
};

export default Navbar;