import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"

import { EffectCoverflow, Autoplay } from "swiper"

function testimoni() {
  const alums = [
    {
      name: "Aldrian Raffi",
      position: "Head of Design Specialist",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Moses Samuel",
      position: "Head of Technical Project",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Giovan Sihombing",
      position: "Gagal nikah",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Nicholas Samosir",
      position: "Apa ya",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "Wendy Dharmawan",
      position: "Gatau deh",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      name: "M Jibril Adr",
      position: "Apa hayo",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum positionuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
      img: "asd",
      ig: "instagram.com",
      line: "line.me",
      twt: "twitter.com",
      linkedin: "linkedin.com",
    },
  ]

  return (
    <div id="landing-testimoni-section" className="bg-grey py-20">
      <div className="site-wrapper w-container text-center">
        <h1 className="font-light text-dark-2 text-3xl mb-8">
          Testimoni Alumni
        </h1>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          loop={true}
          grabCursor={true}
          roundLengths={true}
          autoHeight={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            modifier: 1,
            depth: 100,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="py-8 mb-8"
        >
          {alums.map((a, i) => (
            <SwiperSlide
              key={i}
              className="bg-light shadow-lg shadow-grey-1 text-dark-2 px-6 py-12"
            >
              <div className="text-center mb-8">
                <h1 className="font-bold text-lg lg:text-xl">{a.name}</h1>
                <p className="font-extralight text-sm lg:text-lg">
                  {a.position}
                </p>
              </div>

              <p className="font-light text-justify text-sm lg:text-base">
                {a.testimoni}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link to="/testimoni-alumni" className="btn">
          View All
        </Link>
      </div>
    </div>
  )
}

export default testimoni
