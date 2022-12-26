import React from "react";

const ResumeContext = React.createContext<any | null>(null);

type Props = {
  children: JSX.Element;
};

function ResumeProvider({ children }: Props) {
  const componentRef = React.useRef<HTMLDivElement>(null);

  return (
    <ResumeContext.Provider value={componentRef}>
      {children}
    </ResumeContext.Provider>
  );
}

const Context = {
  Provider: ResumeProvider,
  Context: ResumeContext,
};

export default Context;
