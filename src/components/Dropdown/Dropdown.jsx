import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import '../../styles/index.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={() => setIsOpen(prev => !prev)}>
        <h2>{title}</h2>
        <FaChevronDown className={`chevron ${isOpen ? "rotate" : ""}`} />

      </div>

      <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;