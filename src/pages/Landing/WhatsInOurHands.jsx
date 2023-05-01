import React from "react"

import icons from "../../assets/landing/icons"

function WhatsInOurHands() {
  return (
    <section
      id="landing-whats-in-our-hands"
      className="bg-light text-center w-screen py-24 flex flex-col items-center gap-12 md:py-36 md:gap-24 xl:pb-48 xl:pt-24 xl:gap-28"
    >
      <p className="font-light text-grey-2 text-5xl xl:text-6xl">
        What's in Our Hands?
      </p>

      <div className="w-fit flex flex-wrap justify-center gap-6 md:gap-12">
        {icons.map(({ img, title }, i) => (
          <div
            key={i}
            className="group bg-grey-2 cursor-alias duration-300 ease-out w-36 h-36 p-4 flex items-center justify-center hover:bg-opacity-0 md:w-44 md:h-44 xl:w-48 xl:h-48"
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
    </section>
  )
}

export default WhatsInOurHands
