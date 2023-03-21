import React from 'react'

export default function PagesCount({page, count}) {
    return (
      <span style={page == count ? { border: "1px solid red" } : null}>
        {count + 1}; 
      </span>
    );
}
