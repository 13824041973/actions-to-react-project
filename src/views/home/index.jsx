import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const Home = memo(() => {
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo);
  const highScoreInfo = useSelector((state) => state.home.highScoreInfo);
  const discountInfo = useSelector((state) => state.home.discountInfo);

  const tabNames = discountInfo?.dest_address?.map((item) => item.name);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <div style={{ marginTop: "30px" }}>
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />

          <SectionTabs tabNames={tabNames} />

          <SectionRooms
            roomList={discountInfo.dest_list?.["佛山"]}
            itemWidth="33%"
          />
        </div>

        <HomeSectionV1 $infodata={goodPriceInfo} />
        <HomeSectionV1 $infodata={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
