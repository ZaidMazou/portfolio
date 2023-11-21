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
        <div className="py-10 h-auto mb-20 ">
            <div className=' w-[100vw] overflow-x-scroll px-[80px]'>
                <div class=" w-[250vw] overflow-scroll flex items-center justify-between" id='works'>
                    <div className="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/1.png" alt="Image du Projet 1" class="w-full h-48 object-contain"/>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/streaming-app-clone.git">Streaming-app</a></h2>
                            <p className="text-[--blanc]">C'est une application React js qui expose les films et et les, une sorte de nextflix mais en utilisant l'API MoviesDatabases</p>
                        </div>
                    </div>
                    
                    <div class="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/2.png" alt="Image du Projet 2" class="w-full h-48 object-contain"/>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/Netflix-clone-next.git">Netflix-clone-next</a></h2>
                            <p className="text-[--blanc]">Une application semblable au premier projet mais développée avec Next js</p>
                        </div>
                    </div>

                    <div className="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/3.png" alt="Image du Projet 2" class="w-full h-48 object-contain"/>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/projet-stage.git">API Tickets de bus</a></h2>
                            <p className="text-[--blanc]">C'est une API développée avec Express js pour une application de réservation de tickets de bus</p>
                        </div>
                    </div>

                    <div className="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/4.png" alt="Image du Projet 2" class="w-full h-48 object-contain"/>
                        <div class="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-[--green]"><a href="https://github.com/ZaidMazou/Bus-Benin.git">BusBénin</a></h2>
                            <p className="text-[--blanc]">Une application de réservation de tickets de bus développée avec Laravel</p>
                        </div>
                    </div>
                    <div class="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/5.png" alt="Image du Projet 2" class="w-full h-48 object-contain"/>
                        <div class="p-6">
                            <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="">PythonWeb</a></h2>
                            <p class="text-[--blanc]">Un mini navigateur web très basique développé avec python et qui utilise le moteur de recherche Bing de microsoft</p>
                        </div>
                    </div>
                    <div class="shadow-md rounded-lg overflow-hidden w-[350px]" id='projet'>
                        <img src="path/mira.png" alt="Image du Projet 2" class="w-full h-48 object-contain"/>
                        <div class="p-6">
                            <h2 class="text-xl font-semibold mb-2 text-[--green]"><a href="https://zaidmazou.github.io/mira-store/">PythonWeb</a></h2>
                            <p class="text-[--blanc]">Un site vitrine pour la vente des articles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Works;