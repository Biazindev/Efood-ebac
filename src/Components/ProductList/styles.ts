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
    margin-right: 0px;
    margin-bottom: 48px;
    background-color: ${cores.rosa};
    text-align: justify;
    &:nth-child(2n) {
        margin-right: 0; 
    }
    p{
        width: 100%;
        margin: 16px 0 8px 0;
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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
`

export const ModalContent = styled.div`
    width: 1024px;
    background-color: ${cores.rosa};
    padding: 32px;
    display: flex;
    gap: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    margin: 0 16px;
    position: relative;

    header {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-bottom: 16px;
        background-color: ${cores.rosa};

        > img {
         width: 16px;
         height: 16px;
         background-color: ${cores.rosa};
        }
    }
        p {
        width: 100%;
        height: 176px
        font-size: 14px;
        line-height: 22px;
        background-color: ${cores.rosa};
        color: ${cores.rosaClaro};
        }

    .image-container {
        width: 280px;
        height: 280px;
        display: block;
        
    > img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
`
export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const CloseButton = styled.img`
  cursor: pointer;
`
export const Descricao = styled.div` 
    display: block;
    background-color: ${cores.rosa};
    align-items: center;
    justify-content: center;

    .text {
        width: 218px;
        height: 24px;
        text-align: center;
        padding: 4px 7px;
        font-weight: bold; 
    }

    P {
    font-size: 18px;
    margin: 0px 0 16px 0px;
    }

    .titulo {
    font-size: 18px;
    font-weight: bold;
    }
`    
