import React from "react";
import Projects from "./Projects";

const data = [
  {
    title: "Methuselah",
    file: require("../Img/MethuselahSlam.gif").default,
    information:
      "Methuselah is a 10-week project I worked on together with other students from different disciplines. I worked as Lead Designer and was responsible for the overall design of the game. Spending most of my time getting the combat and feel of the game to be the best it could with the tools available. Although it has many flaws (to be expected from a game made in 10 weeks) I am still happy with what we achieved. ",
    link: "Methuselah, some design thoughts",
    href: (
      <>
        Itch.io:{" "}
        <a
          href="https://felltree-interactive.itch.io/methuselah"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Methuselah
        </a>
      </>
    ),
  },

  {
    title: "Aastra",
    file: require("../Img/astra.gif").default,
    information:
      "The first game I made. A platformer with low gravity, a double jump and some simple obstacles with the goal to make it as high as possible. I tried making an open map where the player can try out different paths with varying obstacles, some requiring precise maneuvering, others timing and a few with both. Despite the basic functionality of the  obstacles, the game provides a real challenge even for experienced platformer players. ",
    href: (
      <>
        Google drive:{" "}
        <a
          href="https://drive.google.com/file/d/1t1PiOq7WooLDD2WEnwM4h8R93yx3gA-l/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Astra
        </a>
      </>
    ),
  },
  {
    title: "Bouncing Ball",
    file: require("../Img/bouncingball.gif").default,
    information:
      "A challenging game where the player tries to maneuver both moving platforms and a bouncing ball at the same time. Using these simple mechanics I tried creating challenges based on different elements; timing, precision and a puzzle. It’s a short and simple game that could, with a few adjustments, work well on mobile.",
    href: (
      <>
        Google drive:{" "}
        <a
          href="https://drive.google.com/file/d/1eveHOMsnAGDD3V2LAl2RvD9iPa0ja_yk/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Bouncing Ball
        </a>
      </>
    ),
  },
  {
    title: "Behemoth Battles",
    file: require("../Img/BehemothBattle.png").default,
    information:
      "An attempt at turning a board game I designed into a computer game. A result of me wanting to explore some key mechanical differences in online and offline card games and a project I’m still working on from time to time. It is still at the stage where I am mostly translating the board game over to Unity, it is playable with the core mechanics implemented. Since it is made mainly for testing out mechanics, the balance is currently a bit off and it is lacking the visual clarity that the board game has. I am hoping to start testing with more transformative mechanics soon, such as cards being able to attack their own teammates for benefits and buffs.",
    link: "Behemoth Battles, some design thoughts",
  },

  {
    title: "Neon Shooter",
    file: require("../Img/neon.jpg").default,
    information:
      "A classic ball shooting game filled with odd effects. This game was made in order to study the effects that synergies have on game enjoyment. Three versions were created in order to compare the effect on players, one without synergies, one with premade ones and one where the player could choose what effects to combine. It is currently the only game I have made for mobile.",
  },
  {
    title: "Slice dude",
    file: require("../Img/SliceDude.gif").default,
    information:
      "Controls: WASD and Mouse SliceDude is the result of a short 12 hour game jam. I worked on the design, made quick prototypes and VFX that unfortunately didn't make it in. We tried making somewhat of a complete game in 12 hours and the result is an unpolished main mechanic. The goal we missed was making the slice feel satisfying to use. Solving this would start with making the hitbox larger, making it hit in front and around the player when the dash ends along with making the slice visually satisfying through effects and juice.",
    href: (
      <>
        Google drive:{" "}
        <a
          href="https://drive.google.com/file/d/1KOZSj7uhzDVGTy9OnfuXgvdAcKJzuIGB/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Slice Dude
        </a>
      </>
    ),
  },
  {
    title: "Unnamed platformer",
    file: require("../Img/unnamedgame.gif").default,
    information:
      "The very early stages of a 2d platformer I am working on together with one other person where I am doing the design and programming. The objective as of now is to make a solid proof of concept, something that starts with making the movement and attacks crisp, providing agency to the player.",
    href: (
      <>
        Git repo:{" "}
        <a
          href="https://github.com/LostmyCigar/Uncolored"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        >
          Unnamed platformer
        </a>
      </>
    ),
  },
];

class ProjectInfo extends React.Component {
  render() {
    return data.map((project, index) => (
      <Projects
        key={index}
        title={project.title}
        information={project.information}
        file={project.file}
        image={project.image}
        link={project.link}
        href={project.href}
        other={project.other}
      />
    ));
  }
}

export default ProjectInfo;
