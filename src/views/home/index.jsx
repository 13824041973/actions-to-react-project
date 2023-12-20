import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";

const Home = memo(() => {
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo);
  const highScoreInfo = useSelector((state) => state.home.highScoreInfo);
  const discountInfo = useSelector((state) => state.home.discountInfo);
  const recommendInfo = useSelector((state) => state.home.recommendInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 $infodata={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 $infodata={recommendInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 $infodata={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 $infodata={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
