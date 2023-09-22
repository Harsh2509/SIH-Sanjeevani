//import React from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Options />
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <Grid
        container
        justifyContent={"space-between"}
        spacing={5}
        alignItems={"center"}
      >
        <Grid item className="header-text">
          <div className="heading">Welcome to Sanjeevani.</div>
          <div className="sub-heading">
            Here at Sanjeevani, we help your child live a healthier and fuller
            life.
          </div>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" onClick={()=>{
            navigate('/details');
          }}>
            About child
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

function Options() {
  return (
    <div className="options-container">
      <div className="sub-heading1">Our most <span>successful</span> products</div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={4}>
          <Capsule
            img="/public/cognitive.jpg"
            title="Coginitive Exercises"
            description="
            This section offers thrilling educational games aimed at enriching your child's knowledge and skills."
            route="/games"
          />
        </Grid>
        <Grid item sm={12} md={12} lg={4}>
          <Capsule
            img="/public/eeg.png"
            title="EEG Tracking"
            description="Here, you can monitor cerebral signals through the use of an EEG device."
            route="/"
          />
        </Grid>
        <Grid item sm={12} md={12} lg={4}>
          <Capsule
            img="/public/extra.jpg"
            title="Bloging Area"
            description="Here are a selection of blogs authored by mental health professionals who specialize in promoting emotional well-being."
            route="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}

interface CapsuleProps {
  img: string;
  title: string;
  description: string;
  route: string;
}

function Capsule({ img, title, description, route }: CapsuleProps) {
  const navigate = useNavigate();
  return (
    <div className="capsule">
      <div className="img">
      <img src={img} alt="" className="options-image" />
      </div>
      <div className="on-image-text1">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          onClick={() => {
            navigate(route);
          }}
        >
          Click to Proceed
        </button>
      </div>
    </div>
  );
}
