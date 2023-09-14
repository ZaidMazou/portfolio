import React, { useEffect } from 'react';

const Works = () => {
    useEffect(()=>{
        const projects = document.querySelectorAll('#projet')
        projects.forEach((project)=>{
            const obv = new IntersectionObserver(h=>{
                if (h[0].isIntersecting) {
                    project.classList.add('active')
                }
            })
            obv.observe(project)
        })
    },[])
    return (
        <div class="p-10  min-h-screen">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/1.png" alt="Image du Projet 1" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/streaming-app-clone.git">Streaming-app</a></h2>
                        <p class="text-[--blanc]">C'est une application React js qui expose les films et et les, une sorte de nextflix mais en utilisant l'API MoviesDatabases</p>
                    </div>
                </div>
                
                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/2.png" alt="Image du Projet 2" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/Netflix-clone-next.git">Netflix-clone-next</a></h2>
                        <p class="text-[--blanc]">Une application semblable au premier projet mais développée avec Next js</p>
                    </div>
                </div>

                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/3.png" alt="Image du Projet 2" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/projet-stage.git">API Tickets de bus</a></h2>
                        <p class="text-[--blanc]">C'est une API développée avec Express js pour une application de réservation de tickets de bus</p>
                    </div>
                </div>

                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/4.png" alt="Image du Projet 2" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/Bus-Benin.git">BusBénin</a></h2>
                        <p class="text-[--blanc]">Une application de réservation de tickets de bus développée avec Laravel</p>
                    </div>
                </div>
                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/5.png" alt="Image du Projet 2" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="">PythonWeb</a></h2>
                        <p class="text-[--blanc]">Un mini navigateur web très basique développé avec python et qui utilise le moteur de recherche Bing de microsoft</p>
                    </div>
                </div>
                <div class="shadow-md rounded-lg overflow-hidden" id='projet'>
                    <img src="path/6.png" alt="Image du Projet 2" class="w-full h-48 object-cover"/>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-[--green]">Titre du Projet 2</h2>
                        <p class="text-[--blanc]">Description brève du projet, les technologies utilisées, etc.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Works;