import { FC } from "react";

const SideBar: FC = () => {
  return (
    <div 
      className="hidden md:flex fixed right-0 top-0 h-full w-[calc(100vw/7)] bg-[#003366] z-40 flex-col items-center"
      style={{ minWidth: "140px" }}
    >
      <div className="pt-16 flex flex-col items-center">
        {/* Logotipo da IASD */}
        <div className="w-32 h-32 mb-6 flex items-center justify-center">
          <img 
            src="/images/adventist-symbol--white.png" 
            alt="Símbolo Adventista" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar; 