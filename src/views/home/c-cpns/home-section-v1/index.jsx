import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import { SectionV1Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { $infodata } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={$infodata.title} subtitle={$infodata.subtitle} />
      <SectionRooms roomList={$infodata.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  $infodata: PropTypes.object,
};

export default HomeSectionV1;
