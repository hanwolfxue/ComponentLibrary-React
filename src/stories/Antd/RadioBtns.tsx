import { Radio } from "antd";
import "./RadioBtns.css";
import { defaultOptions } from "./defaultData";

type Option = {
  label: string;
  value: string;
};

export interface RadioBtnsProps {
  defaultValue: string;
  options: Option[];
}

export const RadioBtns = (props: RadioBtnsProps) => {
  const { defaultValue = "", options = defaultOptions, value } = props;
  console.log(123);
  const onChange = (_value) => {
    console.log("value", 123);
  };
  return (
    <Radio.Group defaultValue={defaultValue} id="group">
      {options.map((item, index) => (
        <Radio.Button key={index} value={item.value} onChange={onChange}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
