// src/components/atoms/CellInput.tsx

import React from 'react';

export type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const CellInput: React.FC<Props> = ({ value, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <input type="text" value={value} onChange={handleInputChange} />;
};
