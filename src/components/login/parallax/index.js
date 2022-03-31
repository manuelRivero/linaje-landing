import React, { useEffect } from "react";
import Parallax from "parallax-js";
import image1 from "./../../../assets/images/login/cellphone-1.png";
import image2 from "./../../../assets/images/login/cellphone-2.png";
import image3 from "./../../../assets/images/login/cellphone-3.png";

import rooster1 from "./../../../assets/images/login/gallo-1.png";
import rooster2 from "./../../../assets/images/login/gallo-2.png";
import rooster3 from "./../../../assets/images/login/gallo-3.png";

import bgRooster1 from "./../../../assets/images/login/bg-rooster-1.png";
import bgRooster2 from "./../../../assets/images/login/bg-rooster-2.png";

import store1 from "./../../../assets/images/login/google.png";
import store2 from "./../../../assets/images/login/apple.png";

export default function ParallaxComponent() {
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div className="parallax" style={{ position: "relative", zIndex: 20 }}>
        <div id="scene">
          <div data-depth="0.4">
            <img className="image2" src={image2} />
          </div>
          <div data-depth="0.4">
            <img className="image3" src={image3} />
          </div>
          <div data-depth="0.6">
            <img className="image1" src={image1} />
          </div>
          <div data-depth="0.7">
            <img className="rooster1" src={rooster1} />
          </div>
          <div data-depth="0.8">
            <img className="rooster2" src={rooster2} />
          </div>
          <div data-depth="0.9">
            <img className="rooster3" src={rooster3} />
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 10, height: "100%" }}>
        <img className="bg-rooster2" src={bgRooster2} />
        <img className="bg-rooster1" src={bgRooster1} />
        <div className="store-row">
          <div >
            <h4>Próximamente en</h4>
          </div>
          <img className="" src={store1} />
          <img className="" src={store2} />
        </div>
      </div>
    </div>
  );
}
