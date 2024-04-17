import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ActivityIcon,
  BotIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
} from "@/components/icons";
import { BellIcon, HomeIcon } from "@radix-ui/react-icons";
import { SearchIcon } from "@/components/search-icon";

export default function ChatUi() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <h1>Ai Evaluations</h1>
      <p>This info would be retrived from the database</p>
    </main>
  );
}
