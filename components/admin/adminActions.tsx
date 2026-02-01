"use client";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  approveProductAction,
  rejectProductAction,
} from "@/lib/admin/adminAction";
import { ProductType } from "@/types";

export default function AdminActions({
  status,
  productId,
}: {
  status: string;
  productId: ProductType["id"];
}) {
  const handleApprove = async () => {
    console.log("Approve");
    await approveProductAction(productId);
  };
  const handleReject = async () => {
    console.log("Reject");
    await rejectProductAction(productId);
  };
  return (
    <div className="space-y-2">
      {status === "pending" && (
        <div className="flex gap-2">
          <Button
            className="bg-green-600 text-white hover:bg-green-600 hover:cursor-pointer border border-slate-400"
            onClick={(handleApprove)}
          >
            <CheckCircleIcon className="size-3" />
            Approve
          </Button>

          <Button
            variant={"destructive"}
            className="text-white hover:cursor-pointer border border-slate-400"
            onClick={(handleReject)}
          >
            <XCircleIcon className="size-3 " />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
