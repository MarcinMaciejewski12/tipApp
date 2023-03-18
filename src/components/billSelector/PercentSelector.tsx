import { useState } from "react";
import { TipSelector, DefaultStyleButton } from "./BillCalculateStyle";

const PercentSelector = (props: any) => {
  const [color, setColor] = useState(false);

  const buttons = [
    {
      name: "5%",
      value: 1.05,

    },
    {
      name: "10%",
      value: 1.1,

    },
    {
      name: "15%",
      value: 1.15,

    },
    {
      name: "20%",
      value: 1.2,

    },
    {
      name: "25%",
      value: 1.25,

    },
    {
      name: "50%",
      value: 1.5,
    },
  ];

  return (
    <TipSelector>
      <label>Select Tip %</label>
      {buttons.map((button) => (
        <DefaultStyleButton
          key={button.value}
          onClick={() => {
            props.click(button.value);
          }}
          style={{
            background:
            button
                ? "hsl(183.03030303030303, 100%, 19.411764705882355%)"
                : "hsl(183, 100%, 23.52941176470588%)",
          }}
        >
          {button.name}
        </DefaultStyleButton>
      ))}
    </TipSelector>
  );
};

export default PercentSelector;
