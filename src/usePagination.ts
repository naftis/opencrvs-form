import { useState } from "react";

export const usePagination = (pages: number) => {
  const [page, setPage] = useState(0);

  const next = page < pages - 1 ? () => setPage(page + 1) : undefined;
  const previous = page > 0 ? () => setPage(page - 1) : undefined;

  return { page, next, previous };
};
