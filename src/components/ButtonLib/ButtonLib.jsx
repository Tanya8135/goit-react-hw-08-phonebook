import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useButton } from '@mui/base/useButton';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

import css from './ButtonLib.module.css';

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children, disabled } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
};

export default function UseButton() {
  return (
    <Stack spacing={2} direction="row">
      <button className={css.btn}>Add contact</button>
    </Stack>
  );
}

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButtonRoot = styled('button')`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  // background-color: ${blue[500]};
  background-color: transparent;

  color: #b1b1b1;
  border-radius: 8px;
  border: 1px solid #c0c0c0;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    // background-color: ${blue[600]};
    background-color: #c0c0c0;
    color: white;
  }

  &.active {
    background-color: ${blue[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
