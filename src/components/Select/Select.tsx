import React, { ChangeEventHandler, FC } from 'react';
import './Select.scss';

interface Options {
  value: string;
  name: string;
}

interface SelectProps {
  labelName: string;
  defaultValue: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  options: Options[];
}

const Select: FC<SelectProps> = ({ name, onChange, defaultValue, options, labelName }) => {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {labelName}
      </label>
      <select
        data-testid={`select-${name}`}
        className="select"
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={name + option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(Select);
