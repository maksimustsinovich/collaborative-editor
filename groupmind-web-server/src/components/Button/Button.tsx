import "./Button.css";
import {FC, MouseEventHandler} from "react";

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    text: string;
}

const Button: FC<ButtonProps> = ({onClick, text}) => {
    return (
        <>
            <button onClick={onClick} className="button">
                {text}
            </button>
        </>
    );
}

export default Button;