// rfc 
import React from 'react'
import PropTypes from "prop-types";

export default function Header({
  greeting = "Welcome to you at this page",
  title,
  searchBar
}) {
  return (
    <>
      <div>
        <h1>{greeting}</h1>
        <h3>This is my Header {title}.</h3>
        <p>This is dummy header component for testing purpose.</p>
        <p>this is required input argument : {searchBar ?"Radhey Radhey":"Jay Mata Di"}</p>
        
      </div>
    </>
  )
}

Header.propTypes ={
  title:PropTypes.string,
  searchBar:PropTypes.bool.isRequired
};



