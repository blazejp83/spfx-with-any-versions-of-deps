import * as React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { TextField } from 'office-ui-fabric-react';

export interface ITextBoxControlProps {
    control: Control<any>;
    name: string;
    errors: FieldErrors<any>;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    prefix?:string;
    placeholder?:string;
    multiline?:boolean;
    defaultValue?:string;

    onChangeCallback?: (...event: any[]) => void;
}

export const TextBoxControl: React.FC<ITextBoxControlProps> = ({
    control,
    name,
    errors,
    label,
    disabled,
    required,
    prefix,
    placeholder,
    defaultValue,
    onChangeCallback
}) => {
    return (
        <Controller
        name={name}
        control={control}
        disabled={disabled}
        defaultValue={defaultValue}
        render={({onChange, onBlur, value, name: fieldName}) => (
            <TextField
            onBlur={onBlur}
            onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {onChange(newValue); onChangeCallback && onChangeCallback(event);}}
            value={value}
            name={fieldName}
            errorMessage={errors[fieldName] && errors[fieldName].message}
            label={label}
            disabled={disabled}
            required={required}
            prefix={prefix}
            placeholder={placeholder}
            />
        )}
        />

    );
    
}