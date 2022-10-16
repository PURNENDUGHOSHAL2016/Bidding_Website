import React, { useState } from "react";
import Main from "../components/mainApi";
import "./Onlinebid.css";
import MainLogic from "../components/MainLogic";
import Headnav from "../components/Headnav"
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Onlinebid = () => {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState(Main);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/signup");
  });

  const filterItem = (category) => {
    const updatedList = Main.filter((curElem) => {
      return curElem.category === category;
    });

    setMainData(updatedList);
  };

  return (
    <>
    <Headnav />
      <nav className="navbar">
        <div className="btn-group">
          {/* <button className='btn-group__item' onClick={filteritem("")} >Home</button> */}
          <button
            className="btn-group__item"
            onclick={() => filterItem("Under19")}
          >
            Under19
          </button>
          <button
            className="btn-group__item"
            onclick={() => filterItem("New Best Player")}
          >
            New Best player
          </button>
          <button
            className="btn-group__item"
            onclick={() => filterItem("Best Player")}
          >
            Best player
          </button>
          {/* <button className='btn-group__item'>Announcement</button> */}
          <button className="btn-group__item">All</button>
        </div>
      </nav>

      <MainLogic mainData={mainData} />
    </>
  );
};

export default Onlinebid;
