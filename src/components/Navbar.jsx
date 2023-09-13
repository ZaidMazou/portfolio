import React, { useEffect, useRef } from 'react';

const Navbar = () => {
    const nav = useRef()
    useEffect(()=>{
        const a = document.querySelectorAll("ul li a")
        
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 85) {
                nav.current.classList.add('nav')
                a.forEach((link)=>link.style.color = "#03A678")
            }else{
                nav.current.classList.remove('nav')
                a.forEach((link)=>link.style.color = "#FFE")
            }
        })
    },[])
    return (
        <div className=' w-[100vw] h-14 p-[10px] flex justify-between fixed top-0 bg-[--blue] z-10 transition-colors' ref={nav}>
            <div className='logo'>
                <h2 className=' text-[30px] text-[--green] font-semibold items-center px-5'>MZ</h2>
            </div>
            <ul className=' w-auto flex p-3 items-center'>
                <li><a href=""className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>About</a></li>
                <li><a href=""className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Experience</a></li>
                <li><a href=""className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Works</a></li>
                <li><a href=""className=' text-[--blanc] mx-[8px] font-semibold text-[15px]'>Contact</a></li>
                <a href="" className=' p-1 bg-transparent text-[--green] border text-[13px] rounded border-[--green] mx-[8px]' id='btn'>Resume</a>
            </ul>
        </div>
    );
};

export default Navbar;