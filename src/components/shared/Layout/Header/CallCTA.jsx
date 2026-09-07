import Calling from "../../../icons/Calling";

const CallCTA = () => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Calling />
        <div className="flex flex-col">
          <span className="text-muted text-sm font-medium tracking-[0.5px]">
            Call us
          </span>
          <a
            href="tel:+12025550147"
            className="text-gold font-brand text-sm tracking-[0.5px]"
          >
            (202) 555-0147
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallCTA;
