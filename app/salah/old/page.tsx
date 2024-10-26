"use client";
import { BasicCardProps } from "@/app/page";
import BasicCard from "@/components/BasicCard";
import { usePathname } from "next/navigation";
import React from "react";

const OldSalah = () => {
  const pathName = usePathname();
  const data: BasicCardProps[] = [
    {
      title: "Fajr",
      id: 1,
      path: pathName + "/1",
    },
    {
      title: "Dhuhr",
      id: 2,
      path: pathName + "/2",
    },
    {
      title: "Asr",
      id: 3,
      path: pathName + "/3",
    },
    {
      title: "Maghrib",
      id: 4,
      path: pathName + "/4",
    },
    {
      title: "Isha",
      id: 5,
      path: pathName + "/5",
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

export default OldSalah;
