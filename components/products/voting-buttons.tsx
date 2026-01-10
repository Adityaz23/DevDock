"use client";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  downVoteAction,
  voteProductAction,
} from "@/lib/products/product-action";
export default function VotingButtons({
  hasVoted,
  voteCount,
  productId,
}: {
  hasVoted: boolean;
  voteCount: number;
  productId: number;
}) {
  const handleUpvote = async () => {
    const result = await voteProductAction(productId);
    console.log("Vote result: ", result);
  };
  const handleDownVote = async () => {
    const result = await downVoteAction(productId);
    console.log("Downvote result: ", result);
  };
  return (
    <div
      className="absolute right-4 top-1/4 -translate-y-0.5 flex flex-col items-center gap-1"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "hover:text-green-500 hover:bg-linear-to-r from-green-100 to-teal-100"
            : "opacity-50 hover:cursor"
        )}
      >
        <ChevronUpIcon className="size-4" />
      </Button>
      <span className="text-xs font-semibold transition-colors text-foreground">
        {voteCount}
      </span>

      <Button
        onClick={handleDownVote}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "hover:text-red-500 hover:bg-linear-to-r from-pink-100 to-red-100"
            : "opacity-50 hover:cursor"
        )}
      >
        <ChevronDownIcon className="size-4" />
      </Button>
    </div>
  );
}
