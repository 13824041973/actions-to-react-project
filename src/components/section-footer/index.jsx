import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMsg = "显示全部";
  if (name) {
    showMsg = `显示更多${name}房源`;
  }

  const navigate = useNavigate();
  function moreClickHandler() {
    navigate("/entire");
  }

  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info" onClick={moreClickHandler}>
        <span className="text">{showMsg}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
