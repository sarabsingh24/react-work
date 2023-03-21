import React from 'react';
import "./style.css"

export default function Navbar() {

const [showLink, setShowLinks] = React.useState(false)
const linkContainerRef = React.useRef(null);
const linkRefm = React.useRef(null);



React.useEffect(() => {
  let linkHeigh = linkRefm.current.getBoundingClientRect().height;
  console.log(linkHeigh);
  if (showLink) {
    linkContainerRef.current.style.heigh = linkHeigh + "px";
  }
}, showLink);

    return (
      <nav className="nav-bar-container " ref={linkContainerRef}>
        <aside className="logo-place">
          <div>logo</div>
          <button
            className="burgor-menu"
            onClick={() => setShowLinks(!showLink)}
          >
            burger
          </button>
        </aside>
        <div className="links" ref={linkRefm}>
          {showLink && (
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ul>
          )}
        </div>

        <div className="social">
          <ul>
            <li>facebook</li>
            <li>tweeter</li>
            <li>instagram</li>
          </ul>
        </div>
      </nav>
    );
}
