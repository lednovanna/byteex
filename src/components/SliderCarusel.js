import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCarusel() {

    const settings = {
        dots: true, // Отображение индикаторов (точек) внизу слайдов
        infinite: true, // Бесконечный слайдер
        speed: 500, // Скорость перехода между слайдами (в миллисекундах)
        slidesToShow: 1, // Показывать один слайд за раз
        slidesToScroll: 1, // Перелистывать по одному слайду
        autoplay: true, // Автопрокрутка
        autoplaySpeed: 3000, // Скорость автопрокрутки (в миллисекундах)
        arrows: true // Показать стрелки для перелистывания
      };

    return (
        <div className="sliderCarusel-container">
           <div className="sliderBody">
             <Slider {...settings}>
          
        <div>
          <img src="/assets/img/img2.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/assets/img/img2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/assets/img/img2.jpg" alt="Slide 3"/>
        </div>
        <div>
          <img src="/assets/img/img2.jpg" alt="Slide 4" />
        </div>
        
      </Slider>
        </div>
      </div>
    )
}

export default SliderCarusel;