// src/components/atoms/CellInput.stories.tsx //alertをやめた！

import React from 'react';
import {Story, Meta} from '@storybook/react';
import {useArgs} from '@storybook/client-api';
import {CellInput, Props} from './CellInput';

export default {
    title: 'atoms/CellInput',
    component: CellInput,
} as Meta;

//todo テスト手法に問題があるのか。コンポーネントに問題があるのか。
// 実際に操作したところ意図した動作をしているような感じがしないので確認する。
const Template: Story<Props> = (args) => {
    const [{value}, updateArgs] = useArgs();
    const handleChange = (newValue: string) => {
        updateArgs({value: newValue});
    }
    return <CellInput {...args} value={value} onChange={handleChange}/>;
};

export const Default = Template.bind({});
Default.args = {
    value: 'Sample Input',
    onChange: () => {},
};