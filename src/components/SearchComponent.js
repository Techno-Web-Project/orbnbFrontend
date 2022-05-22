import React from 'react'
import './SearchComponent.css';

function SearchComponent() {
  return (
    <div className='search-component'>
        <div className="search-element">
            <h3 className='search-h3'>VILLE</h3>
            <h2 className='search-h2'>Monaco</h2>
            <h4 className='search-h4'>France</h4>
        </div>
        <div className="search-element">
            <h3 className='search-h3'>VILLE</h3>
            <h2 className='search-h2'>Monaco</h2>
            <div className="minus-plus">
                <h4 className='search-h4'>moins</h4>
                <h4 className='search-h4'>plus</h4>
            </div>
        </div>
        <div className="search-element">
            <h3 className='search-h3'>Arrivée</h3>
            <h2 className='search-h2'>Ven 14 Jan</h2>
            <div className="minus-plus">
                <h4 className='search-h4'>moins</h4>
                <h4 className='search-h4'>plus</h4>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent