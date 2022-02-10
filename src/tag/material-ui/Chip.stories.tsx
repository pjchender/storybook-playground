import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import { Stack } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chip } from './Chip';

export default {
  title: 'tags/material-ui/Chip',
  component: Chip,
  argTypes: {
    onDelete: {
      defaultValue: false,
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium'],
    },
    variant: {
      defaultValue: 'filled',
      options: ['filled', 'outlined'],
    },
    disabled: {
      defaultValue: false,
    },
    color: {
      defaultValue: 'default',
      control: { type: 'inline-radio' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    clickable: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Stack direction="row" spacing={1}>
    <Chip {...args} />
  </Stack>
);

export const BasicChip = Template.bind({});
BasicChip.args = {
  label: 'Basic Chip',
};

export const DeletableChip = Template.bind({});
DeletableChip.args = {
  label: 'Deletable Chip',
  onDelete: action('onDelete'),
};

export const ClickableChip = Template.bind({});
ClickableChip.args = {
  label: 'Chickable Chip',
  clickable: true,
};

export const CustomDeleteIconChip = Template.bind({});
CustomDeleteIconChip.args = {
  label: 'CustomDeleteIconChip',
  onDelete: action('onDelete'),
  deleteIcon: <DeleteIcon />,
};

export const IconChip = Template.bind({});
IconChip.args = {
  icon: <FaceIcon />,
  label: 'IconChip',
};
