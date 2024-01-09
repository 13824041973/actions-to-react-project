import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionsWrapper } from "./style";

const SearchSections = memo((props) => {
  const { searchInfos } = props;
  return (
    <SectionsWrapper>
      {searchInfos.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && <div className="ltr"></div>}
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          </React.Fragment>
        );
      })}
    </SectionsWrapper>
  );
});

SearchSections.propTypes = {
  searchInfos: PropTypes.array,
};

export default SearchSections;
