import React, { memo } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
import { useState } from "react";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const itemIndex = newItems.indexOf(item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }

    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              onClick={(e) => itemClickHandle(item)}
              key={item}
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
