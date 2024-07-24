import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    brackground-color: ${cores.rosa};
}
`
export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    width: 472px;
`

export const Card = styled.div`
    position: relative;
    width: 472px;
    height: 398px;
    flex: 1 1 calc(50% - 40px);
    margin-right: 0px;
    margin-bottom: 48px;
    &:nth-child(2n) {
        margin-right: 0; 
    }
    p{
        margin: 16px 0 16px 0;
        font-size: 14px;
        color: ${cores.rosa};
        background-color: #FFFFFF;
    }
        > img {
        width: 472px;
        height: 217px;
        object-fit: cover; 
        }
`

export const Titulo = styled.h3`
    background-color: #FFFFFF;
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa};
    
`

export const Border = styled.div`
    background-color: #FFFFFF;
    margin-top: -6px;
    border: solid 1px ${cores.rosa};
    width: 472px;
    padding: 8px;
    display: block;
`

export const Assessments = styled.div`
    background-color: #FFFFFF;
    width: 452px;
    height: 21px;
    text-align: end;
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    img { 
    background-color: #FFFFFF;
    margin-left: 8px;
    object-fit: cover;
    }
    
    span {
        color: ${cores.rosa};
        font-size: 18px;
        font-weight: bold;
        background-color: #FFFFFF;
        margin-left: auto;
    }
`

export const Highlights = styled.div`
    background-color: transparent;
    width: 472px;
    position: absolute;
    top: 16px; 
    right: 10px;
    display: block;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
    margin-right: 16px;

    &.hide-highlight {
    display: none;
  }
`