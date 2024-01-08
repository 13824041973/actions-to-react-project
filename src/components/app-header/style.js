import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
    position: ${props => props.$headerConfig.isFixed ? 'fixed' : 'initial'};
    z-index: 2;
    background-color: #fff;
`