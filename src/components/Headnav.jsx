import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase-config";
export default function Navbar({ isScrolled }) {
  return (
    <Container className="flex a-center j-between">
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button onClick={() => signOut(firebaseAuth)}>Logout</button>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
  }
  padding:0 1rem;
  .logo{
      img{
          height:50px;
          width:150px;
      }
  }
  button{
      padding:0.5rem 1rem;
      background-color:#e50914;
      border:none;
      cursor:pointer;
      color:white;
      border-radius:0.2rem;
      font-weight:bolder;
      font-size:1.05rem;
      margin-right:20px;
  }
  }
`;
