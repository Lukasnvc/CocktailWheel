import { createContext, useState } from "react";

const SpinContext = createContext();

const SpinWheelProvider = ({ children }) => {
  const [spinWheel, setSpinWheel] = useState(false);

  const toggleSpin = () => {
    setSpinWheel((prevSpinWheel) => !prevSpinWheel);
  };

  return (
    <SpinContext.Provider value={{ spinWheel, toggleSpin }}>
      {children}
    </SpinContext.Provider>
  );
};

export { SpinWheelProvider, SpinContext };
