
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DemoPage from "../radtable/page";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Get Integration Packages</HoveredLink>
            <HoveredLink href="/interface-design">Get Runtime Integration packages</HoveredLink>
            <HoveredLink href="/seo">Get Value Mapping </HoveredLink>
            <HoveredLink href="/branding">Get Message Mapping</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Team">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Shivam Tripathi"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Lead Developer "
            />
            <ProductItem
              title="Ankita"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Backend Developer "
            />
            <ProductItem
              title="Niranjan Yadav"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="team lead. Frontend enthusiast . expert in react js ."
            />

          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Logout</HoveredLink>
            <HoveredLink href="#">Settings</HoveredLink>
            <HoveredLink href="#">Profile</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-1" : "md:col-span-1"}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Total Runtime Artifacts",
    description: "Total number of runtime artifacts",
    header: <div className="flex items-center space-x-2 text-9xl">8</div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Integration Packages",
    description: "Total Number of integration Packages",
    header: <div className="flex items-center space-x-2 text-9xl">5</div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Deployed",
    description: "Total number of runtime artifacts deployed",
    header: <div className="flex items-center space-x-2 text-9xl">3</div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Errors",
    description:
      "Number of errors in the runtime artifacts",
    header: <div className="flex items-center space-x-2 text-9xl">1</div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Value Mapping",
    description: "Total Number of Value Mappings",
    header: <div className="flex items-center space-x-2 text-9xl">1</div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  }
];
export default function DashboardComponent() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // Get data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    
    if (!storedUsername || !storedToken) {
      // If no valid session, redirect to login
      router.push('/login');
      return;
    }
    
    setUsername(storedUsername);

    setToken(storedToken);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Navbar className="top-2" />
      
      {/* Main content container with top padding for navbar */}
      <div className="pt-20 px-4 mt-11">
        {/* Flex row container */}
        <div className="flex flex-row gap-8  max-w-5xl mx-auto items-center ">
          <BentoGridDemo />
          {/* First div - flex column */}
          <div className="flex flex-col flex-1 space-y-4">
            {/* Content for first column goes here */}

          </div>
          
          {/* Second div - for your content */}
          <div className="flex-1">
            {/* You can add your content here */}

          </div>
          
        </div>
      </div>
    </div>
  );
}
