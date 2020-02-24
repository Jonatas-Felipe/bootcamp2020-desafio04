import React from 'react';
import { MdAccountCircle } from 'react-icons/md'

import logo from '../assets/facebookLogo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Facebook"/>
      <a href="#">Meu Perfil <MdAccountCircle /></a>
    </header>
  );
}

export default Header;
