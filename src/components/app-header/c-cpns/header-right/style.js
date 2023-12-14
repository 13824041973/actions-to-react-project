import styled from "styled-components"

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: ${props => props.theme.text.primaryColor};
    font-weight: 600;
    font-size: 14px;

    .btns {
        display: flex;
        align-items: center;

        .btn {
            line-height: 18px;
            height: 18px;
            padding: 12px 15px;
            border-radius: 22px;
            cursor: pointer;
            &:hover {
                background-color: #f5f5f5;
            }
        }
    }

    .profile {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 77px;
        height: 42px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        margin-right: 24px;
        cursor: pointer;
        color: ${props => props.theme.text.primaryColor};

        ${props => props.theme.mixin.boxShadow}
    }
`