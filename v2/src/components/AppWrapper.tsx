import React, { ReactNode } from 'react';

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-screen bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e,transparent_1px)] bg-[size:14px_24px]">
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
