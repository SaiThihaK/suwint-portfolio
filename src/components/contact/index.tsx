import { Instagram, InstagramIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="my-16 flex flex-col justify-center items-center gap-4">
      <div className="2xl font-semibold">Let’s Connect 🚀</div>
      <div className="font-light">
        Feel free to reach out for collaborations or just a friendly hello  😊
      </div>
      <div className="bg-gradient-to-r font-semibold from-[#E92677] text-transparent to-[#B31AA4] bg-clip-text">
        suwintthida3@gmail.com
      </div>
      <div className="flex gap-8">
        <Image
          src={"/img/linkedin.png"}
          width={30}
          height={30}
          alt="linkedin"
        />
        <Image
          src={"/img/instagram.png"}
          width={30}
          height={30}
          alt="instagram"
        />
      </div>
    </div>
  );
};

export default Contact;
