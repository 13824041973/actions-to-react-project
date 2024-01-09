import styled from "styled-components"

export const SectionsWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 32px;
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.08);

    .ltr {
        height: 32px;
        width: 1px;
        background-color: #ddd;
    }

    &:hover {
        .ltr {
            background-color: #fff;
        }
    }

    .content {
        width: 300px;
        padding: 14px 32px;
        cursor: pointer;
        border-radius: 1px solid transparent;
        border-radius: 32px;

        &:hover {
            background-color: #ebebeb;
        }

        .title {
            font-size: 16px;
            font-weight: 500;
            color: ${props => props.theme.text.secondaryColor};
        }

        .desc {
            color: #717171;
        }
    }
`