import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;
    
    &.is-open {
        display: flex;
    }
`

export const SideBar = styled.aside`
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 16px 0 16px;
    max-width: 360px;
    width: 100%;
    ul {
        background-color: ${cores.rosa};
    }

    ${ButtonContainer} {
        background-color: ${cores.rosaClaro};
        max-width: 100%;
        width: 100%;
        border: none;
        padding: 0;
    }

    &.is-open {
        display: block;
    }

    &.is-close {
        display: none;
    }
`

export const Prices = styled.p`
    background-color: ${cores.rosa};
    font-weight: bold;
    font-size: 14px;
    color: ${cores.rosaClaro};
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    span {
        align-items: center;
        background-color: ${cores.rosa};
        font-size: 12px;
        color: ${cores.rosaClaro};
    }
`

export const Quantity = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: ${cores.rosa};
    margin-top: 32px;
    margin-bottom: 16px;
    background-color: ${cores.rosa};
`

export const CartItem = styled.li`
    background-color: ${cores.rosaClaro};
    display: flex;
    padding: 8px 8px 12px;
    position: relative;
    margin-top: 8px;

    div {
        background-color: ${cores.rosaClaro};
    }

    img {
        height: 80px;
        max-width: 80px;
        width: 100%;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 { 
        color: ${cores.rosa};
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 16px;
        background-color: ${cores.rosaClaro};
    }

    span {
        display: block;
        color: ${cores.rosa};
        font-size: 14px;
        background-color: ${cores.rosaClaro};
    }

    button {
        background-image: url(${fechar});
        height: 16px;
        width: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 72px;
        right: 8px;
    }
`

export const Delivery = styled.form`
    display: grid;
    background-color: ${cores.rosa};
    max-height: 435px;
    height: 100%;
    max-width: 360px;
    width: 100%;
    
    > div {
        background-color: ${cores.rosa};
        display: grid;
        max-width: 344px;
        width: 100%;

        ${ButtonContainer} {
            position: relative;
            top: 24px;
            margin-top: 8px;
            line-height: 24px;
        }

        p,
        label,
        span {
            margin: 8px 0 8px;
            background-color: ${cores.rosa};
            color: ${cores.rosaClaro};
        }

        input {
            background-color: ${cores.rosaClaro};
            border: none;
            line-height: 32px;
        }
    }

    .edit {
    gap: 30px;
}
`

export const LabelItem = styled.div`
    background-color: ${cores.rosa};
    display: flex;
    justify-content: space-between;
`

export const InputItem = styled.div`
    display: flex;
    background-color: ${cores.rosa};

    .space {
        margin-left: 32px; 
    }

    label {
        max-width: 155px;
        width: 100%;
    }

    .spaceCard {
        width: 228px;
    }
    .spaceCode {
        width: 88px;
        }
`

export const SideBarAdress = styled.aside`
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px;
    max-width: 360px;
    width: 100%;
    display: none;

    ${ButtonContainer} {
        background-color: ${cores.rosaClaro};
        max-width: 100%;
        width: 100%;
        border: none;
        padding: 0;
    }

    &.is-open {
        display: flex;
    }

    .is-close {
    display: none;
}
`

export const SideBarInfo = styled.aside`
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px;
    max-width: 360px;
    width: 100%;
    display: none;

    ${Delivery} {
        height: 256px;
    }
    input {
        height: 32px;
    } 


    ${ButtonContainer} {
        background-color: ${cores.rosaClaro};
        max-width: 100%;
        width: 100%;
        border: none;
        padding: 0;
    }

    &.is-open {
        display: flex;
    }

    .is-close {
    display: none;
}
`
export const InputItemVencimento = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SideBarFinish = styled.aside`
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px;
    max-width: 360px;
    width: 100%;
    display: none;

    ${ButtonContainer} {
        background-color: ${cores.rosaClaro};
        max-width: 100%;
        width: 100%;
        border: none;
        padding: 0;
    }

    &.is-open {
        display: flex;
    }

    .is-close {
    display: none;
`

export const Style = styled.p`
    font-size: 14px;
    font-weight: 400;
`

export const SideBarPayment = styled.aside`
    background-color: ${cores.rosa};
    z-index: 1;
    padding: 32px 8px;
    max-width: 360px;
    width: 100%;
    display: none;

    ${ButtonContainer} {
        background-color: ${cores.rosaClaro};
        max-width: 100%;
        width: 100%;
        border: none;
        padding: 0;
    }

    &.is-open {
        display: flex;
    }

    .is-close {
    display: none;
`
