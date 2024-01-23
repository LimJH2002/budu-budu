"use client";
import {
  Bars3Icon,
  CalendarIcon,
  CameraIcon,
  GlobeAltIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-gray-500"
      >
        <a
          href="./story"
          className="flex items-center text-xl transition-colors"
        >
          <HeartIcon className="h-5 w-5 mr-2" /> {/* Icon added */}
          Our Story
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-gray-500"
      >
        <a
          href="./everyday"
          className="flex items-center text-xl transition-colors"
        >
          <CameraIcon className="h-5 w-5 mr-2" /> {/* Icon added */}
          Everyday Moments
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-gray-500"
      >
        <a href="#" className="flex items-center text-xl transition-colors ">
          <GlobeAltIcon className="h-5 w-5 mr-2" /> {/* Icon added */}
          Travel
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:text-gray-500"
      >
        <a
          href="./anniversaries"
          className="flex items-center text-xl transition-colors"
        >
          <CalendarIcon className="h-5 w-5 mr-2" /> {/* Icon added */}
          Anniversaries
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl px-10 py-8 absolute top-0 right-0 left-0 bg-transparent z-10">
      <div className="flex items-center justify-between text-gray-900">
        <a
          href="./"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-2xl font-semibold leading-relaxed tracking-normal text-inherit antialiased hover:text-gray-500 transition-colors"
        >
          Bubu & Dudu
        </a>
        <div className="hidden lg:block text-xl">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-10 w-10" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-10 w-10" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
