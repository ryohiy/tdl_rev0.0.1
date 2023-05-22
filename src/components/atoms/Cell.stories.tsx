// src/components/atoms/Cell.stories.tsx

import React from 'react';
// import { Story, Meta } from '@storybook/react/types-6-0';
//todo gpt4は上記を教えてくれた。しかし実態や、以下の記事を読んだところ下記の記述で良さそう。
import { Story, Meta } from '@storybook/react';
// 上記の参考にした記事：https://github.com/storybookjs/storybook/issues/14190
import { Cell, Props } from './Cell';

export default {
    title: 'atoms/Cell',
    component: Cell,
} as Meta;

const Template: Story<Props> = (args) => <Cell {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'Sample Cell',
    onClick: () => alert('Cell clicked!'),
};