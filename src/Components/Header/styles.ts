import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderLogo = styled.div`
    width: 100%;
    height: 384px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
`
export const BackgroundImage = styled.img`
    width: 100%;
    height: 384px;
    object-fit: cover;
    background-color: transparent;
`

export const Logo = styled.div`
    position: absolute;
    top: 33px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    img {
        width: 125px;
        height: 56px;
        margin-top: 40x;
    }
`

export const HeaderText = styled.p`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 539px;
    font-size: 36px;
    color: ${cores.rosa};
    text-align: center;
    font-weight: bold;
    background-color: transparent;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    margin-top: 40px;
`