import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
