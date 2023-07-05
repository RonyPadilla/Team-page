import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <h1>The creative crew</h1>
      <h2>Who we are</h2>
      <p>
        We are team of creatively diverse. driven. innovative individuals
        working in various locations from the world.
      </p>
    </header>
    <main className="info-main">
      <div className="div-person-1">
        <p>Product owner</p>
        <img className="img-person-1" src="img\photo1.png" alt="person-1" />
        <h2>Bill Mahoney</h2>
      </div>
      <div className="div-person-1">
        <p>Art director</p>
        <img className="img-person-2" src="img\photo2.png" alt="person-2" />
        <h2>Saba Cabrera</h2>
      </div>
      <div className="div-person-1">
        <p>Tech Lead</p>
        <img className="img-person-3" src="img\photo3.png" alt="person-3" />
        <h2>Shae Le</h2>
      </div>
      <div className="div-person-1">
        <p>UX Designer</p>
        <img className="img-person-4" src="img\photo4.png" alt="person-4" />
        <h2>Skylah Lu</h2>
      </div>
      <div className="div-person-1">
        <p>Developer</p>
        <img className="img-person-5" src="img\photo5.png" alt="person-5" />
        <h2>Griff Richards</h2>
      </div>
      <div className="div-person-1">
        <p>Developer</p>
        <img className="img-person-6" src="img\photo6.png" alt="person-6" />
        <h2>Stan John</h2>
      </div>
    </main>
    <footer><p>created by - <a href="https://github.com/RonyPadilla">username</a>  - devChallenges.io</p></footer>
  </React.StrictMode>
);
