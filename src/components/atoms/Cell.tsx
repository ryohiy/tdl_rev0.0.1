// src/components/atoms/Cell.tsx

import React from 'react';

export type Props = {
    value: string;
    onClick: () => void;
};

export const Cell: React.FC<Props> = ({ value, onClick }) => {
    return <td onClick={onClick}>{value}</td>;
};