import styled from "styled-components";

export const BrowserWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #333;
    z-index: 999;

    display: flex;
    flex-direction: column;

    .top {
        position: relative;
        height: 86px;

        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
            z-index: 2;
        }
    }

    .slider {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1;

        .control {
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            color: #fff;

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                cursor: pointer;
            }
        }

        .picture {
            position: relative;
            overflow: hidden;
            height: 100%;
            width: 100%;
            max-width: 105vh;

            img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                height: 100%;
                user-select: none;
            }

            .pic-enter {
                transform: translateX(${props => props.$isnext ? '100%' : '-100%'});
                opacity: 0;
            }
            .pic-enter-active {
                transform: translate(0);
                opacity: 1;
                transition: all 200ms ease;
            }

            .pic-exit {
                opacity: 1;
            }
            .pic-exit-active {
                opacity: 0;
                transition: all 200ms ease;
            }
        }
    }

    .preview {
        display: flex;
        justify-content: center;
        height: 100px;
        margin-top: 10px;

        .info {
            position: absolute;
            bottom: 10px;
            max-width: 105vh;
            color: #fff;

            .desc {
                display: flex;
                justify-content: space-between;

                .toggle {
                    cursor: pointer;
                }
            }
            
            .list {
                margin-top: 3px;
                overflow: hidden;
                transition: height 300ms ease;

                .item {
                    margin-right: 15px;
                    cursor: pointer;

                    .bottomPic {
                        height: 67px;
                        opacity: 0.5;
                    }

                    .active {
                        opacity: 1 !important;
                    }
                }
            }
        }
    }
`