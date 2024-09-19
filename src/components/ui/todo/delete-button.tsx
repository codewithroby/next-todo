"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import * as todos from "~/actions/todo-crud";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id, page }: { id: string; page: number }) => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  async function deleteTodo() {
    if (!isProcessing) {
      setIsProcessing(true);
      await todos.deleteTodo(id).then(() => {
        router.push(`/?page=${page}`);
      });
    }
  }

  return (
    <Button
      className="flex size-8 items-center justify-center p-0 text-white"
      onClick={deleteTodo}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <ImSpinner9 className="size-5 animate-spin" />
      ) : (
        <IoTrashOutline className="size-5" />
      )}
    </Button>
  );
};

export { DeleteButton };
