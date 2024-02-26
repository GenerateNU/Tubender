import React, { ReactNode } from "react";

interface StepWrapperProps {
  children?: ReactNode;
  title?: string;
}

const StepWrapper: React.FC<StepWrapperProps> = ({ children, title }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6">
        <h2 className="font-semibold text-3xl text-brand-blue">{title}</h2>
    <div className="w-1/3 flex flex-col justify-center items-center gap-6">
        {children}
      </div>
    </div>
  );
};

export default StepWrapper;
