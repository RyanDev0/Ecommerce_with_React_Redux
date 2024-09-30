import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarLeft = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={()=>navigate("/")} className='cursor-pointer text-4xl font-extrabold text-black'>Trendi<span className=' text-yellow-400'>Q</span></h1>
    </div>
  );
}

export default NavbarLeft;
