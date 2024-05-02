import "./Input.css"
import {ChangeEventHandler, FC} from "react";

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    type: string;
}

const Input: FC<InputProps> = ({value, onChange, placeholder, type}) => {
    return (
        <>
            <input
                className="input"
                type={type || "text"}
                value={value}
                onChange={onChange}
                placeholder={placeholder || ""}
            />
        </>
    );
}

export default Input;