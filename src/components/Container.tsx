import React from "react";

interface ContainerInterface {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerInterface) => {
  return (
    <div className="mx-auto max-w-[1500px] px-[40px] md:px-[120px]">
      {children}
    </div>
  );
};

export default Container;
