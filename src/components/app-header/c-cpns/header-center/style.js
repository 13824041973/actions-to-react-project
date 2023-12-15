import styled from "styled-components";

export const CenterWrapper = styled.div`
    .search-bar {
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
`