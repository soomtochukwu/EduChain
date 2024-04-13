import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <Image width={50} height={50} src={""} alt={""}></Image>
    </div>
  );
}
