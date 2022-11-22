
import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { DropdownComponent } from './dropdown.component';

export default {
  component: DropdownComponent,
  title: 'Dropdown',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};