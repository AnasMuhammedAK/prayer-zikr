import { BasicCardProps } from "@/app/page";
import { useRouter } from "next/navigation";
import React from "react";

const BasicCard = ({ title, badge, path }: BasicCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        if (path) router.push(path);
      }}
      className="relative cursor-pointer flex items-center justify-center sm:w-[150px] w-[100px] sm:h-[150px] h-[100px] shadow-sm shadow-[#FFD700] rounded-md"
    >
      <p className="text-3xl">{title}</p>
      {badge && (
        <span className="absolute top-4 right-2 bg-black text-[#FFD700] text-[8px]  me-2 px-[5px] py-[1px] rounded   border-[0.1px] border-[#FFD700]">
          {badge}
        </span>
      )}
    </div>
  );
};

export default BasicCard;
