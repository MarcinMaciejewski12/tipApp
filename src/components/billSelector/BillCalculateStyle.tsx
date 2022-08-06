import styled from "styled-components";

export const CalculateContainer = styled.div`
    width: 50%;
    height: 100%;
`
export const SectionContainer = styled.div`
    padding: 10px;    

`
export const BillSection = styled.section`
    width: 100%;
    height: 100px;
    /* background: blue; */
    /* display: flex; */
    justify-content: space-between;
    align-items: center;


    & label {
        font-size:14px;
        letter-spacing: 2px;
        font-weight: 10;
        color: #575757;
    }

    & input {
        width: 350px;
        height: 35px;
        background: #e6e6e6;
        border: none;
        text-align: right;
        border-radius: 3px 3px 3px 3px;
    }
`

export const TipSelector = styled.section`
    /* background: blue; */
    width: 100%;
    height: 150px;
    color: white;

    & label {
        font-size:14px;
        letter-spacing: 2px;
        font-weight: 10;
        color: #575757;
        display: flex;
    }
    & div {
        width: 80px;
        height: 40px;
        font-size: 25px;
        background:  hsl(183, 100%, 23.52941176470588%);
        margin: 4px;
        display: flex;
        justify-content: space-around;
        float: left;
        font-weight: 800;
        border-radius: 5px 5px 5px 5px;
        cursor: pointer;
    }
    & input {
        width: 150px;
        margin-left: 12px;
        margin-top: 5px;
        height: 35px;
        background: #e6e6e6;
        border: none;
        text-align: right;
        border-radius: 3px 3px 3px 3px;
        border-color: hsl(183, 100%, 23.52941176470588%);
    }
`

export const NumberOfPeopleSection = styled.section`
    width: 100%;
    height: 50px;
    justify-content:center;
    align-items: center;

    & label {
        font-size:14px;
        letter-spacing: 2px;
        font-weight: 10;
        color: #575757;
    }
    & input {
        width: 350px;
        height: 35px;
        background: #e6e6e6;
        border: none;
        text-align: right;
        border-radius: 3px 3px 3px 3px;
    }
`

export const CalcButtonSection = styled.section`
    width: 100%;
    height: 6vh;
    margin-top: 7vh;
    display: flex;
    align-items: center;

    & button {
        border: none;
        width: 350px;
        height: 80%;
        background: hsl(183, 100%, 23.52941176470588%);
        color:#e6e6e6;
        font-size: 20px;
        border-radius: 5px 5px 5px 5px;
        cursor: pointer;
    }
`