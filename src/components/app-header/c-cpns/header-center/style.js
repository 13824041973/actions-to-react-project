import styled from "styled-components";

export const CenterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .search-bar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 300px;
        height: 48px;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 24px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}

        .text {
            padding: 0 16px;
            color: #222;
            font-weight: 600;
        }
        
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            background-color: ${props => props.theme.color.primaryColor};
        }
    }

    .search-detail {
        position: relative;
        transform-origin: 50% 0;
        will-change: transform, opacity;

        .infos {
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .bar-enter {
        transform: scale(2.85,1.375) translateY(58px);
        opacity: 0;
    }
    .bar-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }
    .bar-exit {
        opacity: 0;
    }

    .detail-enter {
        transform: scale(0.35,0.72) translateY(-58px);
        opacity: 0;
    }
    .detail-enter-active {
        transform: scale(1.0) translateY(0);
        opacity: 1;
        transition: all 250ms ease;
    }
    .detail-exit {
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }
    .detail-exit-active {
        transition: all 250ms ease;
        transform: scale(0.35, 0.72) translateY(-58px);
        opacity: 0;
    }
`