import PercentSelector from "./PercentSelector";
import { CalculateContainer, BillSection, SectionContainer, NumberOfPeopleSection } from './BillCalculateStyle';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import TipValue from "../tipValue/TipValue";



const BillCalculate = () => {
    const [billValue, setBillValue] = useState<number>(0);
    const [howManyPeople, setHowManyPeople] = useState<number>(0);
    const [billCalculate, setBillCalculate] = useState(0);

    useEffect(() => {
    },[billValue, howManyPeople]);

    const bill  = () => {
        setBillCalculate(billValue / howManyPeople);
    }

    return (
    <>
    <CalculateContainer>
        <SectionContainer>
        <BillSection>
            <div>
            <label>Bill</label>
            </div>
        <input type='number' placeholder='$' value={billValue} onChange={(e)=> setBillValue(parseInt(e.target.value))}  />
        </BillSection>
        <PercentSelector />
        <NumberOfPeopleSection>
            <div>
            <label>Number of People</label>
            </div>
        <input type='number' placeholder='people' value={howManyPeople} onChange={(e)=> setHowManyPeople(parseInt(e.target.value))} />
        </NumberOfPeopleSection>
        <button type="submit" onClick={bill} >Calck!</button>
        </SectionContainer>
        </CalculateContainer>
        <TipValue calculateBill={billCalculate}/>
        </>
    )
}

export default BillCalculate;