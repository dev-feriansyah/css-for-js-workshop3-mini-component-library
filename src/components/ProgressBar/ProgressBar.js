/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    padding: '0',
    height: '8px',
    radius: '4px',
  },
  medium: {
    padding: '0',
    height: '12px',
    radius: '4px',
  },
  large: {
    padding: '4px',
    height: '24px',
    radius: '8px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding,
        '--radius': styles.radius,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`
export default ProgressBar
