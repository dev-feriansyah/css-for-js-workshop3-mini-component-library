import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    iconSize: 16,
    borderStroke: 1,
    fontSize: 14,
  },
  large: {
    iconSize: 24,
    borderStroke: 2,
    fontSize: 18,
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const inputSize = SIZES[size]

  if (!inputSize) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <Wrapper
      style={{
        '--width': width + 'px',
      }}
    >
      <WrapperIcon>
        <Icon
          id={icon}
          size={inputSize.iconSize}
          strokeWidth={inputSize.borderStroke}
        />
      </WrapperIcon>
      <InputText
        type="text"
        placeholder={placeholder}
        style={{
          '--iconGap': inputSize.iconSize + 8 + 'px',
          '--fontSize': inputSize.fontSize / 16 + 'rem',
          '--borderStroke': inputSize.borderStroke + 'px',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  --color: ${COLORS.gray700};

  position: relative;
  display: block;
  width: var(--width);
  color: var(--color);

  &:hover {
    --color: black;
  }
`

const InputText = styled.input`
  border: none;
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;

  border-bottom: var(--borderStroke) solid black;
  padding: 8px;
  padding-left: var(--iconGap);
  width: 100%;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
    border-radius: 2px;
  }
`

const WrapperIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
`

export default IconInput
