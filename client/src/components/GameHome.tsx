import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./GameHome.css";
import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Game 1",
    route: "/games/game-1",
    src: "https://th.bing.com/th/id/OIP.CXPhGOOmJdWVk4MrsltTlAHaEJ?pid=ImgDet&rs=1",
    targets: "Memory",
  },
  {
    name: "Game 2",
    route: "/games/bubble-game",
    src: "https://th.bing.com/th/id/OIP.ZpaC6NT1Rx3oJuQsHVZfqwHaEo?pid=ImgDet&rs=1",
    targets: "Memory & Focus",
  },
  {
    name: "Game 3",
    route: "/games/game-3",
    src: "https://th.bing.com/th/id/OIP.CXPhGOOmJdWVk4MrsltTlAHaEJ?pid=ImgDet&rs=1",
    targets: "IQ",
  },
];

interface GameInterface {
  name: string;
  route: string;
  src: string;
  targets: string;
}

export default function GameHome() {
  return (
    <>
      <Header />
      <GameSections />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header-container">
        <Grid
          container
          justifyContent={"space-between"}
          spacing={5}
          alignItems={"center"}
        >
          <Grid item className="header-text">
            <div className="heading">Cognitive Exercises</div>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              Progress Report
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

function GameSections() {
  useEffect(() => {
    const sectionElement = document.querySelectorAll(".section-games");
    sectionElement.forEach((eachSection) => {
      eachSection?.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (event.deltaY !== 0) {
          // window.scrollBy(0, event.deltaY);
          eachSection.scrollLeft += event.deltaY;
        }
      });
    });
  }, []);

  return (
    <>
      <div className="sections">
        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <div className="wraper">
            <i className="fa-solid fa-circle-arrow-left"></i>
            <div className="section-games">
              {games.map((element) => {
                return <EachGame game={element} />;
              })}
            </div>
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>

        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <div className="wraper">
            <i className="fa-solid fa-circle-arrow-left"></i>
            <div className="section-games">
              {games.map((element) => {
                return <EachGame game={element} />;
              })}
            </div>
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>

        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <div className="wraper">
            <i className="fa-solid fa-circle-arrow-left"></i>
            <div className="section-games">
              {games.map((element) => {
                return <EachGame game={element} />;
              })}
            </div>
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

function EachGame({ game }: { game: GameInterface }) {
  const navigate = useNavigate();
  return (
    <>
    <div className="capsules">
      <img src={game.src} alt={game.name} />
      <div className="on-image-text">
        <h2>{game.name}</h2>
        <p>{`Hi there!`}</p>
        <button onClick={()=>{
          navigate(game.route);
        }}>Play</button>
      </div>
    </div>
    </>
  );
}
