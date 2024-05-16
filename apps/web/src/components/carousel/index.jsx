'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

export const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="text-center font-bold text-black">
        <Image src={'/1.jpg'} alt="logo" className="xl:w-[100vw] xl:h-[500px] mobile: w-[1000px] h-[200px]" width={10000} height={10000}/>
      </div>
      <div>
      <Image src={'/2.png'} alt="logo" className="xl:w-[100vw] xl:h-[500px] mobile: w-[1000px] h-[200px]" width={10000} height={10000}/>
      </div>
      <div>
      <Image src={'/3.jpg'} alt="logo" className="xl:w-[100vw] xl:h-[500px] mobile: w-[1000px] h-[200px]" width={10000} height={10000}/>
      </div>
      <div>
      <Image src={'/4.jpg'} alt="logo" className="xl:w-[100vw] xl:h-[500px] mobile: w-[1000px] h-[200px]" width={10000} height={10000}/>
      </div>
      <div>
      <Image src={'/5.png'} alt="logo" className="xl:w-[100vw] xl:h-[500px] mobile: w-[1000px] h-[200px]" width={10000} height={10000}/>
      </div>
    </Slider>
  );
}