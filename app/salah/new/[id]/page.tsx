"use client";
import { BasicCardProps } from "@/app/page";
import CommonComponent from "@/components/CommonComponent";

import React from "react";
const masterData: BasicCardProps[] = [
  {
    title: "Fajr",
    id: 1,
  },
  {
    title: "Dhuhr",
    id: 2,
  },
  {
    title: "Asr",
    id: 3,
  },
  {
    title: "Maghrib",
    id: 4,
  },
  {
    title: "Isha",
    id: 5,
  },
];
const Prayer = () => {
  return (
    <CommonComponent
      masterData={masterData}
      dataId="old-data-"
      targetId="old-target-"
    />
  );
};

export default Prayer;
