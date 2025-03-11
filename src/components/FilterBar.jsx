import React from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilter }) => {
    return (
        <div className="filter-bar">
            <select onChange={(e) => onFilter(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
            </select>
        </div>
    );
};

export default FilterBar;