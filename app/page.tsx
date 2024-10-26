"use client";
import BasicCard from "@/components/BasicCard";
export interface BasicCardProps {
  title: string;
  badge?: string;
  path?: string;
  id?: number;
}
export default function Home() {
  const data: BasicCardProps[] = [
    {
      title: "Salah",
      badge: "old",
      path: "/salah/old",
    },
    {
      title: "Azkaar",
      badge: "old",
      path: "/azkaar/old",
    },
    {
      title: "Salah",
      badge: "new",
      path: "/salah/new",
    },
    {
      title: "Azkaar",
      badge: "new",
      path: "/azkaar/new",
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
}
