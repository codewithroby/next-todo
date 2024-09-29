"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Button } from "~/components/ui/button";

const TodoPagination = async ({
  gg,
  page = 1,
  totalPages,
}: {
  gg: number;
  page: number;
  totalPages: number;
}) => {
  const router = useRouter();

  const handlePreviousPage = () => {
    router.replace(`/?page=${page - 1}`);
  };

  const handleNextPage = () => {
    router.replace(`/?page=${page + 1}`);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        className="size-6 rounded-full p-0"
        onClick={handlePreviousPage}
        disabled={page <= 1}
      >
        <IoArrowBack className="size-4" />
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button
        className="size-6 rounded-full p-0"
        onClick={handleNextPage}
        disabled={page >= totalPages}
      >
        <IoArrowForward />
      </Button>
    </div>
  );
};

export { TodoPagination };
