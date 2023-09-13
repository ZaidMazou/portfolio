import React, { useEffect, useRef } from 'react';

const Spacer = ({title}) => {
    const spacer = useRef()
    useEffect(()=>{
        const obv = new IntersectionObserver(h=>{
            if (h[0].isIntersecting) {
                spacer.current.classList.add('active')
            }
        })
        obv.observe(spacer.current)
    },[])
    return (
        <div className=' w-auto' id='spacer' ref={spacer}>
            <h2 className=' text-[--green] font-medium text-[50px] text-center mb-16'>{title}</h2>
        </div>
    );
};

export default Spacer;