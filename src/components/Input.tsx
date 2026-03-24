import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
}

export default function Input({ id, className = '', ...props }: InputProps) {
    return (
        <input
            id={id}
            className={`border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
}
