import classNames from "classnames";
import React, { memo } from "react";
import { useState } from "react";
import { TabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index) {
    setCurrentIndex(index);
    if (tabClick) tabClick(index);
  }

  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            onClick={(e) => itemClickHandle(index)}
            className={classNames("item", { active: currentIndex === index })}
            key={item}
          >
            <div className="text">{item}</div>
            <div className="bottom"></div>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

export default SearchTabs;
