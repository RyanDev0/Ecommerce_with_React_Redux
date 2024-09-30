import React, { useEffect } from 'react'; 
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleCartClick = () => {
    navigate("cart");
  };

  return (
    <div className='flex items-center gap-7'>
      <AiOutlineHeart size={26} />
      <div className='relative'>
        <div
          onClick={handleCartClick}
          className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'
          >
          {itemCount}
        </div>
        <SlBasket className='cursor-pointer' size={26} onClick={handleCartClick} />
      </div>
    </div>
  );
}

export default NavbarRight;