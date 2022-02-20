import React from "react";
import Projects from "./Projects";

const data = [
  {
    title: "Methuselah",
    file: require("../Img/MethuselahSlam.gif").default,
    information:
      "Methuselah is a 10-week project I worked on together with other students from different disciplines. I worked as Lead Designer and was responsible for the overall design of the game. Spending most of my time getting the combat and feel of the game to be the best it could with the tools available. Although it has many flaws (to be expected from a game made in 10 weeks) I am still happy with what we achieved. ",
    link: "Methuselah, some design thoughts",
    href: "https://felltree-interactive.itch.io/methuselah",
  },
  {
    title: "Behemoth Battles",
    file: require("../Img/BehemothBattle.png").default,
    information:
      "An attempt at turning a board game I designed into a computer game. A result of me wanting to explore some key mechanical differences in online and offline card games and a project I’m still working on from time to time. It is still at the stage where I am mostly translating the board game over to Unity, it is playable with the core mechanics implemented. Since it is made mainly for testing out mechanics, the balance is currently a bit off and it is lacking the visual clarity that the board game has. I am hoping to start testing with more transformative mechanics soon, such as cards being able to attack their own teammates for benefits and buffs.",
    link: "Behemoth Battles, some design thoughts",
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
      />
    ));
  }
}

export default ProjectInfo;
