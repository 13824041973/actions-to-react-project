import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon_close";
import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { BrowserWrapper } from "./style";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }

  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left">
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right">
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
      </div>
      <div className="preview"></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
