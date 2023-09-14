import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto text-center">
                <div class="mb-6">
                    <a href="#about" class="text-[--green] hover:text-gray-400 mr-4">About</a>
                    <a href="#experience" class="text-[--green] hover:text-gray-400 mr-4">Experience</a>
                    <a href="#work" class="text-[--green] hover:text-gray-400 mr-4">Works</a>
                    <a href="#contact" class="text-[--green] hover:text-gray-400">Contact</a>
                </div>

                <p class="text-sm text-gray-400">&copy; 2023 MAZOU ZAID. Tous droits réservés.</p>
            </div>
        </footer>

    );
};

export default Footer;