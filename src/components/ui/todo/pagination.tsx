"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Button } from "~/components/ui/button";

const TodoPagination = ({ page, total }: { page: number; total: number }) => {
  const totalPages = Math.ceil(total / 3);
  const router = useRouter();

  const handlePreviousPage = () => {
    if (page > 0) {
      router.replace(`/?page=${page - 1}`);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      router.replace(`/?page=${page + 1}`);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button className="size-6 rounded-full p-0" onClick={handlePreviousPage}>
        <IoArrowBack className="size-4" />
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button className="size-6 rounded-full p-0" onClick={handleNextPage}>
        <IoArrowForward />
      </Button>
    </div>
  );
};

export { TodoPagination };
