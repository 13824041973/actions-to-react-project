import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 是否展示右边按钮
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  // 当前的滚动定位到第几个tab
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;

    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;

    setShowLeft(newOffsetLeft > 0);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setPosIndex(newIndex);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          onClick={(e) => controlClickHandle(false)}
          className="control left"
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          onClick={(e) => controlClickHandle(true)}
          className="control right"
        >
          <IconArrowRight />
        </div>
      )}
      <div className="content">
        <div className="scroll" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
