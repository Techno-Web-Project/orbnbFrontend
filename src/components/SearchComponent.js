import React from 'react'
import './SearchComponent.css';
import { useState } from 'react';

function SearchComponent(props) {

  return (
    <div className='search-component'>
        <div className="search-element">
            <h3 className='search-h3'>VILLE</h3>
            <input 
                className='search-input' 
                type="text" 
                placeholder="Monaco" 
                onChange={event => {
                    props.changeTerm(event.target.value);
                }}
            />
            <h4 className='search-h4'>France</h4>
        </div>
        <div className="search-element">
            <h3 className='search-h3'>PERSONNES</h3>
            <h2 className='search-h2'>4 personnes</h2>
            <div className="minus-plus">
                <h4 className='search-h4'>moins</h4>
                <h4 className='search-h4'>plus</h4>
            </div>
        </div>
        <div className="search-element">
            <div className="search-dates">
                <h3 className='search-h3'>ARRIVEE</h3>
                <h2 className='search-h2'>Ven 14 Jan</h2>
                <div className="minus-plus">
                    <h4 className='search-h4'>moins</h4>
                    <h4 className='search-h4'>plus</h4>
                </div>
            </div>
            <div className="search-dates">
                <h3 className='search-h3'>DEPART</h3>
                <h2 className='search-h2'>Lun 17 Jan</h2>
                <div className="minus-plus">
                    <h4 className='search-h4'>moins</h4>
                    <h4 className='search-h4'>plus</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent