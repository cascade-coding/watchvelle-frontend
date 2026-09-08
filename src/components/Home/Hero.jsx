const Hero = () => {
  return (
    <div className="relative min-h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/46"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm uppercase tracking-widest mb-4">
          DISCOVER YOUR NEXT WATCH
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find the Watch That Fits You.
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Every style. Every occasion. Every moment.
        </p>
      </div>
    </div>
  );
};

export default Hero;
