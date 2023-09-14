import React from 'react';

const About = () => {
    return (
        <div className=' w-[90vw] p-[10px] h-auto flex flex-row justify-around mb-20' id="about">
            <div className=' w-[50%] block p-3 ml-[100px]'>
                <p className=' text-white text-[16px] text-start'>
                    Fort d'une solide formation académique obtenue à l'École Nationale d'Économie Appliquée et de Management, où j'ai décroché une Licence en administration de réseaux informatiques, j'ai rapidement su mettre en pratique mes connaissances théoriques dans le monde professionnel.

                    Depuis 3 ans dans le développement web, je maîtrise des technologies telles que React, Next.js, Electron.js, Python, Vue.js, Laravel, etc. Ces compétences m'ont permis de travailler sur de nombreux projets, apportant des solutions concrètes aux défis numériques de mes clients.

                    Mon rôle en tant qu'administrateur réseau, acquis lors de ma formation, me permet de garantir une expérience utilisateur sans faille, combinant performance et sécurité. Ayant collaboré avec de nombreux développeurs et d'autres experts dans des domaines variés, comme la comptabilité par exemple, je sais m'adapter aux différents environnements et exigences.

                    Je suis convaincu que mon parcours académique et professionnel fait de moi le candidat idéal pour donner vie à vos projets numériques. N'hésitez pas à me contacter pour discuter de vos besoins spécifiques.
                </p>
            </div>
            <div className=' w-[30%] h-[500px]'>
                <img src="path/8.png" alt=""  className=' w-full h-full object-contain'/>
            </div>
        </div>
    );
};

export default About;