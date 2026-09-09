import { useNavigate } from "react-router";
import Button from "../shared/Button";
import Container from "../shared/Container";

const Hero = () => {
  let navigate = useNavigate();

  return (
    <div className="relative min-h-125 flex justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/46"></div>

      {/* Content */}
      <Container className="relative z-10 text-white pt-28">
        <p className="text-base font-bold uppercase tracking-[1.8px] mb-3">
          DISCOVER YOUR NEXT WATCH
        </p>

        <h1 className="text-4xl md:text-5xl tracking-[1.4px] font-brand font-bold uppercase mb-3 -ml-0.5">
          Find the Watch That Fits You.
        </h1>

        <p className="text-lg font-semibold md:text-xl mb-8">
          Every style. Every occasion. Every moment.
        </p>

        <div>
          <Button
            onClick={() => {
              navigate("/watches");
            }}
          >
            Explore Watches
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
