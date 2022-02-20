import React from "react";
import hook from "../Img/hook.png";

export const Methuselah = () => {
  return (
    <div className="projectWrapper">
      <h1>Methuselah</h1>
      <div className="projectContainer">
        <h2>Base Combat</h2>
        <p>
          The main point with the combat design in Methuselah was to nail the
          fantasy of an Ent crushing enemies, akin to Lord of the Rings Battle
          of Isengard, without making the game too much of a “click in this
          direction and enemies die”-type of game. To achieve this I tried
          basing the combat on displacement. Letting the player feel powerful by
          sending enemies flying rather than killing them in one hit. This let
          us build the combat on timing. Methuselah uses slow and heavy attacks
          that interrupt enemies and knocks them away, the player has to use
          this to their advantage and keep from being swarmed by enemies.
        </p>
      </div>
      <div className="projectContainer">
        <h2>What I would have done differently</h2>
        <p>
          Being a game produced in a short amount of time, Methuselah has its
          fair amount of flaws. The hook on space is one example. We wanted to
          avoid giving the player too much mobility as it doesn’t go well with
          the Ent fantasy, but we also wanted to give the player a way to deal
          with ranged enemies. A hook seemed like the best option, Methuselah
          sends vines from its arms and grabs enemies within range to bring them
          close enough for its other abilities. Unfortunately, due to close
          deadlines and the fact that a hook couldn’t be made with the same
          tools as the rest of the attacks, the result was rushed and quite far
          from the initial design. The better call would have been to scrap the
          hook altogether since it currently takes away more from the experience
          than it gives by enabling the “stand at a distance and hook one enemy
          at the time” strategy. Removing it would protect the players from
          themselves. Methuselah has more design flaws than just the hook, such
          as the upgrades between rooms being underwhelming both in feel and
          function and some narrow rooms that makes the player push through
          choke points instead of fighting in the open.
        </p>
      </div>
      <div>
        <p>First quick sketches for the hook</p>
        <img src={hook} alt="prototype of the hook ability" />
      </div>
    </div>
  );
};

export default Methuselah;
