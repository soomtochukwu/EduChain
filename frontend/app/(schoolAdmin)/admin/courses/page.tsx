"use client";

import { schABI, schAddress } from "@/utils/schoolContract";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import { useEffect, useState } from "react";
import {
  useReadContract,
  useWatchContractEvent,
  useWriteContract,
} from "wagmi";

export default function CoursesPage() {
  const //
    [courseTitle, setCourseTitle] = useState(""),
    [capacity, setCapacity] = useState(0),
    [description, setDescription] = useState(""),
    //
    [_title, _setTitle] = useState<string[]>([]),
    [_lecturer, _setLecturer] = useState<string[]>([]),
    [_capacity, _setCapacity] = useState<bigint[]>([]),
    [_enrolledStudents, _setEnrolledStudents] = useState<bigint[]>([]),
    [_description, _setDescription] = useState<string[]>([]),
    //
    { writeContractAsync, status } = useWriteContract(),
    { refresh } = useRouter();

  let availableCourses = useReadContract({
    abi: schABI,
    address: schAddress,
    functionName: "getAllCourses",
    // @ts-ignore
    args: [],
  });
  //

  useWatchContractEvent({
    address: schAddress,
    abi: schABI,
    eventName: "CourseCreated",
    onLogs(logs) {
      console.log("New logs!", logs);
    },
  });

  useEffect(() => {
    const data = availableCourses.data;
    //
    _setTitle(data?.[0] as string[]);
    _setLecturer(data?.[1] as string[]);
    _setCapacity(data?.[2] as bigint[]);
    _setEnrolledStudents(data?.[3] as bigint[]);
    _setDescription(data?.[4] as string[]);
    //
  }, [availableCourses]);

  useEffect(() => {
    if (status == "success") {
      setTimeout(() => {
        refresh();
      }, 2000);
    }
  }, [status]);
  return (
    <main className="w-1/2  gap-4 p-4 lg:gap-6 lg:p-6 ">
      <div>
        create courses
        <div className="w-fit ">
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
            className="active:bg-gray-600 w-full bg-gray-500 p-2 m-1 rounded-lg text-white"
            onClick={() => {
              writeContractAsync({
                abi: schABI,
                address: schAddress,
                functionName: "createCourse",
                args: [courseTitle, BigInt(capacity), description],
              });
            }}
          >
            {status == ("pending" || "success") ? status : "Create course"}
          </button>
        </div>
        Existing Courses
        <div className=" flex flex-wrap flex-col justify-center items-center ">
          {_title !== undefined
            ? _title.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="md:w-fit p-2 my-2 bg-gray-200 rounded-lg"
                  >
                    <div>
                      <div>Title: {_title[index]}</div>
                      <div>Lecturer: {_lecturer[index]}</div>
                      <div>Capacity: {_capacity[index]}</div>
                      <div>Enrolled Students: {_enrolledStudents[index]}</div>
                      <div>Description: {_description[index]}</div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </main>
  );
}
