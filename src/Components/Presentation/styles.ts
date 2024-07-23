import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
    position: relative;
    display: block;
    margin-top: -23px;
    background-color: transparent;
    align-items: center;

    img {
        width: 100%;
        margin-top: -4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .img-edit {
        filter: brightness(50%);
        display: block;
        width: 100%;
        display: block;
    }
`;

export const BackgroundImg = styled.img`
    height: 186px;
    margin-top: -4px;
    width: 100%;
`;

export const LinkCart = styled.div`
    position: absolute;
    top: 70px; 
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 1024px;
    background-color: transparent;
    text-align: center;
    z-index: 1;

    h3 {
        background-color: transparent;
        font-size: 18px;
        font-weight: bold;
        color: ${cores.rosa};
    }

    span {
        background-color: transparent;
        font-size: 18px;
        font-weight: bold;
        color: ${cores.rosa};
    }
`;

export const ImageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    position: relative;
    width: 100%;
    background: transparent !important;
`;

export const OverlayText = styled.div`
    background: transparent !important;
    position: absolute;
    display: grid;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 70%;
    top: 50%;
    justify-content: start;
    flex-direction: column;

    p { 
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 100;
        display: grid;
        margin: 0;
        background: transparent !important;
        margin-bottom: 10px;
        text-align: start;
        justify-content: start;
        flex-direction: column;

        span {
        background: transparent;
        font-size: 32px;
        font-weight: bold;
        }
    }
`