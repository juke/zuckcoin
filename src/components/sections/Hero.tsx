import { useEffect, useRef } from 'react';
import markImage from '../../assets/mark.png';
import gsap from 'gsap';
import { LampContainer } from '../ui/lamp';
import { motion } from 'framer-motion';

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
    <section className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      {/* Dark grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <LampContainer className="h-[100vh] -translate-y-32">
        <div className="flex flex-col items-center text-center gap-6 max-w-5xl mx-auto -translate-y-32">
          <div 
            ref={imageRef}
            className="relative w-64 h-64 -translate-y-32"
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
          
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="space-y-6 relative z-50 -translate-y-36 w-full"
          >
            <h1 className="text-7xl font-bold mb-6 text-white tracking-wide [text-shadow:_0_0_30px_rgb(5_84_206),_0_0_60px_rgb(5_84_206)]">
              ZUCK: THE MEME LORD
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-6 leading-relaxed font-medium [text-shadow:_0_0_20px_rgb(5_84_206)]">
                Zuck Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$ZUCK" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type.
              </p>

              <p className="text-lg text-white font-bold [text-shadow:_0_0_15px_rgb(5_84_206)]">
                http://zuckcoin.xyz/ is not affiliated with Mark Zuckerberg, it is a community meme!
              </p>
            </div>

            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="pt-4"
            >
              <a 
                href="https://pump.fun/coin/9ncU1H8JeiMf1nKjAi955MxEs8GTqB3cr9Lh8zrEpump"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0554CE] to-[#0554CE] rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                <button className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                  <span className="pr-6 text-white font-bold text-xl [text-shadow:_0_0_15px_rgb(5_84_206)]">Buy $ZUCK Now</span>
                  <span className="pl-6 text-[#0554CE] group-hover:text-white transition duration-200">→</span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
} 