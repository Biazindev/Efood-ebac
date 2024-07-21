import styled from "styled-components";
import { cores } from "../../styles";


export const Container = styled.div`
    width: 100%;
    height: 298px;
    background-color: #FFEBD9;
    padding: 40px;
    img {
        width: 125px;
        height:56px;
        margin: 0px auto;
        display: flex;
        background-color: #FFEBD9;
    }
        h4 {
            font-size: 10px;
            color: ${cores.rosa};
            width:  480px;
            height: 24px;
            text-align: center;
            margin: 0 auto;
            background-color: #FFEBD9;
        }
`
export const Icons = styled.div`
    margin: 0 auto;
    gap: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #FFEBD9;
    width: 88px;
    padding: 32px;

    img {
        width: 24px;
        height: 24px;
    }
`