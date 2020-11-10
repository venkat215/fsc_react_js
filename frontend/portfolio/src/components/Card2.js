import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./Card2.css";

function Card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 1000, friction: 100 },
  });
  return (
    <div className="wrapper" onClick={() => set((state) => !state)}>
      <a.div
        class="c front"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <img className="custom-shadow" src={props.item.imgSrc} alt="Avatar" />
        <h6 style={{ textAlign: "center", fontWeight: "bold", height: "50px" }}>
          {props.item.title}
        </h6>
      </a.div>
      <a.div
        class="c back custom-shadow"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <h4>{props.item.title}</h4>
        <p>{props.item.subTitle}</p>
        <a
          onClick={(e) => e.stopPropagation()}
          href={props.item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.item.linkText}
        </a>
      </a.div>
    </div>
  );
}

export default Card;
