import { Projects } from "@/lib/constants";
import React from "react";
import Project from "./project";

type Props = {};

const Experiments = (props: Props) => {
  return (
    <div className="my-16">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold">Showcase Highlight</div>
        <p className="text-muted-foreground">
          Let’s dive into the design world how I brought value to the project.{" "}
        </p>
      </div>
      <div className="w-full my-3 flex flex-col gap-4">
        {Projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experiments;
