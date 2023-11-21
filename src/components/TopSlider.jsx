import React, { useEffect, useRef } from 'react';

const TopSlider = () => {
    function scrollToTop(duration) {
        const start = window.scrollY;
        const delta = -start;
        let startTime = null;
    
        function animateScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            window.scroll(0, start + delta * progress);
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }
    
        requestAnimationFrame(animateScroll);
    }
    const slider = useRef()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 90) {
                slider.current.style.display = "block"
            }else{
                slider.current.style.display = "none"
            }
        })
        slider.current.addEventListener('click',()=>{
            scrollToTop(700)
        })
    },[])
    return (
        <span className=' fixed z-10 right-4 bottom-12 p-[10px] bg-[--green] slider' ref={slider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up text-[--blanc]" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </span>
    );
};

export default TopSlider;