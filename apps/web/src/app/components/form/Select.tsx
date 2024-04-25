import { ChangeEvent } from 'react';
import styled from 'styled-components';

export const SelectStyled = styled.select`
  width: 100%;
  padding: 0.8rem 0.5rem;
  margin: 0.4rem 0;
  border-radius: 4px;
`

export type SelectOption = { label: string; value: string };

export interface SelectProps {
  options: SelectOption[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  placeholder?: string;
}

export const Select = ({
  options,
  onChange,
  value,
  placeholder = 'Select an option'
}: SelectProps) => {
  return (
    <SelectStyled onChange={onChange} value={value}>
      <option value="" disabled hidden>{placeholder}</option>
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </SelectStyled>
  );
};