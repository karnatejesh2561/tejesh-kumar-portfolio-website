/** React Imports */
import React from "react";

/** Libraries */
import { Controller } from "react-hook-form";

/** Local Imports */
import Formfields from "../../models/formfields.json";

const formfieldsData = Formfields;

const CustomInput = ({
    name,
    parent,
    control,
    type,
    styles,
    disabled = false,
    Icon = null,
    defaultValue = "",
}) => {
    
    const FieldName = formfieldsData[parent]?.[name];
    const InputWrapper = type === "textarea" ? "textarea" : "input";
    const inputId = name?.replace("_", "-");

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field,  fieldState: { error } }) => (
                <div className={styles.input_group}>
                    {FieldName?.label && (
                        <label htmlFor={inputId} className={styles.label}>
                            {FieldName?.label || ""}
                        </label>
                    )}

                    {Icon && <span className={styles.icon}>{Icon}</span>}
                    <InputWrapper
                        {...field}
                        value={field.value || ""}
                        type={type}
                        className={styles.input}
                        placeholder={FieldName?.placeholder || ""}
                        disabled={disabled ? disabled : ''}
                        id={inputId}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        autoComplete="off"
                        style={{cursor: disabled ? "not-allowed" : "auto"}}
                    />

                    {error && (
                        <p
                            id={`${inputId}-error`}
                            className={styles.error_msg || "default-error-style"}
                            role="alert"
                        >
                            {error.message || "Invalid input"}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default CustomInput;