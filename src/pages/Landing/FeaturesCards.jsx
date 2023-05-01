import React from "react"
import { Link } from "react-router-dom"

function Features() {
  const features = [
    {
      title: "URL Shortener",
      desc: "Streamline your online presence, craft a personalized link that reflects your brand and simplifies your web presence. try now!",
      img: "https://s3-alpha-sig.figma.com/img/533d/1d2c/44f667553d8b83ae0443259e899745cb?Expires=1683504000&Signature=iJh25V9Pz06g5mSkha1PFZk~Dp9jhLMg~Uu7EMGYQT4KBuJlZFnSyn5wrMOCn2hrhT49987fAcJBm3NgwuT8Gt1m6shlGhjiRihdBk9ZvTFVoQ1VJJGNi6u5BdWHEVfTYPTYJ6UG0y-6gj0xiTuF6oPEuYxkwd72nszD-QouNaMnl9rkZeq~NaeaPbmqtz2mj-FEOgT2uXZ95a3TuXjjkpLAVddSo4ftVnJEeBSoDP4o8PeSag0JA1mh62NXwFJdRcjX4BgKvbUb5dWY~2Op324SxPVamgpAK-Qv8QdsSfjISMPg1--6x7jfuMYs9MddPE4Z0txKEyF5VE5YEMR4Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "Background Remover",
      desc: "Don't let a distracting or unprofessional background ruin your photos. remove your photo’s background here for certain purpose.",
      img: "https://s3-alpha-sig.figma.com/img/bacf/1de0/66e821b7311c6152c0af9f8a75f16dcf?Expires=1683504000&Signature=QnBKkyAn3Lko2Y1oq97MgjFh7Fxwix0H9Z6WgpZF7EDAfTZjPbDAPwPe2O9jAVoT7RLAMGOF2mowyksCbZXulQaTMcFtiQaxwT05yhk2IjbfD3--TtrTtsD8jlMWlhAfMGS7C7kdPyzTz8Pq003RZ~dlLGmKxfbVqqX3PEzmJLt7ZM14VjYZpGKI5EZ6GXk6HyfoQrl2NqzL~HmrmZB8~XppCMF2oriA~W388yxfg0qpr9A0UA7auu68d9anQMa2JyBHmi-mAfl5hCCUTRFgsyb2l0ShN6mycYXOuQt68q02ALVT6tdWMUQMoinwXDpEX3eY~pczUXYj0PG3IsGGUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "AI Presentation Pro",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non.",
      img: "https://s3-alpha-sig.figma.com/img/031f/5e79/af0dd3f53a910464bf1a16bb114cd497?Expires=1683504000&Signature=I-YsJf9gLbteMApn~ZSERKqtHqRA1Q2IiAKp-FeP5HeNtBRZl8137Syg5bOR-Mff84~yF90omnWNOTrs~2l9yv7LWzUngdN8Pr6IeP6A~-uL6spPTNZFztt~XIeSPYRGUk4Km09-pBUqzwon0~~n~RrbVWY4ttWWgP1G56xoW95xWApu1Oi9VtlvxzudMakfQfny4TqHxUMxaquuLXm-zHJk-fAQzIWUBtqTM41J7ILKhnVdTDWOY4yDBTOm03IVFrFK~uyQjpT~4grn6eRQ3mYlcv5F1BhDu9jicTqVbmWGaZXPygiOqnifTvFqCq3pWF02EGwVIuPy~S7o6A0mUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]

  return (
    <section id="landing-features" className="py-12 lg:py-16">
      <p className="font-semibold text-grey-2 text-center text-xl px-8 mb-8 md:text-3xl lg:mb-12">
        Save your time, stay organized, get more done!
      </p>

      <div className="w-screen px-8 flex flex-wrap items-center justify-center gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-grey-2 w-fit">
            <img
              alt={f.title + " Image"}
              src={f.img}
              className="object-cover w-full h-56 lg:h-80 lg:w-96"
            />

            <div className="w-full py-4 px-6 lg:max-w-sm lg:h-52">
              <Link
                to={`/feature/${f.title.toLowerCase().replace(" ", "-")}`}
                className="font-extrabold text-base underline lg:text-xl"
              >
                {f.title}
              </Link>

              <p className="font-light text-justify text-sm my-4 lg:text-lg">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
