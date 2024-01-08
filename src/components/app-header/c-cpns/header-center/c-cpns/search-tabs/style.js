import styled from "styled-components";

export const TabsWrapper = styled.div`
    display: flex;

    .item {
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        margin-right: 20px;
        color: #717171;
    }

    .active {
        .text {
            color: ${props => props.theme.text.secondaryColor};
        }
        .bottom {
            margin-top: 8px;
            border: 1px solid ${props => props.theme.text.secondaryColor};
        }
    }
`