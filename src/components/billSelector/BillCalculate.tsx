import PercentSelector from "./PercentSelector";
import {
  CalculateContainer,
  BillSection,
  SectionContainer,
  NumberOfPeopleSection,
  CalcButtonSection,
} from "./BillCalculateStyle";
import { useState } from "react";
import TipValue from "../tipValue/TipValue";

const BillCalculate = () => {
  const [billValue, setBillValue] = useState<number>(0);
  const [howManyPeople, setHowManyPeople] = useState<number>(0);
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [billCalculate, setBillCalculate] = useState<number>(0);
  const [updatePrc, setUpdatePrc] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState();
  const bill = () => {
    setBillCalculate(billValue / howManyPeople);
    setUpdatePrc(billValue / howManyPeople / tipPerPerson);
    setBillValue(0);
    setHowManyPeople(0);
  };

  const resetValue = () => {
    setBillCalculate(0);
    setUpdatePrc(0);
  };

  const percentValue = (prc: number) => {
    setTipPerPerson(prc);
  };


  return (
    <>
      <CalculateContainer>
        <SectionContainer>
          <BillSection>
            <div>
              <label>Bill</label>
            </div>
            <input
              type="number"
              placeholder="$"
              value={billValue}
              onChange={(e) => setBillValue(parseInt(e.target.value))}
            />
          </BillSection>
          <PercentSelector click={percentValue} />
          <NumberOfPeopleSection>
            <div>
              <label>Number of People</label>
            </div>
            <input
              type="number"
              placeholder="people"
              value={howManyPeople}
              onChange={(e) => setHowManyPeople(parseInt(e.target.value))}
            />
          </NumberOfPeopleSection>
          <CalcButtonSection>
            <button type="submit" onClick={bill}>
              CALC!
            </button>
          </CalcButtonSection>
        </SectionContainer>
      </CalculateContainer>
      <TipValue
        zeroValue={resetValue}
        calculateTip={billCalculate - updatePrc}
        calculateBill={billCalculate}
      />
    </>
  );
};

export default BillCalculate;
