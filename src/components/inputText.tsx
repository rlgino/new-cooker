import React, { FC, ChangeEvent } from 'react';

interface InputTextProps {
    value: any;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
}

const InputText: FC<InputTextProps> = ({ value, type, onChange, placeholder, name }) => {
    return (<div className="relative z-0 w-full mb-5 group">
        <input
            className="block p-4 w-full text-sm text-gray-900 bg-transparent border-2 rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type={type}
            value={value}
            onChange={e => onChange(e)}
            placeholder={placeholder}
            name={name}
        />
        </div>
    );
};

export default InputText;