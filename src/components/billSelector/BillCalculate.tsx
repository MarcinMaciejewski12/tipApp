import { CalculateContainer, BillSection, SectionContainer, TipSelector, NumberOfPeopleSection } from './BillCalculateStyle';
import React, { useEffect, useState } from 'react';

const BillCalculate = () => {
    const [billValue, setBillValue] = useState(0);
    const [howManyPeople, setHowManyPeople] = useState(0);
    const [billCalculate, setBillCalculate] = useState(0);
    // const billHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setBillValue(parseInt(event.target.value));
    //     console.log(billValue);
    // }

    // const peopleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setHowManyPeople(parseInt(event.target.value));
    // }
    useEffect(()=> {
        console.log(howManyPeople)
    },[howManyPeople])

    useEffect(() => {
        console.log(billValue)
    },[billValue]);

    // const billCalculateHandler = () => {
    //     setBillCalculate(billValue / howManyPeople);
    //     console.log(billCalculate);
    // }

    useEffect(()=>{
        console.log(billCalculate)
    },[billCalculate]);

    return (
    <CalculateContainer>
        <SectionContainer>
        <BillSection>
            <div>
            <label>Bill</label>
            </div>
        <input type='number' placeholder='$' onChange={(e)=> setBillValue(parseInt(e.target.value))} value={billValue} />
        </BillSection>
    <TipSelector>
        <label>Select Tip %</label>
        <div>5%</div>
        <div>10%</div>
        <div>15%</div>
        <div>20%</div>
        <div>25%</div>
        <div>50%</div>
        <input type="number" placeholder="%"/>
    </TipSelector>
        <NumberOfPeopleSection>
            <div>
            <label>Number of People</label>
            </div>
        <input type='number' placeholder='people' value={howManyPeople} onChange={(e)=> setHowManyPeople(parseInt(e.target.value))} />
        </NumberOfPeopleSection>
        <button type="submit" value={billCalculate} onClick={()=> setBillCalculate(billValue / howManyPeople)}>Calck!</button>
        </SectionContainer>
        </CalculateContainer>
    )
}

export default BillCalculate;