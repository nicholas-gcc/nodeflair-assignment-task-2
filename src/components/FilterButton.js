import React from 'react'

export default function FilterButton(props) {
    return (
        <button className="filter-button" onClick={props.onClick}>
            {props.name}
        </button>
    );
}
