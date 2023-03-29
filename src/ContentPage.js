import React from "react";
import { Link } from "react-router-dom";
import './App.css'




function ContentPage() {
  return (
    <nav className="box-container">
      <Link to="/react-work/pagination" className="item-sty">
        Pagination
      </Link>
      <Link to="/react-work/calculator" className="item-sty">
        Calculator
      </Link>
      {/* <Link to="/react-work/test-context" className="item-sty">
        Context
      </Link> */}
      {/* <Link to="/react-work/test-redux" className="item-sty">
        Redux
      </Link>
      <Link to="/react-work/redux-thapa" className="item-sty">
        Redux Thapa
      </Link> */}
      <Link to="/react-work/new-cart" className="item-sty">
        New Cart
      </Link>
      <Link to="/react-work/random-user" className="item-sty">
        Rendom user
      </Link>
      <Link to="/react-work/sidebar-modal" className="item-sty">
        Side Nav/Modal
      </Link>
      <Link to="/react-work/food-items" className="item-sty">
        Food Items
      </Link>
      <Link to="/react-work/food-menu-new" className="item-sty">
        Food menu
      </Link>
      

      <Link to="/react-work/slider-new" className="item-sty">
        Slider
      </Link>
      <Link to="/react-work/tab-content-new" className="item-sty">
        Tab Content
      </Link>

      <Link to="/react-work/accordion" className="item-sty">
        Accordion
      </Link>
      <Link to="/react-work/tour" className="item-sty">
        Tour
      </Link>
      <Link to="/react-work/birthday-alarm" className="item-sty">
        Birthday Alarm
      </Link>
      {/* <Link to="/react-work/redux-ex" className="item-sty">
        Redux
      </Link>
      <Link to="/react-work/use-callback" className="item-sty">
        Use Callback
      </Link>
      <Link to="/react-work/memo" className="item-sty">
        Use Memo
      </Link>
      <Link to="/react-work/use-router" className="item-sty">
        Use Router
      </Link>
      <Link to="/react-work/use-fetch" className="item-sty">
        Use Fetch
      </Link>
      <Link to="/react-work/use-context" className="item-sty">
        Use Context
      </Link>
      <Link to="/react-work/use-reducer-ex" className="item-sty">
        Use Reducer
      </Link>
      <Link to="/react-work/form-submit" className="item-sty">
        Form Submit
      </Link> */}
      {/* <Link to="/react-work/form-dynamic" className="item-sty">
        Form Dynamic
      </Link> */}
      {/* <Link to="/react-work/fetch-data" className="item-sty">
        Fetch Data
      </Link> */}
      <Link to="/react-work/reviews" className="item-sty">
        Reviews
      </Link>
    
      <Link to="/react-work/generrator" className="item-sty">
        Generator
      </Link>
    </nav>
  );
}

export default ContentPage;
