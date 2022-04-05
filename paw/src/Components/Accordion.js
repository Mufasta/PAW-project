import React, { useState } from 'react';

// Create the accordion and set each developer to inactive to the dropdown is not active
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  // onClick will activate the dropdown portio of the accordion 
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {/* accordion shows developers bio's if isActive is TRUE */}
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;