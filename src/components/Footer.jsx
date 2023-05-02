import React from "react"
import { Link } from "react-router-dom"

import Logo from "./logo/Logo"
import Lists from "./lists/Lists"

function Footer() {
  const socMeds = [
    {
      link: "https://www.instagram.com",
      img: "https://s3-alpha-sig.figma.com/img/7f85/33db/7c7cd6a22163199a44a7b255460c59fc?Expires=1683504000&Signature=INZc1XIPcKaULxDywMF7H965h8dKpOxJb4ru5g8YrkmxYHJmsmUQqFHJ4FFekWDCvm1xzkR4neKhd4vHXyzncjsc2DjhpOzo9dEQxvQdykffKmGXtBS2-X4FeZjLBAq50wj3hYte8hbtsbkHUQ~TAvQzu2wMEt8NR5iLSTBe1YJxN2sPyRtERYRmhQsW-Lx~bbatzZ9Io3DwD6XTzg~Dtl3gvurUG-LhOJCoCwoZNRrakm4NVPrC3B8Zo4UANiqPAF9LQI5HKuGZQrJgX6fqX0k~A7JIuumvCB7vTZOKdZFkNMsQ7rBUVEoqH~rb0XPOH9XjjtHTyMk6m1cpbw06KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      link: "https://www.linkedin.com",
      img: "https://s3-alpha-sig.figma.com/img/15f1/d324/f53a6fe5c897dec9857848bc29cd0074?Expires=1683504000&Signature=gclj1rZHHMYCgkr1RdNZnbgNVfWZ104OjUgIc0YkzakQ87JVuQR3eH9sYEo0ft3GJKLGtmHB5HEHNvcHjPbnPgmxoqJu514DqEGIaaKSnqls2~fLERU5PqNxBB3d8GJOQY0VxziJJEv6aiZMHcka0n~jheMLinv~QSZpzduwcG97ymkPLI3rovNoXBoTBHURjlwNZ5pv4os5zFmu~ofnxBBvIjOWtWy4hizUW1yVj~5KkmUXsX3zQbfs4-~gJHgXEkEdBbEzyIHjm8Lb2Zrun58-9zs4m5JpN-76XJKtBrBOD-u-wu2bAKTlCdG23DYcakOLai2DKJivfqaVnAguhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      link: "https://www.line.me",
      img: "https://s3-alpha-sig.figma.com/img/e112/9dd9/dd69f11367ebaadeba676f6c74234895?Expires=1683504000&Signature=qvd3uSAt0g2tN1RVGYV-RflQAQRBDJeaGveQHmnut9eO45F7~mwigInpHQRKLpkwaqszWHK8lzYf6y2iINLMnJZCNmTkOHP-KVCn1oaqblDdNhNlJZw49EDdIM-rrySvaupmklM98x~x5dLgXl-WJQGoiedlbai3VaxWkgJNNzADbYsRn4ddosaikheQfavMEr3AVgSVQ4csp4JSGAoWBy4nHG8NIM5b7mPhRcE~KBecL1xj6konVEH-yo3XFZXjcbRiuPl9qQAWfm~opcsDhLCC5oLbDWehYwkMK6GGUkq29BZZQcdR~5EVD3iw0iyF-ghAsBNMLOjtF1OpiXGnsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      link: "https://www.twitter.com",
      img: "https://s3-alpha-sig.figma.com/img/24cd/111b/48b066ea0e5e52345cb26e1c984551f2?Expires=1683504000&Signature=J4Dk9maDQ5lDslQvkwPSu3YsWrP7tSeKVNbiKj6Q4~ZYzVn7b0Zs~BPT7DM9Ws2vyXk-tgPxYSUGJJKIZcKtjc7981eg2JueCm-4jJShKZOB9Ncbp06YVTGpHYJTELiVvESwqoHI-wpTZRd0-UcSfwpXcHFZ0zkzAqUFNhQQUNWHdw23SUAdpAzzmF7pzu8wubkg27NCpjg06djPQXsohB1kZ9bq8tGMDJuuoIgf4tUIfxRBRDcr7FYY6XsLeFKeQeDKjBtngU~UagFA4cDpybro5XncnCi5MzfHguGsSR1U-GOvsSzHIvXg-j2Y2E8PvdWEm4ueyIxGs2s24MbtBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      link: "https://www.gmail.com",
      img: "https://s3-alpha-sig.figma.com/img/fbd1/1afd/13bcf7f87db289bf6e93f52c4cbf51ea?Expires=1683504000&Signature=WS1iI105RhIoqXVrAcUEXqStU9EACW47UTLd3oI5a0h9rvdy4N98VmLzF~EIms0izCzmwFM7S8-TLAMb-K3BQJz7ma8cn7Jkbig65~Q77ZPOORydeMbB7kXpCHPqNw5WDZ42a8Yx3mqDFKKkfX8X-vltsyy0kvbzH0Hk14ic4doG9m5MjTExZ49CxvALyzolUoePNaU952f4k3IJplFjrh6p8VBUn09E4EKBAB0aSUXA2u3xCvIF4A5EXXm3Eqfc3Ns~PiuD5xxCZYEO1VEWxWeRjbw1OOiafM26PmAiHKxoAzrIwqE4PPGvcvGMyJ2mL9dv1WZo~PBJXVaY3hziTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]

  return (
    <footer id="footer" className="bg-dark">
      <div className="w-screen flex justify-evenly lg:py-12 lg:h-96">
        <div id="exercise" className="hidden w-[30%] lg:flex flex-col gap-8">
          <Logo style="w-40" />

          <p className="font-light text-justify">
            Creating EXERCISE 2023 to be a career catalyst and a platform to
            inspire and help members apply knowledge and develop relevant skills
            in an adaptive and progressive environment.
          </p>

          <div className="font-bold">
            <p>#JourneyOfGrowth</p>
            <p>#AdaptiveRelevantProfessional</p>
          </div>
        </div>

        <div id="links" className="lg:w-[17%] flex flex-col justify-between">
          <div className="hidden lg:flex flex-col gap-4">
            <h1 className="font-extrabold text-xl">LINKS</h1>

            <div className="flex justify-between">
              <div>
                <Lists
                  lists={["Home", "Projects", "Events"]}
                  style="font-light mb-1.5"
                />
              </div>

              <div>
                <Lists
                  lists={["Features", "Exticle"]}
                  style="font-light mb-1.5"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 h-12">
            {socMeds.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="socmed icon" src={s.img} className="w-9 lg:w-8" />
              </Link>
            ))}
          </div>
        </div>

        <div id="subscribe" className="hidden w-[30%] lg:flex flex-col gap-4">
          <div className="">
            <h1 className="font-extrabold text-xl mb-2">SUBSCRIBE</h1>
            <p className="font-light text-justify text-sm">
              Enter your email to get notified about our new notifications.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <textarea
              placeholder="Enter your email address..."
              className="resize-none h-10 text-dark-2 text-sm leading-10 pl-2"
            />
            <Link
              to="/newsletter"
              className="btn bg-dark-2 tracking-wider text-center"
            >
              SUBMIT
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-justify">
              <img
                alt="location icon"
                src="https://s3-alpha-sig.figma.com/img/ade4/c520/b776a26145d2788f2d797c53d01a16fb?Expires=1683504000&Signature=AVeb7tLUIejXktLqs3KDXfQQWmYbrK-bSyEAfknPX1Ih48-DCWBzsSXeJCFxEU1xz4QYf7KHHT3Z9G2P45YUqOBMv1R3zuPFkH-qcCHa~evi4WAYXRswU1Gx~l9Nl1xAWgsKxYueME1DmzwLdwsDdPTlw9rudbhYdg1~fR-ax-IGyl0unpzURWsx6h~v1Jd420-2Yq3W7d1kBGCOGPA7LFBwpBh2NNVTgaFLq7b5D~PY6Euk7zl9QL4GlGwlaEmJS8ADPKm7FUgA9A8SbMrQpuDubSWcJ0kq9ZX3y6BYpllQ2NTxgzMLO~kXD3MfgWIJnRX1xzH6J99C9Lvaq-u7ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="w-6 object-contain"
              />

              <div>
                <p className="font-bold xl:text-sm mb-1 lg:text-xs">
                  Faculty of Engineering, University of Indonesia
                </p>
                <p className="font-light xl:text-xs lg:text-[10px]">
                  University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan,
                  Beji, Depok City, West Java 16425
                </p>
              </div>
            </div>

            <div className="flex gap-3 text-justify">
              <img
                alt="contact person icon"
                src="https://s3-alpha-sig.figma.com/img/b5df/50ad/dede4bfa14ae0af40101250cfe06f271?Expires=1683504000&Signature=bWGr5KA25tpQe11oAfIRTgcx45t1O48rU5qT9cAu1uTbtcCEKtr8sQ6w2ftvOLkk625FVEx1ToutlCnzaHpFHvMSUhb68WNYFLaiWWOE6r0P2HxuuH2S2S7e1hAn-r7f07wArPl5rpEpQG35j6Cm4F-08yIINjPrx9AIyePKfbhY8EcPQfbmgU95-dR8qf5NXJxndUKErWUNMBoSO~FIj3HPzRy2wrq8cA9vQuN~9P7OvOKsDZr7fTOxSQPwIqsg7nmeGHGNxDiUUaTHXS43tJjNATFLnY77ejOO~rn1SMsH0YwU~12~56ZBrpCw-m0LyoWSCZtwLj93hvE4M2ky8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="w-6 object-contain"
              />

              <div>
                <p className="font-bold xl:text-sm mb-1 lg:text-xs">
                  Contact Us
                </p>
                <p className="font-light xl:text-xs lg:text-[10px]">
                  Denise (081234567890 / handaneswari13)
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-full h-8 bg-dark lg:bg-dark-1 font-light text-sm flex items-center justify-center">
        Copyright © 2023. Exercise FTUI
      </div>
    </footer>
  )
}

export default Footer
