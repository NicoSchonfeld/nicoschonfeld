"use client";

import Image from "next/image";
import banner2 from "../assets/banners/banner2.png";
import photoMe3 from "../assets/banners/photoMe3.png";
import { Button, Tooltip } from "@nextui-org/react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { AiOutlineCalendar } from "react-icons/ai";
import VerifiedIcon from "./VerifiedIcon";
import TwitterIcon from "./TwitterIcon";

const HeaderSection = () => {
  return (
    <>
      <div className="relative w-full h-auto">
        <Image src={banner2} alt="banner" width={1280} height={360} />
        <Image
          src={photoMe3}
          alt="banner"
          width={150}
          height={150}
          className="absolute -bottom-10 left-10 transition-all rounded-full outline outline-white dark:outline-black w-[100px] md:w-[150px] h-auto"
        />
      </div>
      <div className="w-full h-auto flex items-center justify-between px-10 pt-16 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-3">
            Nik0.jsx 🌵{" "}
            <Tooltip content="Verificado">
              <Button isIconOnly variant="light">
                <VerifiedIcon />
              </Button>
            </Tooltip>
          </h1>

          <h2 className="text-base text-gray-500">@NicoSchonfeld__</h2>
        </div>
        <Tooltip content="Mi nuevo Twitter">
          <Button
            as={"a"}
            href="https://twitter.com/NicoSchonfeld__"
            target="_blank"
            color="secondary"
            className="flex items-center "
            isIconOnly
          >
            <TwitterIcon />
          </Button>
        </Tooltip>
      </div>
      <div className="w-full h-auto px-10 py-3 space-y-3 text-sm md:text-base">
        <p>¡Developing the future!</p>
        <p>
          Software developer. Lover javascript. Content creator on tiktok. Ex
          designer.
        </p>
      </div>
      <div className="w-full h-auto px-10 flex items-center gap-3 text-sm md:text-base">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <LiaBirthdayCakeSolid className="text-base" /> 19 de Septiembre
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <AiOutlineCalendar className="text-base" /> Se registró en octubre de
          2021
        </p>
      </div>
    </>
  );
};

export default HeaderSection;
