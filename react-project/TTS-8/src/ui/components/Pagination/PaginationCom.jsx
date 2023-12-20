import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationCom() {
  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
