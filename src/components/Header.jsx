import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
    const hi = useRef()
    const header = useRef()
    useEffect(() => {
        const type = new Typed(hi.current, {
            strings: ['Développeur', 'Créateur','Administrateur réseaux'],
            typeSpeed: 100,
            backSpeed:100,
            fadeOut:true,
            loop:true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay:1000,
            shuffle:true,
        });
    
        const currentHeader = header.current;
        const obv = new IntersectionObserver(h => {
            if (h[0].isIntersecting) {
                currentHeader.classList.add('active');
            }
        });
    
        obv.observe(currentHeader);
    
        return () => {
            type.destroy();
            obv.disconnect(); 
        };
    }, []);
    return (
        <div className=' w-[60%] h-[100vh] p-5 relative top-[100px] left-[200px]' id='header' ref={header}>
            <h5 className=' text-[--green] mb-4'><span>Salut, je suis</span></h5>
            <h1 className=' text-[--light] text-[70px] tracking-wider mb-1' >MAZOU ZAID.</h1>
            <h1 className=' text-[--green] text-[40px] tracking-wider mb-3 '><span ref={hi}></span></h1> 
            <div className=' w-[500px] mb-10' id='par'>
                    <p className=' text-[14px] text-white text-start p-1'>
                        Je suis développeur web fullstark et également administrateur réseaux
                        informatique spécialisé dans la création de sites et applications web et dans la configuration de réseaux informatique.
                        Je travaile à rendre le numérique encore meilleur et accessible à tous. 
                    </p>
            </div>
            <a href="" className=' px-10 py-1 border border-[--green] text-[--green] text-center' id='btn'>Voir mes projets</a>
        </div>
    );
};
 
export default Header;