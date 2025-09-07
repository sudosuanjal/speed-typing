import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="relative text-3xl  leading-relaxed m-3">{children}</div>
  );
};

export default Container;
