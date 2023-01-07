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
    /* & button {
        width: 80px;
        height: 40px;
        font-size: 25px;
        background:  hsl(183, 100%, 23.52941176470588%);
        color: white;
        margin: 4px;
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        justify-content: space-around;
        float: left;
        font-weight: 800;
        border: none;
        border-radius: 5px 5px 5px 5px;
        cursor: pointer;
    } */
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

// ACTIVE BUTTON STYLE

export const ActiveButton = styled.button`
    background-color: hsl(183, 100%, 23.52941176470588%);
`

export const DeactivatedButton  = styled.button`
     background-color:hsl(183.0612244897959, 98.00000000000001%, 19.607843137254903%);
`

export const DefaultStyleButton = styled.button`
background: none;
border: none;
width: 80px;
        height: 40px;
        font-size: 25px;
        background:  hsl(183, 100%, 23.52941176470588%);
        color: white;
        margin: 4px;
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        justify-content: space-around;
        float: left;
        font-weight: 800;
        border: none;
        border-radius: 5px 5px 5px 5px;
        cursor: pointer;
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