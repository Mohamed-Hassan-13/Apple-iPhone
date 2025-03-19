import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../Utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  // State to manage the video source based on window width
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  // GSAP animation to fade in the hero title
  useGSAP(() => {
    gsap.to("#hero", {
      delay: 1.5,
      opacity: 1,
    });
    gsap.to("#cta", {
      delay: 2,
      opacity: 1,
      y: -50,
    });
  }, []);
  // Function to handle video source change on window resize
  const HandleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };
  // Effect to add and clean up the resize event listener
  useEffect(() => {
    window.addEventListener("resize", HandleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", HandleVideoSrcSet);
    };
  }, []);
  return (
    <section className="bg-black w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            autoPlay
            muted
            loop
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 "
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
