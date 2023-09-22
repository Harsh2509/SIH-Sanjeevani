import React, { useEffect } from "react";
import "./game.css";
export default function Game1() {
  useEffect(() => {
    let score = 0;
    let time = 60;
    let hitrn = 0;

    function increaseScore() {
      score += 10;
      const scoreElement = document.querySelector("#scoreval");
      if (scoreElement !== null) scoreElement.textContent = String(score);
    }
    function MakeBubble() {
      let clutter = "";

      for (let i = 1; i < 125; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
      }
      const pbtmElement = document.querySelector("#pbtm");
      if (pbtmElement !== null) pbtmElement.innerHTML = clutter;
    }

    function MakeHit() {
      hitrn = Math.floor(Math.random() * 10);
      const hitbtnElement = document.querySelector("#hitbtn");
      if (hitbtnElement !== null) hitbtnElement.textContent = String(hitrn);
    }

    function runTimer() {
      const timeEnd = setInterval(function () {
        if (time > 0) {
          time--;
          const timeIntervalElement = document.querySelector("#timeInterval");
          if (timeIntervalElement !== null)
            timeIntervalElement.innerHTML = String(time);
        } else {
          clearInterval(timeEnd);
          const pbtmElement = document.querySelector("#pbtm");
          if (pbtmElement !== null)
            pbtmElement.innerHTML = `<h1>Your Score is ${score}</h1>`;
        }
      }, 1000);
    }

    const pbtmElement = document.querySelector("#pbtm");
    if (pbtmElement !== null)
      pbtmElement.addEventListener("click", function (dets) {
        const clickedElement = dets.target as HTMLElement;
        const clickedTextContent = clickedElement.textContent;
        const clickednum = Number(clickedTextContent);
        if (hitrn == clickednum) {
          increaseScore();
          MakeHit();
          MakeBubble();
        }
      });

    MakeHit();
    runTimer();
    MakeBubble();
  }, []);

  return (
    <>
      <div id="main">
        <div id="panel">
          <div id="ptop">
            <div className="elem">
              <h2>Hit</h2>
              <div id="hitbtn" className="box">
                0
              </div>
            </div>
            <div className="elem">
              <h2>Timer</h2>
              <div id="timeInterval" className="box">
                60
              </div>
            </div>
            <div className="elem">
              <h2>Score</h2>
              <div id="scoreval" className="box">
                0
              </div>
            </div>
          </div>
          <div id="pbtm"></div>
        </div>
      </div>
    </>
  );
}
