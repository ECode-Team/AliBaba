import "./InputGroup.scss";
import { useEffect, useRef, useState } from "react";

const InputGroup = (
    {
        label,
        name,
        type = "text",
        value,
        onChange = () => { },
        maxLength,
        width,
        readOnly = false,
        options = [],
        isDropdown,
        borderRight = "8px",
        borderLeft = "8px"
    }
) => {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const handleClickOutside = event => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, []);

    const handleSelect = option => {
        onChange(option)
        setIsOpen(false)
    }

    return (
        <div className="inputGroup" style={{ width }} ref={wrapperRef}>
            <input
                style={{ borderTopRightRadius: borderRight, borderBottomRightRadius: borderRight, borderTopLeftRadius: borderLeft, borderBottomLeftRadius: borderLeft }}
                type={type === "password" && showPassword ? "text" : type}
                className={type === "password" ? "password-fields" : ""}
                name={name}
                required
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                readOnly={readOnly}
                onClick={() => setIsOpen(prev => !prev)}
            />
            <label htmlFor={name}>
                {label}
            </label>

            {
                type === "password" && (
                    <span className="toggle-password" onClick={() =>
                        setShowPassword((prev) => !prev)}>
                        <img
                            src={showPassword ? "/icons/eye-off.png" : "/icons/eye.png"}
                            alt="toggle password"
                            style={{ width: "20px", height: "20px", cursor: "pointer" }}
                        />
                    </span>
                )
            }

            {(isOpen && isDropdown) && (
                <div className="dropdown" >
                    {options.map((opt) => (
                        <div
                            key={opt}
                            className={`dropdown-option ${opt === value ? "selected" : ""}`}
                            onClick={() => handleSelect(opt)}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default InputGroup;
