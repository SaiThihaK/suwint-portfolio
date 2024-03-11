import { ProjectType } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props) => {
  return (
    <div className="p-8 py-12 bg-black rounded-xl">
      <div className="w-1/2 flex flex-col gap-4">
        <Image
          src={project.agencyLogo}
          alt="agency logo"
          width={50}
          height={50}
        />
        <div className="flex gap-2 flex-wrap">
          {project.type.map((type, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-2"
              style={{
                border: `1px solid ${project.title.color}`,
                color: project.title.color,
              }}
            >
              {type}
            </Badge>
          ))}
        </div>
        <div
          className="font-semibold text-2xl"
          style={{ color: project.title.color }}
        >
          {project.title.text}
        </div>
        <div className="font-semibold text-2xl text-white">
          {project.subHeader}
        </div>
        <p className="leading-9 text-[#CCCCCC]">{project.description}</p>
        <div className="flex  cursor-pointer text-white font-semibold gap-2 items-center hover:gap-4 transition-all ease-in-out">
          Read Case Study
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Project;
