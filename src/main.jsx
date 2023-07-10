import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="header-title">
      <h1 className="h1-title">The creative crew</h1>
      <div>
        <h2 className="h2-title">Who we are</h2>
        <p className="p-title">
          We are team of creatively diverse. driven. innovative individuals
          working in various locations from the world.
        </p>
      </div>
    </header>
    <main className="info-main">
      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-1"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo1.png?raw=true"
            alt="person-1"
          />
          <p className="p-info">Product owner</p>
        </div>
        <h2>Bill Mahoney</h2>
      </div>

      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-2"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo2.png?raw=true"
            alt="person-2"
          />
          <p className="p-info">Art director</p>
        </div>
        <h2>Saba Cabrera</h2>
      </div>

      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-3"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo3.png?raw=true"
            alt="person-3"
          />
          <p className="p-info">Tech Lead</p>
        </div>
        <h2>Shae Le</h2>
      </div>

      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-4"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo4.png?raw=true"
            alt="person-4"
          />
          <p className="p-info">UX Designer</p>
        </div>
        <h2>Skylah Lu</h2>
      </div>

      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-5"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo5.png?raw=true"
            alt="person-5"
          />
          <p className="p-info">Developer</p>
        </div>
        <h2>Griff Richards</h2>
      </div>

      <div className="div-person">
        <div className="img-text-info">
          <img
            className="img-person-6"
            src="https://github.com/RonyPadilla/Team-page/blob/main/img/photo6.png?raw=true"
            alt="person-6"
          />
          <p className="p-info">Developer</p>
        </div>
        <h2>Stan John</h2>
      </div>
    </main>
    <footer className="footer-credits">
      <p>
        created by - <a href="https://github.com/RonyPadilla">RonyPadilla</a> -
        devChallenges.io
      </p>
    </footer>
  </React.StrictMode>
);
