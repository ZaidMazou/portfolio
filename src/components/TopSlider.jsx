import React from 'react';

const TopSlider = () => {
    return (
        <span className=' fixed z-20 right-4 bottom-12 p-[10px] bg-[--green] slider'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up text-[--blanc]" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </span>
    );
};

export default TopSlider;