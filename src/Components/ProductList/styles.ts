import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 56px;
    justify-content: space-between;
    flex-wrap: wrap;
}
`
export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    width: 320px;
`
export const Card = styled.div`
    position: relative;
    width: 320px;
    height: 338px;
    padding: 8px;
    flex: 1 1 calc(50% - 40px);
    margin-right: 0px;
    margin-bottom: 48px;
    background-color: ${cores.rosa};
    text-align: justify;
    &:nth-child(2n) {
        margin-right: 0; 
    }
    p{
        width: 100%;
        margin: 16px 0 16px 0;
        font-size: 14px;
        color: ${cores.rosaClaro};
        background-color: transparent;
    }

    h3 {
        background-color: transparent;
        margin-top: 8px;
        font-size: 18px;
        font-weight: bold;
        color: ${cores.rosaClaro};
    }

    > img{
        width: 304px;
        height: 167px;
        object-fit: cover;
    }
`