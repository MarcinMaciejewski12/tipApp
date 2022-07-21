import styled from 'styled-components';

export const BillValueContainer = styled.div`
    background: hsl(183, 100%, 15%);
    width: 50%;
    border-radius: 10px 10px 10px 10px;
`

export const TipAmount = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:hsl(183, 100%, 23.52941176470588%);

    & div {
        display: block;
        height: 70px;
        margin-left: 40px;
        color: #e6e6e6;
    }
    & h1 {
        margin-bottom: 0px;
        font-weight: 5;
    }
    & p {
        margin-top: -5px;
        font-size: 12px;
    }
    & h2 {
        margin-right: 40px;
        font-size: 50px;
    }
`
export const TotalPrice = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:hsl(183, 100%, 23.52941176470588%);

    & div {
        display: block;
        height: 70px;
        margin-left: 40px;
        color:#e6e6e6;
    }
    & h1 {
        margin-bottom: 0px;
        font-weight: 5;
    }
    & p {
        margin-top: -5px;
        font-size: 12px;
    }
    & h2 {
        margin-right: 40px;
        font-size: 50px;
    }
`

export const ResetButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

     & h1 {
        font-size: 20px;
        background: hsl(183, 100%, 23.52941176470588%);
        width: 80%;
        display: flex;
        justify-content:center;
        border-radius: 5px 5px 5px 5px;
        color:#e6e6e6;
        cursor: pointer;
     }
`