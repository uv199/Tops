import { Filter } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function FilterCom(props) {
  const [open, setOpen] = useState("1");
  const [selectedGender, setSelectedGender] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 499, max: 950 });
  const [priceInput, setPriceInput] = useState({ min: 499, max: 950 });
  const [rating, setRating] = useState(0);
  const [minPrice, setMinPrice] = useState(499);
  const [maxPrice, setMaxPrice] = useState(950);

  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceInput({ ...priceInput, [name]: value });
    setPriceRange({ ...priceRange, [name]: value });
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
    setPriceRange({ ...priceRange, min: value });
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
    setPriceRange({ ...priceRange, max: value });
  };

  const handleSliderChange = (e) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setMinPrice(min);
    setMaxPrice(max);
    setPriceRange({ min, max });
  };

  return (
    <>
      <hr />
      <div className="d-flex">
        <div>
          <div className="flex ps-4 pt-3 align-center">
            <h1 className="pt-1">
              <strong>Filter Collection</strong>
            </h1>
            <Filter />
          </div>
          <Accordion
            flush
            open={open}
            toggle={toggle}
            className="border-none mt-4"
          >
            <AccordionItem>
              <AccordionHeader targetId="1">
                <strong>Collection</strong>
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <ul>
                  <li>All</li>
                  <li>Perfume Spray (114)</li>
                  <li>Solid Perfume (23)</li>
                  <li>Mist (4)</li>
                  <li>Beard Balm (4)</li>
                  <li>Candles (15)</li>
                  <li>Reed Diffuser (4)</li>
                </ul>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="2">
                <strong>Notes</strong>
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <ul className="[&>label]:flex gap-5">
                  <li>
                    <input type="checkbox" id="amber" />
                    <label htmlFor="amber">Amber (42)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="aquatic" />
                    <label htmlFor="aquatic">Aquatic (12)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="aromatic" />
                    <label htmlFor="aromatic">Aromatic (58)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="cinnamon" />
                    <label htmlFor="cinnamon">Cinnamon (4)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="citrus" />
                    <label htmlFor="citrus">Citrus (35)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="coffee" />
                    <label htmlFor="coffee">Coffee (2)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="earthy" />
                    <label htmlFor="earthy">Earthy (3)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="floral" />
                    <label htmlFor="floral">Floral (24)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fresh" />
                    <label htmlFor="fresh">Fresh (23)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fresh-spicy" />
                    <label htmlFor="fresh-spicy">Fresh Spicy (42)</label>
                  </li>
                </ul>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="3">
                <strong>Gender</strong>
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={selectedGender === "Female"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="female">Female (1)</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={selectedGender === "Male"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="male">Male (3)</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="gender"
                      value="Unisex"
                      checked={selectedGender === "Unisex"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="unisex">Unisex (7)</label>
                  </li>
                </ul>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="4">
                <strong>Price</strong>
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <div>
                  <div className="price-filter">
                    <div className="price-inputs">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min="499"
                        max="950"
                      />
                      <span> - </span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min="499"
                        max="950"
                      />
                    </div>
                    <input
                      type="range"
                      min="499"
                      max="950"
                      value={minPrice}
                      onChange={(e) => handleMinPriceChange(e)}
                      step="1"
                      style={{ width: "100%" }}
                    />
                    <input
                      type="range"
                      min="499"
                      max="950"
                      value={maxPrice}
                      onChange={(e) => handleMaxPriceChange(e)}
                      step="1"
                      style={{ width: "100%" }}
                    />
                    <div className="range-labels">
                      <span>{minPrice}</span>
                      <span>{maxPrice}</span>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="5">
                <strong>Review And Ratings</strong>
              </AccordionHeader>
              <AccordionBody accordionId="5">
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="star"
                      style={{
                        cursor: "pointer",
                        color: rating >= star ? "gold" : "gray",
                        fontSize: "35px",
                      }}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="contentsec"></div>
      </div>
    </>
  );
}
