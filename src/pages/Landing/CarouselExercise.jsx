import React from "react"
import { Link } from "react-router-dom"

import AutoSlider from "../../components/carousels/AutoSlider"

function Carousel() {
  const imgs = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ]

  return (
    <div id="landing-get-to-know-section">
      <div className="relative">
        <AutoSlider imgs={imgs} />

        <div className="bg-dark bg-opacity-90 text-center text-light absolute top-0 left-0 z-[1] w-full h-full flex-center">
          <div className="site-wrapper w-container text-center flex flex-col items-center">
            <h1 className="font-extrabold text-6xl mb-8 md:text-8xl lg:text-[9rem] lg:mb-16 xl:text-[7rem]">
              EXERCISE <br className="lg:hidden" />
              <span className="text-8xl sm:text-6xl md:text-[10rem] lg:text-[9rem] xl:text-[7rem]">
                FTUI
              </span>
            </h1>

            <p className="font-light text-lg leading-relaxed mb-8 md:text-2xl md:leading-relaxed md:max-w-2xl lg:text-4xl lg:leading-relaxed lg:max-w-3xl lg:mb-16 xl:text-2xl xl:leading-relaxed">
              We started innovating since 1234 with a track record of qualified
              work and has become one of the growing technology organizations of
              the University of Indonesia. Dig further to find out the best of
              us!
            </p>

            <Link
              to="/get-to-know"
              className="btn bg-light text-dark-2 text-xl rounded-md md:text-2xl lg:text-4xl xl:text-2xl"
            >
              Get to Know
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
