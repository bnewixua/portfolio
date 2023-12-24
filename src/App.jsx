import "./index.css";
import { Snow } from "react-snow-particle";
import React from "react";
// import { Snow } from 'react-loading-dot'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function App() {
  return (
    <main>
          <div className="navbar">
         <h2>bnewixua</h2>
        <ul>
            <li><a href="https://github.com/bnewixua">Github</a></li>
            <li><a href="https://instagram.com/bnewixua0">İnstagram</a></li>
        </ul>
        <button className="hrn">Discord</button>
    </div>
    <div className="snowfall-area">
      <Snow/>
    </div>
       <div className="main">
        <h4>Hi, I Am <span>bnewixua</span> 👋</h4>
        <p className="title">Front End And <span>Web Developer</span></p>
        <p className="subtitle">I am a small <span>discord developer</span> and I improve myself on such platforms.</p>
    </div>

    <section id="languages">
    <div class="container">
      <div class="row">
        <h1 class="section__title">This is my <span>technology stack</span></h1>
        <div class="language__list">
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="Html Logo" class="language__img" />
            </figure>
            <span class="language__name">HTML</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo"
                class="language__img" />
            </figure>
            <span class="language__name">CSS</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo"
                class="language__img" />
            </figure>
            <span class="language__name">JavaScript</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                alt="TypeScript Logo" class="language__img" />
            </figure>
            <span class="language__name">TypeScript</span>
          </div>  
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React Logo"
                class="language__img" />
            </figure>
            <span class="language__name">React</span>
          </div>
        </div>
      </div>
    </div>
  </section>

<div className="about">
  <h4>Project</h4>
  <p>Projects that I have previously developed, I do not have any active projects right now.</p>
</div>

<div className="acord">
  <div>
    <p>It is a discord bot that includes advanced logs.<br/> The bot is made in a useful and professional way.<br/> <span>But the project was closed.</span></p>
  </div>
</div>

            <footer class="container">

            <div class="cols">
            <div class="about-col">
                <h3>bnewixua</h3>
            </div>

            <div class="links-col">
                <h4>Social Media</h4>
                <a href="https://instagram.com/bnewixua0">Instagram</a>
                <a href="https://www.tiktok.com/@bnewixua0">Tiktok</a>
                <a href="#">Discord</a>
                <a href="https://www.youtube.com/@bnewixua0">Youtube</a>
                <a href="https://github.com/bnewixua">Github</a>
            </div>
            </div>

<div class="copyright">
    <p>Copyright © 2023-2024 <span>bnewixua</span></p>
</div>

</footer>

    </main>
  );
}