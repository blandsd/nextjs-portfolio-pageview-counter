import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Guides", href: "https://guides.offellnode.top" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        offellNode
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h1 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="https://offellnode.top"
            className="underline duration-500 hover:text-zinc-300"
          >
            offellnode.top
          </Link> Trustworthy and high performance validator - Stake 'n Chill Out! Cosmos.
        </h1>
        <h1 className="text-sm text-zinc-500 ">
          Mainnet Validator on Stratos{" "}
          <Link
            target="_blank"
            href="https://explorer.thestratos.org/stratos/validators/stvaloper1dhudufseadfzammedxndj49pdh9c23es4rnjau"
            className="underline duration-500 hover:text-zinc-300"
          >
            Explorer Stakes
          </Link> SGE Network{" "}
          <Link
            target="_blank"
            href="https://ping.pub/sge/staking/sgevaloper12d2s03lyhu4vunj2vj4ru8wz7gkt0cx4lh359x"
            className="underline duration-500 hover:text-zinc-300"
          >
            Explorer Stakes
          </Link>
        </h1>
      </div>
    </div>
  );

}
