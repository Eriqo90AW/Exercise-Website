import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"

import { Autoplay } from "swiper"

function AutoSlider({ imgs = [""], time = 3000 }) {
  return (
    <Swiper
      id="autoslider"
      modules={[Autoplay]}
      effect="slide"
      loop={true}
      slidesPerView={1}
      autoplay={{ delay: time }}
      className="h-screen w-screen"
    >
      {imgs.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            alt={i + 1}
            src={img}
            className="object-cover object-center w-screen h-screen"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default AutoSlider
