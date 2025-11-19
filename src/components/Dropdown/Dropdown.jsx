import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import '../../styles/index.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__title">
        <h3>{title}</h3>
        <FaChevronDown className={`chevron ${isOpen ? "rotate" : ""}`}  onClick={() => setIsOpen(prev => !prev)}/>

      </div>

      <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;