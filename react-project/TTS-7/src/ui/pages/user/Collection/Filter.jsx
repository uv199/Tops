import React, { useState } from 'react';
import './Accordion.css';

export default function Filter ()  {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="accordion">
      <div className="section">
        <div className="header" onClick={() => toggleSection('collection')}>
         <b> COLLECTION </b>
        </div>
        {activeSection === 'collection' && (
          <div className="content">
            <ul>
              <li>All</li>
              <li>Perfume Spray (114)</li>
              <li>Solid Perfume (23)</li>
              <li>Mist (4)</li>
              <li>Beard Balm (4)</li>
              <li>Candles (15)</li>
              <li>Reed Diffuser (4)</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section ">
        <div className="header " onClick={() => toggleSection('notes')}>
         <b> NOTES </b>
        </div>
        {activeSection === 'notes' && (
          <div className="notes1 content">
            <ul className="[&>label]:flex gap-5 ">
              <li >
              <input type="checkbox" />
              <label htmlFor="">Amber    (42)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Aquatic    (12)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Aromatic    (58)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Cinnamon    (4)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Citrus    (35)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Coffee    (2)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Earthy    (3)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Floral    (24)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Fresh    (23)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Fresh Spicy    (42)</label>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="section">
        <div className="header" onClick={() => toggleSection('notes')}>
         <b>GENDER </b>
        </div>
        {activeSection === 'notes' && (
          <div >
            <ul>
              <li>
               <input type="checkbox" />
               <label htmlFor="">FeMale     (1)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Male        (3)</label>
              </li>
              <li>
              <input type="checkbox" />
              <label htmlFor="">Unisex      (7)</label>
              </li>
                 
            </ul>
          </div>
        )}
      </div>
     <div className="section">
        <div className="header" onClick={() => toggleSection('price')}>
          <b>PRICE</b>
        </div>
        {activeSection === 'price' && (
          <div className="content">
            <div className="price-range">
              <div>
                <label>Rs.</label>
                <input type="number" value="499" readOnly />
              </div>
              <div>
                <label>Rs.</label>
                <input type="number" value="650" readOnly />
              </div>
            </div>
            <input type="range" min="499" max="650" value="499" readOnly />
          </div>
        )}
      </div>
      

    </div>
  );
};


