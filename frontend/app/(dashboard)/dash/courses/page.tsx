"use client";

import { Course } from "@/lib/types";
import RegisteredCoursesCard from "./_components/registered-course-card";
import Link from "next/link";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { schABI, schAddress } from "@/utils/schoolContract";
import { useEffect } from "react";

export default function ChatUi() {
  const courses: Course[] = [
    {
      name: "Introduction to Computer Science",
      lecturer: "Dr. Sarah Lee",
      capacity: 50,
      enrolledStudents: 45,
      sessionId: "CSCI101-2023",
      description:
        "This course covers the fundamental concepts of computer science, including algorithms, data structures, and programming.",
      students: [
        { id: "student1" },
        { id: "student2" },
        { id: "student3" },
        { id: "student4" },
        { id: "student5" },
      ],
    },
    {
      name: "Data Structures and Algorithms",
      lecturer: "Prof. Michael Chen",
      capacity: 35,
      enrolledStudents: 32,
      sessionId: "CSCI201-2023",
      description:
        "This course explores the design and implementation of fundamental data structures and algorithms.",
      students: [
        { id: "student6" },
        { id: "student7" },
        { id: "student8" },
        { id: "student9" },
        { id: "student10" },
      ],
    },
    {
      name: "Web Development Fundamentals",
      lecturer: "Dr. Emily Wang",
      capacity: 40,
      enrolledStudents: 38,
      sessionId: "WEBDEV101-2023",
      description:
        "This course teaches the basics of web development, including HTML, CSS, and JavaScript.",
      students: [
        { id: "student11" },
        { id: "student12" },
        { id: "student13" },
        { id: "student14" },
        { id: "student15" },
      ],
    },
    {
      name: "Introduction to Machine Learning",
      lecturer: "Prof. John Doe",
      capacity: 25,
      enrolledStudents: 23,
      sessionId: "CSCI301-2023",
      description:
        "This course provides an introduction to the field of machine learning and its applications.",
      students: [
        { id: "student16" },
        { id: "student17" },
        { id: "student18" },
        { id: "student19" },
        { id: "student20" },
      ],
    },
  ];

  const { address } = useAccount(),
    registeredCourses = useReadContract({
      abi: schABI,
      address: schAddress,
      functionName: "studentCourses",
      // @ts-ignore
      args: [address],
    }),
    availableCourses = useReadContract({
      abi: schABI,
      address: schAddress,
      functionName: "getAllCourseNames",
      // @ts-ignore
      args: [],
    });

  useEffect(() => {
    console.log(availableCourses.data);
  }, [availableCourses]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div>
        <h1>Your courses</h1>
        <section className="flex flex-wrap gap-2 mb-5">
          {courses.map((course) => {
            return (
              <RegisteredCoursesCard
                key={course.name + course.sessionId}
                course={course}
              />
            );
          })}
        </section>
        <section className="">
          <h1 className="bg-gray-300 p-2 my-2">Recommended Courses</h1>
          <div className="flex flex-wrap">
            {availableCourses.data?.map((x) => {
              return (
                <div
                  className=" gap-4 p-4 md:gap-8 md:p-7 md:m-1 border-2 rounded-lg border-slate-200"
                  key={x + 1}
                >
                  <Link href={""} key={x}>
                    {x}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
