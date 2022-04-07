import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
      </div>
      <Link to="/">
        <FaBeer size={30} /> Let's Go Home!!
      </Link>
    </Card>
  );
}

export default About;
