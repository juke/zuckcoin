import { useEffect, useRef } from 'react';
import markImage from '../../assets/mark.png';
import gsap from 'gsap';
import { LampContainer } from '../ui/lamp';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    // Subtle floating animation for Zuck's image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className="min-h-screen relative overflow-y-auto bg-[#050713]">
      <div className="relative h-full w-full flex flex-col bg-[#050713]">
        {/* Lamp Section - Fixed height */}
        <div className="h-[25vh] md:h-[35vh] relative">
          <LampContainer className="absolute inset-0 w-full h-full -translate-y-1/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            />
          </LampContainer>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex items-start justify-center">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-6 md:px-8 gap-8 md:gap-16 -translate-y-44 md:-translate-y-56">
            {/* Top Section with Image and Button */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Image */}
              <div 
                ref={imageRef}
                className="relative w-48 h-48 md:w-72 md:h-72 mb-4 md:mb-8"
              >
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-[#0554CE] rounded-full opacity-30 blur-xl" />
                {/* Inner glow */}
                <div className="absolute -inset-2 bg-[#0554CE] rounded-full opacity-20 blur-md" />
                <div className="relative rounded-full overflow-hidden border-4 border-[#0554CE] shadow-[0_0_30px_rgba(5,84,206,0.8)]">
                  <img
                    src={markImage}
                    alt="Mark Zuckerberg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative w-full flex justify-center"
              >
                <a 
                  href="https://pump.fun/coin/9ncU1H8JeiMf1nKjAi955MxEs8GTqB3cr9Lh8zrEpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0554CE] to-[#0554CE] rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <button className="relative px-6 md:px-8 py-3 md:py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                    <span className="pr-4 md:pr-6 text-white font-bold text-lg md:text-xl [text-shadow:_0_0_15px_rgb(5_84_206)]">Buy $ZUCK Now</span>
                    <span className="pl-4 md:pl-6 text-[#0554CE] group-hover:text-white transition duration-200">→</span>
                  </button>
                </a>
              </motion.div>
            </div>
            
            {/* Text Content */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="space-y-6 relative z-50 w-full"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-wide text-center [text-shadow:_0_0_30px_rgb(5_84_206),_0_0_60px_rgb(5_84_206)]">
                ZUCK: THE MEME LORD
              </h1>
              
              <div className="max-w-3xl mx-auto text-left md:text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                  }}
                >
                  <TextGenerateEffect 
                    words="Welcome to the memetic revolution! $ZUCK isn't just another coin – it's a digital tribute to the ultimate tech overlord turned meme sensation. Join us in celebrating the awkward charm and robot-like charisma that made Zuck a living meme. 🤖✨"
                    className="text-white mb-6 text-sm md:text-base [text-shadow:_0_0_20px_rgb(5_84_206)]"
                    duration={0.00001}
                    filter={false}
                  />
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.5,
                  }}
                  className="text-white text-xs md:text-sm font-medium [text-shadow:_0_0_15px_rgb(5_84_206)]"
                >
                  http://zuckcoin.xyz/ is not affiliated with Mark Zuckerberg, it is a community meme!
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 