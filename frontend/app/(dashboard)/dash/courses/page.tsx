"use client";

import { Course } from "@/lib/types";
import RegisteredCoursesCard from "./_components/registered-course-card";
import Link from "next/link";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { schABI, schAddress } from "@/utils/schoolContract";
import { useEffect, useState } from "react";

export default function ChatUi() {
  const //
    //
    [_title, _setTitle] = useState<string[]>([]),
    [_status, _setStatus] = useState(""),
    [_lecturer, _setLecturer] = useState<string[]>([]),
    [_capacity, _setCapacity] = useState<bigint[]>([]),
    [_enrolledStudents, _setEnrolledStudents] = useState<bigint[]>([]),
    [_description, _setDescription] = useState<string[]>([]),
    //
    //
    { address } = useAccount(),
    { writeContractAsync, status, failureReason } = useWriteContract(),
    registeredCourses = useReadContract({
      abi: schABI,
      address: schAddress,
      functionName: "getCoursesRegisteredByStudent",
      args: [address as `0x${string}`],
    });

  let availableCourses = useReadContract({
    abi: schABI,
    address: schAddress,
    functionName: "getAllCourses",
    // @ts-ignore
    args: [],
  });

  useEffect(() => {}, [registeredCourses.status]);

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
    failureReason !== null ? alert(failureReason?.cause) : null;
  }, [failureReason]);

  useEffect(() => {
    _setStatus(status);
  }, [status]);

  return (
    <main className="flex justify-center items-center gap-4 p-4 md:gap-8 md:p-6">
      <div className="w-3/4">
        <h1>Your courses</h1>
        <section className="flex flex-wrap gap-2 mb-5">
          <div>
            {registeredCourses.data?.map((course) => {
              return (
                <div key={Number(course)}>
                  {Number(course)}:{" "}
                  {_title !== undefined ? _title[Number(course) - 1] : null}
                </div>
              );
            })}
          </div>
        </section>
        <section className="">
          <h1>Recommended Courses</h1>

          <div className=" flex flex-wrap justify-center  ">
            {_title !== undefined
              ? _title.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="md:w-fit p-2 m-2 hover:bg-gray-300 bg-gray-200 rounded-lg"
                    >
                      <div
                        className="w-96 cursor-pointer"
                        onClick={() => {
                          writeContractAsync({
                            abi: schABI,
                            address: schAddress,
                            functionName: "registerForCourse",
                            args: [_title[index]],
                          });
                        }}
                      >
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
        </section>
      </div>
    </main>
  );
}
