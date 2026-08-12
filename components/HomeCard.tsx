import Image from "next/image";
import { ReactNode } from "react";

interface HomeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string; // <-- make this optional
}

const HomeCard = ({ icon, title, description, handleClick, className }: HomeCardProps) => {
  return (
    <div 
      className={`${className} px-4 py-6 rounded-[20px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-6">
        {icon}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;