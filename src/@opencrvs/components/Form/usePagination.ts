import { useState } from "react";

export const usePagination = (pages: number) => {
  const [page, setPage] = useState(0);

  const nextPage = page < pages - 1 ? () => setPage(page + 1) : undefined;
  const previousPage = page > 0 ? () => setPage(page - 1) : undefined;

  return {
    page,
    nextPage,
    previousPage,
  };
};
