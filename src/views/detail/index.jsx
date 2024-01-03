import React, { memo } from "react";
import DetailInfo from "./c-cpns/detail-info";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
