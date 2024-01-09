import { useScrollPosition } from "@/hooks";
import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  // 滚动一定距离，将搜索状态切换
  if (isSearch && Math.abs(scrollY - prevY.current) > 150) setIsSearch(false);

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={(e) => setIsSearch(true)}
          />
          <HeaderRight />
        </div>
        <SearchAreaWrapper $isSearch={isSearch} />
      </div>
      {isSearch && (
        <div className="cover" onClick={(e) => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;
