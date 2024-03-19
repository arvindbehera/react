/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import "./modal.css";

// eslint-disable-next-line react/prop-types
function Modal({ setShow }) {
  return (
    <div className="modal-one">
      <div className="inner">
        <span onClick={() => setShow(false)}>X</span>
        <h3>Subscribe</h3>
        <input type="text" />
      </div>
    </div>
  );
}

export default Modal;
