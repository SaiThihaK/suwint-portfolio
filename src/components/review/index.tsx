import { Reviews } from "@/lib/constants";
import React from "react";
import Feedback from "./feedback";

type Props = {};

const Review = ({}: Props) => {
  return (
    <div className="my-16">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold">What others say about me</div>
        <div className="text-xl text-muted-foreground font-light">
          Let’s dive into my collegues feedbacks how I work well played in the
          design world.
        </div>
        <div className="flex w-full gap-8 overflow-x-auto p-4 no-scrollbar">
          {Reviews.map((review, index) => (
            <Feedback key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
