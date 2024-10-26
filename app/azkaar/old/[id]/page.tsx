"use client";
import { BasicCardProps } from "@/app/page";
import CommonComponent from "@/components/CommonComponent";

import React from "react";
const masterData: BasicCardProps[] = [
  {
    title: "Vird Sabah",
    id: 1,
  },
  {
    title: "Virdh Masah",
    id: 2,
  },
  {
    title: "Al Waleefa",
    id: 3,
  },
  {
    title: "Al Hailala",
    id: 4,
  },
];
const Prayer = () => {
  return (
    <CommonComponent
      masterData={masterData}
      dataId="zikr-old-data-"
      targetId="zikr-old-target-"
    />
  );
};

export default Prayer;
