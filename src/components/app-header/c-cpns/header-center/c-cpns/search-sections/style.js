import styled from "styled-components"

export const SectionsWrapper = styled.div`
    display: flex;
    border: 1px solid #eaeaea;
    border-radius: 50px;
    padding: 20px;

    .content {
        width: 250px;
        padding-left: 20px;
        .title {
            font-size: 16px;
            font-weight: 500;
            color: ${props => props.theme.text.secondaryColor};
        }
        .desc {
            color: #717171;
        }
    }
    .noFirst {
        border-left: 1px solid #eaeaea;
    }
`