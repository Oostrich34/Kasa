import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import '../../styles/index.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-title" onClick={() => setIsOpen(prev => !prev)}>
        <h2>{title}</h2>
        {isOpen ? (
          <FaChevronUp className="chevronUp__icon" />
        ) : (
          <FaChevronDown className="chevronDown__icon" />
        )}
      </div>

      {isOpen && (
        <div className="dropdown-description">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;