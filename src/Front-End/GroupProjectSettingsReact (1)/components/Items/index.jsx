import React from "react";
import X015 from "../X015";
import "./Items.sass";

function Items(props) {
  const { x0151Props, x0152Props, x0153Props, x0154Props, x0155Props, x0156Props } = props;

  return (
    <div className="items-1">
      <X015 icon={x0151Props.icon} spanText1={x0151Props.spanText1} spanText2={x0151Props.spanText2} />
      <X015
        icon={x0152Props.icon}
        spanText1={x0152Props.spanText1}
        spanText2={x0152Props.spanText2}
        className={x0152Props.className}
      />
      <X015
        icon={x0153Props.icon}
        spanText1={x0153Props.spanText1}
        spanText2={x0153Props.spanText2}
        className={x0153Props.className}
      />
      <X015
        icon={x0154Props.icon}
        spanText1={x0154Props.spanText1}
        spanText2={x0154Props.spanText2}
        className={x0154Props.className}
      />
      <X015
        icon={x0155Props.icon}
        spanText1={x0155Props.spanText1}
        spanText2={x0155Props.spanText2}
        className={x0155Props.className}
      />
      <X015
        icon={x0156Props.icon}
        spanText1={x0156Props.spanText1}
        spanText2={x0156Props.spanText2}
        className={x0156Props.className}
      />
    </div>
  );
}

export default Items;
