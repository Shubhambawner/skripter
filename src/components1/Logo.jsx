import React, { useEffect, useRef } from 'react';
// import Lottie from 'react-lottie';
// import animationData from "./office.json";
import logo from './final-logo.png'
function Logo() {
  const container = useRef(null);
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,

  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   }
  // };
  return (
    <div >
      {/* <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      /> */}
      <img src={logo} alt="logo" />
      <p className='fs-5 text-center text-uppercase fst-italic fw-bolder'>Scripter</p>
    </div>
  );
}

export default Logo;