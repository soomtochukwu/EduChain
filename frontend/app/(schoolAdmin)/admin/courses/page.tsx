"use client";

import { schABI, schAddress } from "@/utils/schoolContract";
import { useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";

export default function CoursesPage() {
  const [courseTitle, setCourseTitle] = useState(""),
    [capacity, setCapacity] = useState(0),
    [description, setDescription] = useState(""),
    { writeContractAsync } = useWriteContract();

  return (
    <main className="flex justify-center items-center gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        create courses
        <div className="w-fit">
          <form className="flex flex-col">
            <div>
              <input
                className="m-1 p-2 bg-gray-200 rounded-lg"
                type="text"
                placeholder="Course Title"
                onChange={(event) => {
                  setCourseTitle(event.target.value);
                }}
              />
              <input
                className="m-1 p-2 bg-gray-200 rounded-lg"
                type="number"
                placeholder="Max. No. of Students"
                onChange={(event) => {
                  setCapacity(Number(event.target.value));
                }}
              />
            </div>
            <textarea
              cols={45}
              rows={5}
              className="m-1 p-2 bg-gray-200 rounded-lg"
              placeholder="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </form>
          <button
            className=" bg-gray-700:click w-full bg-gray-600 p-2 m-1 rounded-lg text-white"
            onClick={() => {
              writeContractAsync({
                abi: schABI,
                address: schAddress,
                functionName: "createCourse",
                args: [courseTitle, BigInt(capacity), description],
              });
            }}
          >
            Create Course
          </button>
        </div>
      </div>
    </main>
  );
}
