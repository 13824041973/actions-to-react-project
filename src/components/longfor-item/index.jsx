import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { infoData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img src={infoData.picture_url} className="cover" alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{infoData.city}</div>
            <div className="price">均价 {infoData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  infoData: PropTypes.object,
};

export default LongforItem;
