import PictureBrowser from "@/base-ui/picture-browser";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PicturesWrapper } from "./style";

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const [showBrowser, setShowBrowser] = useState(false);

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                onClick={(e) => setShowBrowser(true)}
                key={item}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div onClick={(e) => setShowBrowser(true)} className="show-btn">
        显示图片
      </div>

      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
