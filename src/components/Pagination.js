import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Row, Col } from "antd";
import { LIMIT } from "constant";

const PaginationCustom = ({ total, currentPage = 1, handleGetCurrentPage }) => {
  const [arrayCountPage, setArrayCountPage] = useState([]);
  const page = Math.ceil(total / LIMIT);

  useEffect(() => {
    const tempCountPage = [];
    for (let i = 1; i <= page; i++) {
      tempCountPage.push(i);
    }
    setArrayCountPage(tempCountPage);
  }, [page]);

  return (
    <WrapperPagination>
      <div className="w-100">
        <Row align="middle" justify="center">
          {arrayCountPage.map((page) => {
            let flag = Number(page) === currentPage;
            return (
              <Col className="mx-2" key={page}>
                <div
                  onClick={() => handleGetCurrentPage(Number(page))}
                  style={{
                    background: `${flag ? "#6C5DD3" : "#fff"}`,
                    borderRadius: "8px",
                    width: "29px",
                    height: "29px",
                    lineHeight: "29px",
                    textAlign: "center",
                    cursor: "pointer",
                    color: `${flag ? "#fff" : "#000"}`,
                  }}
                >
                  {page}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </WrapperPagination>
  );
};

const WrapperPagination = styled.div``;

export default PaginationCustom;
