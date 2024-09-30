import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick"
import { Link } from 'react-router-dom';


const SliderComp = () => {

        const {products} = useSelector(state=> state.products)
        
        const getRandomIndex = () => {
                return Math.floor(Math.random() * products.length);
              };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleDetailClick = () => {
        const randomIndex = getRandomIndex();
        const randomProduct = products[randomIndex];
        window.location.href = `/products/${randomProduct.id}`;
      };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-4 my-16">
        Top Product of the Week!
      </h1>
      <Slider {...settings}>
      <div className='!flex items-center bg-black px-6 rounded-xl overflow-hidden'>
        <div className='p-8'>
          <div className='text-6xl font-bold text-white'>See More</div>
          <div className='text-lg my-4 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate nemo expedita quisquam at repellendus dolor in aut, sed mollitia vitae reprehenderit cum recusandae harum ad provident id possimus necessitatibus?
          </div>
          <button onClick={handleDetailClick} className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100'>
            Detail
          </button>
        </div>
        <img className='w-[250px] rounded-xl' src="https://i2.milimaj.com/i/milliyet/75/869x477/5ea3069155428010fc7475da.jpg" />
      </div>

      </Slider>
    </div>

  );
}

    

  


export default SliderComp