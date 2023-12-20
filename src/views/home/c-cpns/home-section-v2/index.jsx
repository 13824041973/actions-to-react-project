import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { $infodata } = props;

  const initialName = Object.keys($infodata.dest_list)[0]
  const [name, setName] = useState(initialName);
  const tabNames = $infodata?.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback((name) => {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={$infodata.title} subtitle={$infodata.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={$infodata.dest_list?.[name]} itemWidth="33%" />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  $infodata: PropTypes.object,
};

export default HomeSectionV2;
