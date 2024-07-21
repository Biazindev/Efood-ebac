import styled from "styled-components";
import { cores } from "../../styles";


export const Container = styled.div`
    position: relative; /* Adicionamos position: relative para ser a referência dos elementos filhos com position: absolute */
    display: block;
    margin-top: -23px;
    background-color: transparent;
    aling-items: center;

    img {
        width: 100%;
        margin-top: -4px;
    }
`
export const BackgroundImg = styled.img`
        height: 186px;
        margin-top: -4px;
        width: 100%;
`

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
`