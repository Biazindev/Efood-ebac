import { styled } from "styled-components"
import { cores } from "../../styles"
import { Props } from "."


export const TagContainer = styled.div<Props>`
    margin-left: 8px;
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    font-size: 12px;
    font-weight: bold;
    padding: ${props => props.size === 'big' ? '4px 6px' : '4px 6px'};
    display: inline;
    width: ${props => props.size === 'big' ? '121px' : '61px'};
    height: 26px;
    text-align: start;
    object-fix: cover;
`
