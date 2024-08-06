import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleDropdown = (index) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <div onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer', color: 'blue' }}>
            {item.lable}
          </div>
          {item.subDropdown && item.subDropdown.length > 0 && openItems[index] && (
            <div style={{ paddingLeft: '20px' }}>
              <Dropdown items={item.subDropdown} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
