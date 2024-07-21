import { styled } from "styled-components"
import { cores } from "../../styles"
import { Link } from "react-router-dom"


export const ButtonContainer = styled.button`
    background-color: ${cores.rosaClaro};
    width: 304px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 4px;
    text-decoration: none;
    border: none;
    color: ${cores.rosa};
`

export const ButtonLink = styled(Link)`
    background-color: ${cores.rosa};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    text-decoration: none;
    border: none;
    color: ${cores.rosaClaro};
`