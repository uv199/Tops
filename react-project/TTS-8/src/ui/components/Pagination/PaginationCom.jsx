import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationCom({
  setPagination,
  page,
  limit,
  pageLimit,
}) {
  let [pageArr, setPageArr] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    if ([pageLimit - 2, pageLimit - 1, pageLimit].includes(page)) {
      let arr = [
        pageLimit - 4,
        pageLimit - 3,
        pageLimit - 2,
        pageLimit - 1,
        pageLimit,
      ];
      setPageArr(arr);
    } else if (page > 3) {
      let arr = [page - 2, page - 1, page, page + 1, page + 2];
      setPageArr(arr);
    }
  }, [page]);

  const setLast = () => {};

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink first />
        </PaginationItem>
        {pageArr?.map?.((e, i) => {
          return (
            <PaginationItem key={i}>
              <PaginationLink onClick={() => setPagination({ limit, page: e })}>
                {e}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => setPagination({ limit, page: pageLimit })}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
