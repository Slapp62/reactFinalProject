
"use client";

import { Pagination } from "flowbite-react";
import { TPaginationProps } from "../data/Types";

export function PageComp({ currentPage, totalPages,onPageChange  } : TPaginationProps) {

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      />
    </div>
  );
}
