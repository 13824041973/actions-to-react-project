import styled from "styled-components";

export const TabsWrapper = styled.div`
    display: flex;
    color: ${props => props.theme.isAlpha ? "#fff" : "#222"};

    .item {
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        margin-right: 20px;
    }

    .active {
        .text {
            color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.secondaryColor};
        }
        .bottom {
            margin-top: 8px;
            border: 1px solid ${props => props.theme.isAlpha ? "#fff" : "#333"};
        }
    }
`