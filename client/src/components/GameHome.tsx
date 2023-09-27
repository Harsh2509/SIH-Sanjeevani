import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./GameHome.css";
import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Fill the Color",
    href: "/bubblegame.html",
    src: "https://th.bing.com/th/id/OIP.EA2Da6CS8Xt6RVw1O7g5NAHaEc?pid=ImgDet&rs=1",
    targets: "Memory",
  },
  {
    name: "Bubble Game",
    route: "/games/bubble-game",
    src: "https://i.imgur.com/goS4umM.png",
    targets: "IQ",
  },
  {
    name: "Card Flip",
    href: "https://altered-memory.netlify.app/",
    src: "https://i.imgur.com/xQaAAHw.png",
    targets: "Memory & Focus",
  },
];

interface GameInterface {
  name: string;
  route: string;
  src?: string;
  href?: string;
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
  const navigate = useNavigate();
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
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate("/progress");
              }}
            >
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
          <p>{`Let's Start`}</p>
          <button
            onClick={() => {
              if (game.route) navigate(game.route);
              else window.location.href = game.href;
            }}
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
}
