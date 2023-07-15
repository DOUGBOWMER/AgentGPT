import clsx from "clsx";
import type { ReactNode } from "react";
import React from "react";
import { motion } from "framer-motion";
import GlowWrapper from "./GlowWrapper";

type HeroTimeBannerProps = {
  title: string;
  subtitle: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  onClick?: () => void;
};

const HeroTimeBanner: React.FC<HeroTimeBannerProps> = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  const rotationVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex content-start items-center">
      <div
        className={clsx(
          "relative z-10",
          "flex flex-row items-center justify-center gap-x-2",
          "overflow-hidden py-2 pl-3 pr-3",
          "rounded-[1000px] border-2 border-transparent shadow-md",
          "bg-black",
          "cursor-pointer"
        )}
      >
        <motion.div
          className="absolute -z-10 h-60 w-60 rounded-full"
          style={{ background: "conic-gradient(purple, transparent, transparent, purple)" }}
          variants={rotationVariants}
          initial="initial"
          animate="animate"
        />
        <div>{leftIcon}</div>
        <div className="flex flex-col bg-gradient-to-r from-white via-white to-black bg-clip-text font-inter leading-6 tracking-normal text-transparent">
          <h2 className="ml-2s text-[10px] font-semibold md:text-[12px]">{title}</h2>
          <p className="text-[8px] font-medium md:text-[10px]">{subtitle}</p>
        </div>
        <GlowWrapper>
          <div className="relative z-20 flex h-6 w-6 items-center justify-center rounded-[1000px] bg-white">
            {rightIcon}
          </div>
        </GlowWrapper>
      </div>
    </div>
  );
};

export default HeroTimeBanner;
