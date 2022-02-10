/* eslint-disable import/no-extraneous-dependencies */
import { Chip as MuiChip, ChipTypeMap } from '@mui/material';
import { FC, ReactElement } from 'react';

// type Props = ChipTypeMap['props'];
interface Props {
  /**
   * The Avatar element to display.
   */
  avatar?: ReactElement;
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children?: null;
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: boolean;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon?: React.ReactElement;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: boolean;
  /**
   * Icon element.
   */
  icon?: React.ReactElement;
  /**
   * The content of the component.
   */
  label?: React.ReactNode;
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: React.EventHandler<any>;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
}

export const Chip: FC<Props> = ({ ...args }) => {
  return <MuiChip {...args} />;
};
