import { ReviewType } from "@/lib/constants";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  review: ReviewType;
};

const Feedback = ({ review }: Props) => {
  return (
    <div className="w-1/2 rounded-md min-w-[400px] shadow-md h-fit p-4 flex flex-col justify-start">
      <div className="leading-9 text-muted-foreground">{review.review}</div>
      <div className="mt-4 flex gap-4 items-center">
        <Avatar>
          <AvatarImage src={review.user.picture} alt={review.user.name} />
          <AvatarFallback>{review.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm">{review.user.name}</span>
          <div className="text-sm text-muted-foreground">
            {review.user.position} @ {review.user.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
