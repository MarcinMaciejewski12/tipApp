import { CalculateContainer, BillSection, SectionContainer, TipSelector, NumberOfPeopleSection } from './BillCalculateStyle';
import React, { useState } from 'react';

const BillCalculate = () => {
    const [billValue, setBillValue] = useState('');
    const [howManyPeople, setHowManyPeople] = useState('');

    const billHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBillValue(event.target.value);

    }

    const peopleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHowManyPeople(event.target.value);
    }

    const multiplyBill = () => {
        console.log('click');
    }

    return (
    <CalculateContainer>
        <SectionContainer>
        <BillSection>
            <div>
            <label>Bill</label>
            </div>
        <input type='text' placeholder='$' onChange={billHandler} value={billValue} />
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
        <button type="submit" onClick={() => multiplyBill}>Calck!</button>
        </SectionContainer>
        </CalculateContainer>
    )
}

export default BillCalculate;