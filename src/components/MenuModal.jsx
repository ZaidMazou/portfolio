import React from 'react';

const MenuModal = ({closeModal}) => {
    const handleclick = ()=>{
        closeModal()
    }
    return (
        <div className=' w-screen inset-0 fixed z-30 h-screen bg-[#09081A] delay-75 overflow-hidden'>
            <ul className=' w-[100%] h-screen mt-14 '>
                <li className=' pt-10 border-b-[1px] pb-4' onClick={closeModal}><a href="#about"className=' text-[--blanc] mx-[8px] font-semibold text-[20px]'>About</a></li>
                <li className=' pt-10 border-b-[1px] pb-4' onClick={closeModal}><a href="#experience"className=' text-[--blanc] mx-[8px] font-semibold text-[20px]'>Experience</a></li>
                <li className=' pt-10 border-b-[1px] pb-4' onClick={closeModal}><a href="#works"className=' text-[--blanc] mx-[8px] font-semibold text-[20px]'>Works</a></li>
                <li className=' pt-10 border-b-[1px] pb-4' onClick={closeModal}><a href="#contact"className=' text-[--blanc] mx-[8px] font-semibold text-[20px]'>Contact</a></li>
                <li className=' pt-10 border-b-[1px] border-b-[--green] pb-4'><a href="cv/cv.docx"className=' text-[--green] mx-[8px] font-semibold text-[20px]'>Resume</a></li> 
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg absolute right-5 top-10 text-[--blanc]" viewBox="0 0 16 16" onClick={handleclick}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
    );
};

export default MenuModal;