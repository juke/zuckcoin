import markImage from '../../assets/mark.png';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-64 h-64 mb-8">
            <img
              src={markImage}
              alt="Mark Zuckerberg"
              className="w-full h-full object-cover rounded-full border-4 border-[#4267B2] shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4267B2]/20 to-transparent rounded-full" />
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#4267B2] to-[#898F9C] text-transparent bg-clip-text">
            ZUCK: THE MEME LORD
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Join the ultimate meme revolution with $ZUCK. Because in the metaverse, 
            even lizard people need their own cryptocurrency.
          </p>
          
          <button className="bg-[#4267B2] hover:bg-[#365899] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Buy $ZUCK Now
          </button>
        </div>
      </div>
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM0MjY3QjIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
    </section>
  );
} 