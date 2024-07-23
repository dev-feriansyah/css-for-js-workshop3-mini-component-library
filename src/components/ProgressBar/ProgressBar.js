/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--padding': '0',
    '--height': '8px',
  },
  medium: {
    '--padding': '0',
    '--height': '12px',
  },
  large: {
    '--padding': '4px',
    '--height': '24px',
  },
}

const ProgressBar = ({ value, size }) => {
  const stylesSize = SIZES[size]
  return (
    <div>
      <VisuallyHidden>
        <label htmlFor="progressLabel">progress bar</label>
      </VisuallyHidden>
      <Progress
        id="progressLabel"
        min="0"
        max="100"
        value={value}
        style={stylesSize}
      />
    </div>
  )
}

const Progress = styled.progress`
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 4px;

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.value === 100 ? '4px' : '4px 0 0 4px')};
  }

  /* Chrome */
  /* &::-webkit-progress-bar {
    height: var(--height);
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
  } */
`

export default ProgressBar
