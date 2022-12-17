import React, { useState } from "react";

function Modal({ person }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>show</button>

      {show && (
        <div className="modal-bg">
          <div className="modal">
            <span onClick={() => setShow(false)}>X</span>

            <h1>{person.name}</h1>
            <h1>{person.bio}</h1>
            <h1>{person.profession}</h1>
            <img src={person.img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
