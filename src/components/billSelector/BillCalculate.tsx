import { CalculateContainer, BillSection, SectionContainer, TipSelector, NumberOfPeopleSection } from './BillCalculateStyle';
import React, { useState } from 'react';

const BillCalculate = () => {
    const [billValue, setBillValue] = useState(1);
    const [howManyPeople, setHowManyPeople] = useState(1);
    const [billCalculate, setBillCalculate] = useState(0);

    const billHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBillValue(parseInt(event.target.value));
        console.log(billValue);
    }

    const peopleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHowManyPeople(parseInt(event.target.value));
        console.log(howManyPeople);
    }

    const billCalculateHandler = () => {
        setBillCalculate(billValue / howManyPeople);
        console.log(billCalculate);
    }

    return (
    <CalculateContainer>
        <SectionContainer>
        <BillSection>
            <div>
            <label>Bill</label>
            </div>
        <input type='number' placeholder='$' onChange={billHandler} value={billValue} />
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
        <input type='number' placeholder='people' value={howManyPeople} onChange={peopleHandler} />
        </NumberOfPeopleSection>
        <button type="submit" value={billCalculate} onClick={billCalculateHandler}>Calck!</button>
        </SectionContainer>
        </CalculateContainer>
    )
}

export default BillCalculate;