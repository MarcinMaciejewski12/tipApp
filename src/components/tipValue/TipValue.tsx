import { BillValueContainer, TipAmount, TotalPrice,ResetButton  } from "./TipValueStyle";

const TipValue = () => {

    return <BillValueContainer>
    <TipAmount>
    <div>
     <h1>Tip Amount</h1>
      <p>/person</p>
    </div>
    <h2>$4.5</h2>
    </TipAmount>
    <TotalPrice>
    <div>
     <h1>Total</h1>
      <p>/person</p>
    </div>
     <h2>$32.4</h2>
    </TotalPrice>
    <ResetButton>
       <h1>RESET</h1> 
        </ResetButton>
    </BillValueContainer>
    
}



export default TipValue;