"use client";
import { BasicCardProps } from "@/app/page";
import BasicCard from "@/components/BasicCard";
import { usePathname } from "next/navigation";
import React from "react";

const Azkar = () => {
  const pathName = usePathname();
  const data: BasicCardProps[] = [
    {
      title: "Vird Sabah",
      id: 1,
      path: pathName + "/1",
    },
    {
      title: "Virdh Masah",
      id: 2,
      path: pathName + "/2",
    },
    {
      title: "Al Waleefa",
      id: 3,
      path: pathName + "/3",
    },
    {
      title: "Al Hailala",
      id: 4,
      path: pathName + "/4",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.map((item: BasicCardProps) => (
        <BasicCard
          key={item?.title}
          title={item?.title}
          badge={item?.badge}
          path={item?.path}
        />
      ))}
    </div>
  );
};

export default Azkar;
