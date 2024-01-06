import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  // 该内容区域宽度的中间值
  const [medianVal, setMedianVal] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const currentEle = contentRef.current;
    // 监听元素的变动，获取正确的宽度
    const observer = new ResizeObserver((entries) => {
      // 显示在屏幕上的宽度
      const clientWidth = entries[0].contentRect.width;
      setMedianVal(Number(clientWidth / 2));
    });
    if (currentEle) observer.observe(currentEle);

    return () => {
      if (currentEle) observer.unobserve(currentEle);
    };
  }, []);

  useEffect(() => {
    // 选中的元素
    const selectEleOffsetLeft =
      contentRef?.current?.children[selectIndex].offsetLeft;
    const selectEleWidth =
      contentRef?.current?.children[selectIndex].clientWidth;

    // 展示区域
    const clientWidth = contentRef.current.clientWidth;
    const scrollWidth = contentRef.current.scrollWidth;

    /**
     * 当选中的元素offsetLeft大于展示区域宽度的一半时，
     * 有两种情况：
     *  1.将选中的元素居中；
     *  2.选中的元素的后面的元素，不足以铺满整个展示区域时，要使内容铺满整个展示区域
     */
    if (selectEleOffsetLeft > medianVal) {
      if (selectEleOffsetLeft > scrollWidth - medianVal) {
        contentRef.current.style.transform = `translate(-${
          scrollWidth - clientWidth
        }px)`;
      } else {
        contentRef.current.style.transform = `translate(-${
          selectEleOffsetLeft - medianVal + selectEleWidth / 2
        }px)`;
      }
    } else contentRef.current.style.transform = `translate(0px)`;
  }, [selectIndex, medianVal]);

  return (
    <IndicatorWrapper>
      <div ref={contentRef} className="content">
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
