import React from 'react'

export default function Header({ clickHandeler, count, setCount }) {
  return (
    <div>
      <h4>Show peragraph count</h4>
      <form onSubmit={clickHandeler}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="form-btn">
          Generator
        </button>
      </form>
    </div>
  );
}
