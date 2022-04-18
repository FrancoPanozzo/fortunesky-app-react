import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navegacion">
                <a class="enlace"   href="#">Inicio</a> 
                <a class="enlace"   href="#">¿Quienes somos?</a> 
                <a class="enlace"   href="#">Productos</a>                  
            </nav>
        </div>
    );
};

export default NavBar;