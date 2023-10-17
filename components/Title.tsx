import React, { ReactNode } from "react";

const Title = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-full ` + className}
    >
      <h1 className="text-[1.2rem] md:text-2xl font-medium text-gray-600 ">
        {children}
      </h1>
    </div>
  );
};

export default Title;
