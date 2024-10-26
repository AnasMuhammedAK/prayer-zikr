import { BasicCardProps } from "@/app/page";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CommonComponent = ({
  masterData,
  targetId,
  dataId,
}: {
  masterData: any;
  targetId: string;
  dataId: string;
}) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isTargetExist, setIsTargetExist] = useState<any>("");
  const [completed, setCompleted] = useState<any>("");
  const prayer = masterData.find(
    (prayer: BasicCardProps) => prayer?.id?.toString() === id
  );
  const handleSet = () => {
    if (!value) {
      alert("Please set your target");
      return;
    }
    localStorage?.setItem(targetId + id, JSON.stringify(value));
    setIsTargetExist(value);
    setValue(value);
    setOpen(false);
  };
  const handleAdd = () => {
    if (!isTargetExist) {
      alert("Please Set A target");
    } else if (completed >= parseInt(isTargetExist)) {
      alert("You are achived your target");
    } else {
      const data = localStorage?.getItem(dataId + id);
      if (data) {
        localStorage?.setItem(
          dataId + id,
          JSON.stringify(parseInt(JSON.parse(data)) + 1)
        );
        setCompleted(parseInt(JSON.parse(data)) + 1);
      } else {
        localStorage?.setItem(dataId + id, JSON.stringify(1));
        setCompleted(1);
      }
    }
  };
  const handleRemove = () => {
    if (!isTargetExist) {
      alert("Please Set A target");
    } else if (
      parseInt(isTargetExist) - completed <= 0 &&
      parseInt(isTargetExist) !== completed
    ) {
      alert("You can't remove from zero");
    } else {
      const data = localStorage?.getItem(dataId + id);
      if (data && completed > 0) {
        localStorage?.setItem(
          dataId + id,
          JSON.stringify(parseInt(JSON.parse(data)) - 1)
        );
        setCompleted(parseInt(JSON.parse(data)) - 1);
      }
    }
  };
  const handleReset = () => {
    const userConfirmed = window.confirm("Are you sure you want to reset?");
    if (userConfirmed) {
      localStorage?.removeItem(dataId + id);
      localStorage?.removeItem(targetId + id);
      setValue("");
      setIsTargetExist("");
      setCompleted("");
    } else {
      console.log("Reset canceled.");
    }
  };
  useEffect(() => {
    const storedTarget = localStorage?.getItem(targetId + id);
    const storedCompleted = localStorage?.getItem(dataId + id);

    if (storedTarget) {
      setIsTargetExist(JSON.parse(storedTarget));
      setValue(JSON.parse(storedTarget));
    }
    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }
  }, [id]);
  return (
    <div className="p-8  shadow-sm shadow-[#FFD700] rounded-md">
      <img
        src="/reset.svg"
        style={{ width: 24, height: 24, float: "right", cursor: "pointer" }}
        alt="reset"
        onClick={handleReset}
      />

      <p className="text-[50px] text-center mt-[20px]">
        {prayer?.title} - {completed ? completed : 0}
      </p>
      {isTargetExist ? (
        <p className="text-center text-[20px]">
          {parseInt(isTargetExist) - completed} Days or{" "}
          {((parseInt(isTargetExist) - completed) / 365).toFixed(1)} Year Left
        </p>
      ) : (
        <p className="text-center text-[20px]">Please set your target</p>
      )}

      <div className="flex items-center justify-center bg-black p-4">
        <p
          className="w-[200px] h-[40px] text-center py-2 bg-[#FFD700] text-black cursor-pointer rounded hover:shadow-[0_4px_6px_rgba(255,215,0,0.5)] hover:text-[18px]"
          onClick={handleAdd}
        >
          add one
        </p>
      </div>
      <div className="flex items-center justify-center bg-black ">
        <p
          className="w-[200px] h-[40px] text-center py-2 bg-[#FFD700] text-black cursor-pointer rounded hover:shadow-[0_4px_6px_rgba(255,215,0,0.5)] hover:text-[18px]"
          onClick={handleRemove}
        >
          remove one
        </p>
      </div>
      <div
        className="flex items-center justify-center bg-black p-4 "
        onClick={() => setOpen(!open)}
      >
        <p className="w-[200px] h-[40px] text-center py-2  text-[#FFD700] cursor-pointer rounded hover:shadow-[0_4px_6px_rgba(255,215,0,0.5)] text-[20px]">
          {open ? "hide" : isTargetExist ? "edit target" : "set target"}
        </p>
      </div>
      {open && (
        <div className="relative">
          <input
            className="outline-none w-full h-9 rounded border-2 border-[#FFD700] pl-2"
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              if (/^\d*$/.test(newValue)) {
                setValue(newValue);
              }
            }}
            placeholder="enter total fajr kalah"
          />
          <div
            className="rounded border-2 border-[#FFD700] absolute top-0 right-0 py-[4px] px-5 cursor-pointer hover:border-black"
            onClick={handleSet}
          >
            SET
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonComponent;
