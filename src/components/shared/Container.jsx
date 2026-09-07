import { cn } from "../../lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full max-w-7xl px-4 lg:px-8 2xl:max-w-360 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
