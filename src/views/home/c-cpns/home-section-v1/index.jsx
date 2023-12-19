import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import { SectionV1Wrapper } from "./style";

const HomeSectionV1 = memo((props) => {
  const { $infodata } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={$infodata.title} subtitle={$infodata.subtitle} />
      <SectionRooms roomList={$infodata.list} />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  $infodata: PropTypes.object,
};

export default HomeSectionV1;
