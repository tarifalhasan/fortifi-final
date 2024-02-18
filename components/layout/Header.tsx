"use client";
import { logo } from "@/assets/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const routes: any = {
  "/page1": "/page3",
  "/page4": "/page3",
  "/page5": "/page3",
  "/page6": "/page3",
};

const Header = () => {
  const [currentRoute, setRoute] = useState("/");

  const router = useRouter();

  const location: string = usePathname();

  useEffect(() => {
    if (routes[location]) {
      setRoute(routes[location]);
    } else {
      setRoute("/");
    }
  }, [location]);

  return (
    <header className=" py-6 container  flex items-center justify-between flex-wrap">
      <Link
        href={currentRoute}
        style={{ marginBottom: "10px", maxWidth: "195px" }}
      >
        <Image className="" alt="logo" src={logo} />
      </Link>

      <div className="grid grid-cols-3 gap-3 w-auto md:w-[calc(230px*2)]">
        <Link href={"/page3"}>
          <Button className="flex h-[50px] w-full items-center font-comforta  justify-center font-bold rounded-full border border-[#F2EFD1] bg-[#101C2D] px-3 py-2 text-sm  placeholder:text-white text-white focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50">
            Vaults
          </Button>
        </Link>
        <Link href={"/connect"}>
          <Button className="flex h-[50px] w-full items-center font-comforta  justify-center font-bold rounded-full border border-[#F2EFD1] bg-[#101C2D] px-3 py-2 text-sm  placeholder:text-white text-white focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50">
            Connect
          </Button>
        </Link>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="/">AVAX</SelectItem>
            <SelectItem value="/1">Arbitrum</SelectItem>
            {/* <SelectItem value="/2">Coming soon</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;