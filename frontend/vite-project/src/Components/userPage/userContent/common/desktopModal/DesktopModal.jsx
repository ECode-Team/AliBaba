import { useEffect, useState } from "react";
import "./DesktopModal.scss";

const DesktopModal = ({ title, description: desc, buttonText, children, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div
                className={`modal-content ${isClosing ? "slide-down" : "slide-up"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-title">
                    <h3>{title}</h3>
                    <img src="/icons/close.png" alt="" onClick={handleClose}/>
                </div>
                <p>{desc}</p>
                <div className="modal-body">{children}</div>
                <button className="modal-button" onClick={onClose}>{buttonText}</button>
            </div>
        </div>
    );
};

export default DesktopModal;
