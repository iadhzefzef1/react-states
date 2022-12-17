import React, { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
export default function App() {
  const [person, setperson] = useState({
    name: "khayri",
    profession: "student",
    bio: "bgfbfgbgfb",
    img: "https://images.rtl.fr/~c/770v513/rtl/www/1534693-cristiano-ronaldo-avec-le-maillot-de-manchester-united-le-26-fevrier-2022.jpg",
  });

  return (
    <div className="app">
      <Modal person={person} />
    </div>
  );
}
