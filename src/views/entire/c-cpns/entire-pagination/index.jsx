import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";

import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo(() => {
  const { currentPage, roomList, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  function pageChangeHandle(event, curPage) {
    window.scrollTo(0, 0);
    dispatch(fetchRoomListAction(curPage));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount}-{endCount} 个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
