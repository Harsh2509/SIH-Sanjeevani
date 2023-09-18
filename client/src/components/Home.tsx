//import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import "./Home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <Options/>
    </>
  )
}

function Header(){
    return (
      <div className='header-container'>
          <Grid container justifyContent={'space-between'} spacing={5} alignItems={'center'}>
              <Grid item className='header-text'>
                  <div className='heading'>Welcome to Sanjeevani.</div>
                  <div className="sub-heading">Here at Sanjeevani, we help your child live a healthier and fuller life.</div>
              </Grid>
              <Grid item> 
                <Button variant="contained" size='large'>Use for free</Button>
              </Grid>
          </Grid>
        </div>
    )
}

function Options(){
  return (
    <div className='options-container'>
      <div className="sub-heading1">Our most successful products</div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={4}> 
          <Capsule img="/public/cognitive.jpg" title="Coginitive Exercises" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore."/>
        </Grid>
        <Grid item sm={12} md={12} lg={4}>
          <Capsule img="/public/eeg.png" title="EEG Tracking" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore."/>
        </Grid>
        <Grid item sm={12} md={12} lg={4}>
          <Capsule img="/public/extra.jpg" title="Cognitive Test" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore."/>
        </Grid>
      </Grid>
    </div>
  )
}

interface CapsuleProps {
  img: string;
  title: string;
  description: string;
}

function Capsule({img, title, description}: CapsuleProps){
  return (
    <div className="capsule">
      <img src={img} alt="" className='options-image'/>
        <div className="on-image-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <button>Click to Proceed</button>
        </div>
    </div>
  )
}