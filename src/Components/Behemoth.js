import React from "react";
import img from "../Img/BehemothBattle.png";
import setupImg from "../Img/setup.png";
import setupImg2 from "../Img/setup2.png";
import turn from "../Img/turn.png";
import turn2 from "../Img/turn2.png";
import turn3 from "../Img/turn3.png";
import card from "../Img/card.png";
import cardex from "../Img/cardex.png";

export const Behemoth = () => {
  return (
    <div className="projectWrapper">
      <h1>Behemoth Battles</h1>
      <div className="projectContainer">
        <p>
          The goal is to make a game filled with synergies. Making a game where
          most of the mechanics are multiplicative and work well with each
          other. I decided to use a board game that I had already made so I
          could fully focus on the cards and their mechanics and enhance the
          gameplay through them. While it is a work in progress the balance is
          still way off. Behemoth Battles is a translation of a board game where
          the numbers and mechanics are a lot more grounded. To be able to bring
          in a lot of multiplicative mechanics I started with doubling the Hp of
          every monster card, hoping to avoid game states where one player
          snowballs too fast, making the outcome decided and predictable for too
          long. Unfortunately this has made the games start way too slow
          instead. The issue is that the core mechanics doesn’t support a game
          that wants to build up and evolve during a single session, they are
          more fitting of a game that stays similar the way throughout, the way
          the board game does. That being said, I don't think that I’ll change
          or even tune the core gameplay to align with the goal. This game is
          more of an experiment to see how I can create mechanics that lets
          players be creative, it doesn’t need to be good in any other area.
        </p>
        <br />
        <img className="behemothImg" src={img} alt="Game play" />
      </div>
      <div className="rulesWrapper">
        <h1>Behemoth Battles: Board Game Rules </h1>
        <p>
          Recruit, mutate and then attack with your behemoths. <br />
          <br />
          Like the evil genius you are, you have created a weapon so powerful
          that it guarantees world domination! The Gigantifier! Or, I mean, if
          it wasn’t for the fact that your, almost as evil, long time rival
          somehow managed to invent the same thing… To find out which one of you
          is most deserving of world domination you have decided to duel it out
          in the middle of nowhere. May the best supervillain win!
        </p>
        <h3>Goal of the game</h3>
        <p>
          The goal is to prove that YOU’RE the one deserving the title “Evil
          Overlord Supreme”. The game ends when one player no longer has any
          behemoths in play.
        </p>
        <h3>Setting up</h3>
        <p>Start with setting up the table the following way: </p>
        <img src={setupImg} alt="setup of the boardgame" />
        <ol>
          <li>Choose the player starting.</li>
          <li>
            The player going second then starts with choosing which one of the
            three face-up behemoths they want to start with.
          </li>
          <li>The starting player then chooses one of the remaining two.</li>
          <li>
            Turn another behemoth card up so that there are two upwards facing
            cards.
          </li>
          <li>The starting player may then begin their first turn.</li>
        </ol>
        <img src={setupImg2} alt="setup of the boardgame" />
        <h3>Turn overview</h3>
        <ol>
          <li>Choose the player starting.</li>
          <li>
            Eventual weapons are played before doing anything else during your
            turn.
          </li>
          <li>
            You can, during any time while it's your turn, recruit behemoths,
            buy Mutation Cards and Weapons as long as you have enough currency
            for it.
          </li>
          <li>
            The only required action during a turn is choosing an action from
            the Actionboard.
          </li>
        </ol>
        <h3>The Actionboard</h3>
        <p>The Actionboard consists of three actions:</p>
        <ol>
          <li>
            Mutation Points
            <br /> -Gain Mutation points
          </li>
          <li>
            Recruitment points
            <br /> -Gain Recruitment points
          </li>
          <li>
            Attack
            <br /> -Attack enemy behemoths
          </li>
        </ol>
        <h4>On every action there are Power tokens.</h4>
        <p>
          Power tokens decide how powerful each of the actions are. Any time an
          action is chosen the players must remove all Power tokens from that
          action and place 1 Power token on the actions not chosen during that
          turn. <br />
          <br />
          Example:
        </p>
        <img src={turn} alt="Exapmle on actionboard" />
        <p className="imgText">
          There are 2 Power tokens on Attack, 1 on Mutation points and 0 on
          Recruitment points.
        </p>
        <p>Player 1 selects Attack.</p>
        <img src={turn2} alt="Exapmle on actionboard" />
        <p className="imgText">
          Now that it is Player 2s turn, all the Power tokens are removed from
          Attack while 1 Power token has been added to both Recruitment points
          and Mutation points.
        </p>
        <p>Player 2 selects Recruitment points</p>
        <img src={turn3} alt="Exapmle on actionboard" />
        <p className="imgText">
          Recruitment points therefore have 0 Power tokens during Player 1s
          turn. Attack and Mutations points have gained +1 Power token.
        </p>
        <br />
        <p>For every Power token placed on an action it gains extra power.</p>
        <ol>
          <li>
            Mutation Points
            <br /> -Gain +1 Mutation point for every Power token.
            <p>
              Example: There are 2 Power tokens on the Mutation points action
              when it is used: The player receives 1 + 2 Mutation points.
            </p>
          </li>
          <li>
            Recruitment points
            <br /> -Gain +1 Recruitment point for every Power token
          </li>
          <li>
            Attack
            <br /> -Each power token grants the player the ability to attack
            with one additional behemoth. If the player using this action is
            missing sufficient behemoths to fully utilize this it; the player is
            granted +1 damage per additional Power token. Example: There are 2
            Power tokens on the Attack action and the player using the action
            has 2 behemoths. The Action gives: (attack action) 1 + 2 (Power
            tokens ) attacks. Since the player only has 2 behemoths in play
            there is one redundant attack left. The player can therefore attack
            with both their behemoths and one of the attacks deals +1 damage.
            The player can choose which one of the attacks that deals extra
            damage. The same behemoth may not attack more than once per turn.
          </li>
        </ol>
        <p>
          When attacking, the defender does not deal damage back to the attacker
          unless it specified that it can
        </p>
        <h3>Mutation Cards and Card slots</h3>
        <img src={card} alt="Mutationcard" />
        <p>
          Mutation cards are bought using Mutation points. The cost is seen in
          the top-right corner. When a card has been bought, a new one takes its
          place in the shop from the deck. There should always be 3 Mutation
          cards available for players to purchase.
        </p>
        <p>
          A player can buy Mutation cards during any time as long as it is still
          their turn. When a mutation card is bought it is placed on an empty
          card slot. If the player has no card slot available they do not have
          the ability to buy Mutation Cards. Card slots can be found at the
          bottom of Behemoth cards
        </p>
        <img src={cardex} alt="Exemple on mutationcard equiped on behemoth" />
        <p className="imgText">This behemoth has 1 available card slot. </p>
        <h3>Behemoths, recruitment and Weapons</h3>
        <p>
          Behemoths always start with 20 Hp and 2 Atk unless something else is
          specified on the card.
        </p>
        <p>
          New behemoths can be recruited to fight by your side using Recruitment
          points. A player can recruit behemoths any time as long as it is their
          turn.
        </p>
        <p>
          The cost for recruiting behemoths is: 4 for the first behemoth. Then 5
          and 6. The cost is based on how many behemoths the player has
          previously recruited and not on how many behemoths they have in active
          play.
        </p>
        <p>
          After 3 behemoths have been recruited in addition to the first one,
          the player can no longer recruit more. Recruitment points are then
          instead used for buying weapons.
        </p>
        <h4>Weapons</h4>
        <p>
          After a player has recruited 3 behemoths they can no longer recruit
          more. Recruitment points are then used for buying weapons.
        </p>
        <p>
          Weapons are used at the beginning of a player's turn and can therefore
          not be bought and used the same turn.
        </p>
        <p>Weapons can be used no matter what action the player selects. </p>
        <h3>When a behemoths HP reaches 0</h3>
        <p>
          When a behemoths Hp reaches 0 the card is placed at the bottom of the
          Behemoth card-pile.
        </p>
        <p>
          Any Mutation cards the behemoth had are placed to the side of the
          player. These cards can be brought back into the game for 2 Mutation
          points each (the normal cost is irrelevant). Only the player who lost
          the cards can buy them back.
        </p>
        <p>When one player no longer has any behemoths the game ends.</p>
        <p>GLHF</p>
      </div>
    </div>
  );
};

export default Behemoth;
