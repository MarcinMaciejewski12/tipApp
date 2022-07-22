import { CalculateContainer, BillSection, SectionContainer, TipSelector, NumberOfPeopleSection } from './BillCalculateStyle';
import { useEffect, useState } from 'react';

const BillCalculate = () => {
    const [billValue, setBillValue] = useState();
    // const billValue = useRef();

    // const typeValueOfBill = billValue.target.value;
   const updateValue = useEffect(() => {
       
        // console.log(setBillValue(typeValueOfBill));
    })

    return (
    <CalculateContainer>
        <SectionContainer>
        <BillSection>
            <div>
            <label>Bill</label>
            </div>
        <input type='number' value={billValue} />
        </BillSection>
    <TipSelector>
        <label>Select Tip %</label>
        <div>5%</div>
        <div>10%</div>
        <div>15%</div>
        <div>20%</div>
        <div>25%</div>
        <div>50%</div>
        <input type="text" value="%"/>
    </TipSelector>
        <NumberOfPeopleSection>
            <div>
            <label>Number of People</label>
            </div>
        <input type='text' />
        </NumberOfPeopleSection>
        <button type="submit">Calck!</button>
        </SectionContainer>
        </CalculateContainer>
    )
}

export default BillCalculate;