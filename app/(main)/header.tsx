"use client";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarItem {
  title: string;
  href: string;
  active: boolean;
}

interface SocialMediaItem {
  title: string;
  iconPath: string;
  href: string;
}

interface Props {
  navbarData: NavbarItem[];
  socialMediaData: SocialMediaItem[];
}

export const Header: React.FC<Props> = ({ navbarData, socialMediaData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "transparent",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to toggle overflow on body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollY > 200) {
      setHeaderStyle({ backgroundColor: "#000" });
    } else {
      setHeaderStyle({ backgroundColor: "transparent" });
    }
  }, [scrollY]);

  return (
    <header
      className="animate fixed top-0 left-0 h-[78px] lg:h-[104px] w-full px-[15px] lg:px-[50px] py-5 lg:py-[30px] flex items-center justify-between z-10"
      style={{ ...headerStyle }}
    >
      <div
        className={cn(
          "bg-[#0D131C]/70 w-full h-full backdrop-blur fixed top-0 left-0 animate lg:hidden",
          isOpen ? "opacity-1 visible" : "opacity-0 invisible"
        )}
      />
      <Link href="/" title="Creon" aria-label="Creon" className="z-10">
        <Image
          src="/images/creon-logo.svg"
          alt="Creon logo"
          height={33}
          width={120}
        />
      </Link>
      <Button
        variant="transparent"
        onClick={() => setIsOpen(true)}
        className="z-10 lg:hidden"
        title="Open navbar"
      >
        <Image
          src="/images/open.svg"
          alt="Open navbar"
          height={24}
          width={24}
        />
      </Button>
      <nav
        className={cn(
          "max-lg:fixed max-lg:top-0 max-lg:w-[208px] max-lg:h-dvh max-lg:bg-black max-lg:animate max-lg:flex-col max-lg:pl-[30px] max-lg:pb-[30px] z-20",
          "flex lg:flex-row-reverse lg:gap-[58px] lg:items-center",
          isOpen ? "right-0" : "-right-full"
        )}
      >
        <div className="max-lg:pt-5 max-lg:pr-[15px] max-lg:pb-[30px] flex items-center justify-between">
          <Button variant="outline" asChild data-content="Connect">
            <Link
              href="#"
              title="connect"
              aria-label="connect"
              onClick={() => setIsOpen(false)}
            >
              Connect
            </Link>
          </Button>
          <Button
            variant="blue"
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
            title="CLose navbar"
          >
            <Image
              src="/images/close.svg"
              alt="CLose navbar"
              height={12}
              width={12}
            />
          </Button>
        </div>
        <ul className="max-lg:border-t max-lg:border-grey-line lg:flex lg:gap-10">
          {navbarData.map((item, i) => {
            return (
              <li
                className="max-lg:pt-[15px] max-lg:pb-[18px] max-lg:border-b max-lg:border-grey-line font-satoshi-bold"
                key={i}
              >
                {item.active ? (
                  <Link
                    href={item.href}
                    title={item.title}
                    aria-label={item.title}
                    className="animate hover:text-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="w-fit relative flex">
                    {item.title}
                    <span className="text-purple uppercase text-[10px] px-1 py-[2px] bg-black rounded-full block mb-1 lg:mb-[6px] ml-1">
                      Soon
                    </span>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-[10px] mt-auto lg:hidden">
          {socialMediaData.map((item, i) => {
            return (
              <Link
                href={item.href}
                title={`Follow us on ${item.title}`}
                aria-label={`Follow us on ${item.title}`}
                key={i}
                target="_blank"
                className="border-[2px] border-white rounded-full flex items-center justify-center p-[9px] animate hover:border-blue hover:bg-blue"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={`/images/${item.iconPath}`}
                  alt={item.title}
                  width={16}
                  height={16}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};