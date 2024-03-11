import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="my-16 flex  gap-6 w-full justify-between items-end">
      <aside className="flex flex-col gap-2 w-full  justify-center">
        <div className="text-2xl font-semibold">Hey, nice to meet you!</div>
        <div className="text-[128px] font-bold">I&apos;m Su</div>
        <div className="flex flex-col text-2xl">
          <div>
            <span
              className="font-semibold"
              style={{ textShadow: "0px 3px 30px rgba(179,26,164,1)" }}
            >
              UX/UI Designer
            </span>{" "}
            who loves to create useful,
          </div>
          <div>intuitive, and engaging products.</div>
        </div>
        <p className="leading-9 text-muted-foreground">
          As a design friendly maker and strategic thinker, I’d like to break
          down the complex problems presented to users into multiple solution
          sets. I love to work in detail-oriented cross-functional teams to
          create bolder online experiences and ship high-quality polished
          products.
        </p>
        <div className="gap-2 hover:gap-4 flex transition-all ease-in-out">
          <div className="bg-gradient-to-r font-semibold text-trasparent   from-[#E92677] text-transparent to-[#B31AA4] bg-clip-text">
            Get to know me
          </div>
          <ArrowRight color="#B31AA4" />
        </div>
      </aside>
      <aside className="flex w-full justify-end">
        <Image
          width={700}
          height={700}
          src={"/img/profile_img.png"}
          className="object-contain"
          alt="profile picture"
        />
      </aside>
    </div>
  );
};

export default Home;
