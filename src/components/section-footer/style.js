import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    margin-top: 10px;

    .info {
        display: flex;
        align-items: center;

        color: ${props => props.color};
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        .text {
            margin-right: 6px;
        }
    }
`