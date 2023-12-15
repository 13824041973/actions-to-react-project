import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <div className="section">
          <div className="title"></div>
          <div className="content"></div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
