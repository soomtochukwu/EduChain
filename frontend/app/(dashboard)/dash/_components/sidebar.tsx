import {
  ActivityIcon,
  BotIcon,
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellIcon, DashboardIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
export const paths = [
  {
    href: "/dash",
    name: "overview",
    Icon: HomeIcon,
  },
  {
    href: "/dash/courses",
    name: "courses",
    Icon: DashboardIcon,
  },
  {
    href: "/dash/chat",
    name: "Ask AI",
    Icon: DashboardIcon,
  },
  {
    href: "/dash/ai-evaluations",
    name: "AI Evaluations",
    Icon: ActivityIcon,
  },
  {
    href: "/dash/analytics",
    name: "Your progress",
    Icon: LineChartIcon,
  },
];
function Sidebar() {
  return (
    <div
      className={cn(
        "hidden fixed lg:static border-r bg-gray-100/40 lg:block dark:bg-gray-800/40"
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/dash">
            <Image
              src={"/images/favicon.ico"}
              width={30}
              height={30}
              alt="Cuber Education Logo"
            />
            <span className="">EduChain</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {paths.map((path) => {
              return <NavLink path={path} key={path.name} />;
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
