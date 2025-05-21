import { useRef, useState, useEffect } from "react";
import "./Accordion.scss"; // optional if styles needed

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="accordion">
            <button className="accordion-header" onClick={() => setIsOpen(prev => !prev)}>
                <h4>{title}</h4>
                <img src={isOpen ? "/icons/chevron-up.png" : "/icons/chevron-down.png" } alt="" />
            </button>
            <div
                className="accordion-content"
                ref={contentRef}
                style={{ maxHeight: height }}
            >
                <div className="accordion-inner">{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
