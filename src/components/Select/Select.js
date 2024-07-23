import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <ValueWrapper>
        <span>{displayedValue}</span>
        <Icon id="chevron-down" strokeWidth={2} />
      </ValueWrapper>
    </Wrapper>
  )
}

const SelectWrapper = styled.select`
  appearance: none;
  border: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Wrapper = styled.div`
  position: relative;
  max-width: fit-content;
  padding: 10px 14px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${COLORS.black};
  }

  &:has(${SelectWrapper}:focus) {
    outline: 2px solid hsla(218, 57%, 53%, 1);
    outline: 2px auto -webkit-focus-ring-color;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default Select
