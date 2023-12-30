import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationCom({
  setPagination,
  page,
  limit,
  pageLimit,
}) {
  let [pageArr, setPageArr] = useState([1, 2, 3, 4, 5]);

  const generatePageArr = () => {
    let arr = [];
    for (
      let i = Math.max(1, page - 2);
      i <= Math.min(pageLimit, page + 2);
      i++
    ) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    setPageArr(generatePageArr());
  }, [page, pageLimit]);

  const handlePageClick = (pageNumber) => {
    setPagination({ limit, page: pageNumber });
  };

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink first />
        </PaginationItem>
        {pageArr.map((pageNumber, index) => (
          <PaginationItem key={index}>
            <PaginationLink onClick={() => handlePageClick(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink last onClick={() => handlePageClick(pageLimit)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
