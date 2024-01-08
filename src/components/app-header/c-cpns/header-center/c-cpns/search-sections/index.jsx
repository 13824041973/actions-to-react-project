import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionsWrapper } from "./style";

const SearchSections = memo((props) => {
  const { searchInfos } = props;
  console.log(searchInfos);
  return (
    <SectionsWrapper>
      {searchInfos.map((item, index) => {
        return (
          <div
            className={classNames("content", { noFirst: index !== 0 })}
            key={index}
          >
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
        );
      })}
    </SectionsWrapper>
  );
});

SearchSections.propTypes = {
  searchInfos: PropTypes.array,
};

export default SearchSections;
