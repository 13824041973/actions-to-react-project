import styled from "styled-components"

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: ${props => props.theme.text.primaryColor};
    font-weight: 600;

    .btns {
        display: flex;
        align-items: center;
        color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor};

        .btn {
            line-height: 18px;
            /* height: 18px; */
            padding: 12px 15px;
            border-radius: 22px;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : '#f5f5f5'};
            }
        }
    }

    .profile {
        position: relative;
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

        .panel {
            position: absolute;
            width: 240px;
            top: 54px;
            right: 0;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0,0,0,.2);

            .top, .bottom {
                padding: 10px 0;

                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;

                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }

            .top {
                border-bottom: 1px solid #ddd;
            }
        }
    }
`