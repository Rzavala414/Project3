import React, { Component } from "react";
import "./style.css";

export default class RulesNScoringPage extends Component {
  render() {
    return (
      <div>
          <h1 className="title"
          >Rules</h1>
        <div className="container">
          <p className="rules">
            Rules Main article: Rules of cribbage A game of cribbage being
            played. Play proceeds through a succession of "hands", each hand
            consisting of a "deal", "the play" and "the show". At any time
            during any of these stages, if a player reaches the target score
            (usually 121), play ends immediately with that player being the
            winner of the game. This can even happen during the deal, since the
            dealer scores if a jack is cut as the starter. Deal The players cut
            for first deal, and the person who cuts the lowest card deals. The
            dealer shuffles and deals five or six cards to each player,
            depending on the number of players. For two players, each is dealt
            six cards; for three or four players, each is dealt five cards. In
            the case of three players, a single card is dealt face down in the
            centre of the table to start the crib. Once the cards have been
            dealt, each player chooses four cards to retain, then discards the
            other one or two face-down to form the "crib" (also called the box),
            which will be used later by the dealer.[7] At this point, each
            player's hand and the crib will contain exactly four cards. The
            player on the dealer's left cuts the remaining deck, and the dealer
            reveals the top card, called the "starter" or the "cut".[8] If this
            card is a jack, the dealer scores two points for "his heels" or "his
            nibs". Play Starting with the player on the dealer's left, each
            player in turn lays one card face up on the table in front of them,
            stating the count—that is, the cumulative value of the cards that
            have been laid (for example, the first player lays a five and says
            "five", the next lays a six and says "eleven", and so on)—without
            the count going above 31. The cards are not laid in the centre of
            the table as, at the end of the "play", each player needs to pick up
            the cards they have laid. Players score points during the play as
            follows: 15 – For causing the count to reach exactly 15 a player
            scores two points, then play continues. Pair – Completing a pair
            (two of a kind) scores two points. Three of a kind is the same as
            three different pairs, or 6 points. Four of a kind is 6 different
            pairs, or 12 points. A run of three or more cards (consecutively
            played, but not necessarily in order) scores the number of cards in
            the run. If a player cannot play without causing the count to exceed
            31, he calls "Go". Continuing with the player on their left, the
            other player(s) continue(s) the play until no one can play without
            the count exceeding 31. A player is obliged to play a card unless
            there is no card in their hand that can be played without the count
            exceeding 31 (one cannot voluntarily pass). Once 31 is reached or no
            one is able to play, the player who played the last card scores one
            point if the count is still under 31 and two if it is exactly 31.
            The count is then reset to zero and those players with cards
            remaining in their hands repeat the process starting with the player
            to the left of the player who played the last card. When all players
            have played all of their cards the game proceeds to the "show".
            Players choose the order in which to lay their cards in order to
            maximize their scores; experienced players refer to this as either
            good or poor "pegging" or "pegsmanship". If one player reaches the
            target (usually 61 or 121), the game ends immediately and that
            player wins. When the scores are level during a game, the players'
            pegs will be side by side, and it is thought that this gave rise to
            the phrase "level pegging".[9] Show Once the play is complete, each
            player in turn, starting with the player on the left of the dealer,
            displays their own hand on the table and scores points based on its
            content in conjunction with the starter card. Points are scored for:
            Combinations of cards totalling fifteen Runs Pairs (Multiple pairs
            are scored pair by pair but may be referred to as three or four of a
            kind.) Flush (A four-card flush scores four and cannot include the
            starter card; a five-card flush scores five.) Having a jack of the
            same suit as the starter card ("one for his nob [or nobs or nibs]",
            sometimes called the "right" jack) The dealer scores their hand last
            and then turns the cards in the crib face up. These cards are then
            scored by the dealer as an additional hand, also in conjunction with
            the starter card. Unlike the dealer's own hand, the crib cannot
            score a four-card flush, but it can score a five-card flush with the
            starter. All scores from 0 to 29 are possible, with the exception of
            19, 25, 26 and 27.[10] Players may refer colloquially to a hand
            scoring zero points as a “nineteen hand”.[11] Muggins Muggins (also
            known as cut-throat) is a commonly used but optional rule, which
            must be announced before game play begins. If a player fails to
            claim their full score on any turn, the opponent may call out
            "Muggins" and peg any points overlooked by the player.[12] Rules
            sourced from https://en.wikipedia.org/wiki/Cribbage
          </p>
        </div>
      </div>
    );
  }
}
