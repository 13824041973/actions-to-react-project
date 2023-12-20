import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo);
  const highScoreInfo = useSelector((state) => state.home.highScoreInfo);
  const discountInfo = useSelector((state) => state.home.discountInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <HomeSectionV2 $infodata={discountInfo} />
        <HomeSectionV1 $infodata={goodPriceInfo} />
        <HomeSectionV1 $infodata={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
