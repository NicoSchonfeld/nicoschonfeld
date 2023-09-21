import React from "react";

import photoMe3 from "../assets/banners/photoMe3.png";
import Image from "next/image";

const UserComponent = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src={photoMe3}
          alt="banner"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">Nik0.jsx 🌵</p>
          <p className="text-sm text-gray-500">@NicoSchonfeld__</p>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
