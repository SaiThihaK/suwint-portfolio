import { partnerImgs } from "@/lib/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const Partner = (props: Props) => {
  return (
    <div className="my-16 flex flex-col justify-center items-center">
      <div className="text-muted-foreground font-semibold">
        Some Companies I’ve worked with
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap p-16">
        {partnerImgs.map((part) => (
          <div key={part} className="w-1/5">
            <Image
              src={part}
              alt="Partner Image"
              className="object-contain"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
