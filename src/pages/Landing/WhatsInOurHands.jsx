import React from "react"

import icons from "../../assets/landing/icons"

function WhatsInOurHands() {
  return (
    <div id="landing-whats-in-our-hands-section" className="py-20 xl:pb-32">
      <div className="site-wrapper w-container">
        <p className="section-head font-light text-grey-2 text-5xl mb-16 xl:text-6xl">
          What's in Our <br className="xl:hidden" />
          Hands?
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 xl:gap-4">
          {icons.map(({ img, title }, i) => (
            <div
              key={i}
              className="group bg-grey-2 cursor-alias duration-300 ease-out w-36 h-36 p-4 flex-center text-center hover:bg-opacity-0 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-40 xl:h-40"
            >
              <img
                alt={title + " Icon"}
                src={img}
                className="group-hover:hidden duration-300 ease-out"
              />
              <p className="font-semibold text-grey-2 text-lg hidden group-hover:block duration-300 ease-out md:text-xl xl:text-2xl">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatsInOurHands
