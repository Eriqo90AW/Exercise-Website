import React from "react"
import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { Autoplay, EffectCoverflow, Navigation } from "swiper"

function CarouselProjects() {
  const projects = [
    {
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://s3-alpha-sig.figma.com/img/bfaf/8871/6f6a0e93dae66aa4041aac2c39f4f3b3?Expires=1683504000&Signature=YftCXE4xHEl~fdCprOM4OZ0iOXx4~WX6ouwHQsC4YjwjOS4tEJRraCR6WJfpwwNPQuYI1uMMhD-S2oNW0O6pDYvQzoc5G5kXa-LKquczV9hmWwOitqcTSLwtWgQPJU-egf00DcEXWUnv4Zkl0UNpGhiK4D09JI1PhO7eZJBdu9Jk88pCEtQP2zE6fOpTwYVbXl9ft074cGZ3nbwZUaLNeCq3DdVWe1qCqjTL6gXAzUkYLnThKbHIpuNg27~vA53mYJQh0JVz~BXeGknZMMuddoP-q5VYZFT17dLKeiuZc30PgvvMjHeD6rj6BKZRyiluHCgMa42J6PSo~2WuuT5GBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "Project Title",
      desc: "We started innovating since 1234 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. Dig further to find out the best of us!",
      corp: "Corporation",
      year: 2016,
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ]

  return (
    <div
      id="landing-collaborated-projects-section"
      className="bg-grey py-20 lg:py-20"
    >
      <div className="site-wrapper w-container">
        <p className="section-head text-dark-2 text-4xl lg:hidden">
          Our Collaborated Projects
        </p>

        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 90,
            scale: 0,
            slideShadows: false,
          }}
          //   autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".landing-next-project",
            prevEl: ".landing-prev-project",
          }}
          className="lg:text-dark-2 relative overflow-visible"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="lg:flex-center">
                <div className="relative h-56 w-full md:h-72 lg:w-[40%] lg:h-[524px]">
                  <img
                    alt={"project" + (i + 1)}
                    src={p.img}
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="bg-dark p-8 flex flex-col gap-4 lg:bg-grey lg:gap-8 lg:w-[60%]">
                  <p className="hidden lg:block text-2xl">
                    Our Collaborated Projects
                  </p>

                  <h1 className="-m-0.5 font-bold text-4xl lg:text-5xl">
                    {p.title}
                  </h1>

                  <p className="text-justify lg:text-lg">{p.desc}</p>
                  <p className="text-grey-2 lg:text-lg">
                    {p.corp}, {p.year}
                  </p>

                  <Link
                    to={`/project/${p.title.toLowerCase().replace(" ", "-")}`}
                    className="btn lg:mb-0 lg:bg-dark-2"
                  >
                    Get To Know
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="pointer-events-none text-grey text-2xl hidden absolute top-0 -left-8 z-[1] w-[calc(100%+3.5rem)] h-full lg:flex items-center justify-between">
            <div className="landing-prev-project bg-dark-2 px-1 rounded-lg cursor-pointer pointer-events-auto selection:bg-none">
              ◀
            </div>
            <div className="landing-next-project bg-dark-2 px-1 rounded-lg cursor-pointer pointer-events-auto selection:bg-none">
              ▶
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default CarouselProjects
