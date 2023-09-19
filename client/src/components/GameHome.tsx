import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./GameHome.css";

const games = [
  {
    name: "Game 1",
    route: "/games/game-1",
    src: "https://th.bing.com/th/id/OIP.CXPhGOOmJdWVk4MrsltTlAHaEJ?pid=ImgDet&rs=1",
  },
  {
    name: "Game 2",
    route: "/games/game-2",
    src: "https://th.bing.com/th/id/OIP.CXPhGOOmJdWVk4MrsltTlAHaEJ?pid=ImgDet&rs=1",
  },
  {
    name: "Game 3",
    route: "/games/game-3",
    src: "https://th.bing.com/th/id/OIP.CXPhGOOmJdWVk4MrsltTlAHaEJ?pid=ImgDet&rs=1",
  },
];

interface GameInterface {
  name: string;
  route: string;
  src: string;
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
    const sectionElement = document.querySelector(".section-games");
    sectionElement?.addEventListener("wheel", (event) => {
      event.preventDefault();
      if (event.deltaY !== 0) {
        window.scrollBy(0, event.deltaY);
      } else {
        // If not vertical scroll, perform horizontal scroll
        sectionElement.scrollLeft += event.deltaX;
      }
    });
  }, []);

  return (
    <>
      <div className="sections">
        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <i className="fa-solid fa-circle-arrow-left"></i>
          <div className="section-games">
            {games.map((element) => {
              return <EachSection game={element} />;
            })}
          </div>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </div>

        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <i className="fa-solid fa-circle-arrow-left"></i>
          <div className="section-games">
            {games.map((element) => {
              return <EachSection game={element} />;
            })}
          </div>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </div>

        <div className="section">
          <h2>Recommeded by your doctor</h2>
          <div className="wrap">
            <i className="fa-solid fa-circle-arrow-left"></i>
            <div className="section-games">
              {games.map((element) => {
                return <EachSection game={element} />;
              })}
            </div>
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

function EachSection({ game }: { game: GameInterface }) {
  return (
    <>
      <img src={game.src} alt={game.name} />
    </>
  );
}
