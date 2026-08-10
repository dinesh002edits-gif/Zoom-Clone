"use client"
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HomeCardProps {
  icon: ReactNode; // <- this is what was missing
  title: string;
  description: string;
  className: string;
  handleClick: () => void;
}

const HomeCard = ({ icon, title, description, className, handleClick }: HomeCardProps) => {
  return (
    <div
      onClick={handleClick}
      className={cn(
        "px-6 py-8 rounded-2xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 text-white",
        className
      )}
    >
      <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default HomeCard;