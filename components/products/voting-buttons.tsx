"use client";
import { ChevronDownIcon, ChevronUpIcon, Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  downVoteAction,
  voteProductAction,
} from "@/lib/products/product-action";
import { startTransition, useOptimistic, useTransition } from "react";
export default function VotingButtons({
  hasVoted,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted?: boolean;
  voteCount: number;
  productId: number;
}) {
  // to get rid of the ui update lag we can use the react hook optimistic which will update the ui immediately.

  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(0, currentCount + change)
  );

  // An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition
  // This is the error which we are getting to get rid ig this we need to use the other react hook called startTransition  :-

  const [isPending, setTransition] = useTransition();

  const handleUpvote = async () => {
    // wrapping the optimistic update inside the startTransition function.
    startTransition(async () => {
      setOptimisticVoteCount(1); // incrementing the vote count optimistically.
      await voteProductAction(productId);
    });

    // console.log("Vote result: ", result);
  };
  const handleDownVote = async () => {
    // wrapping the optimistic update inside the startTransition function.
    startTransition(async () => {
      setOptimisticVoteCount(-1); // decrementing the vote count optimistically.
      await downVoteAction(productId);
    });
    // console.log("Downvote result: ", result);
  };

  return (
    <div
      className="flex flex-col items-center gap-1"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
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
        {/* Now, we will show some UI until the transtion completes. */}
        {isPending ? (
          <span>
            <Loader2Icon className="size-4 animate-spin" />
          </span>
        ) : (
          optimisticVoteCount
        )}
      </span>

      <Button
        onClick={handleDownVote}
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
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
