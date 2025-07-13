# Ability General logic
If a card is active, the power is active. No lingering abilities without an active card.
The only exception is board movement cards. They pop once and then done?

Every time a card is played, it is called a drop.

---
---
---

## Board-Effects
*Abilities that change placement, presence, abilities, or state of cards*

---

#### Ability: [Swap]
*Swap changes the placement of exactly two cards on the board*

    - Targeted Swap: The origin card swaps two target cards

**Text**

    - [] Swap positions with the opposite card
    - [] Swap positions with a random card in play
    - [] Swap positions randomly for every drop
    - [] If *CONDITIONs*, ""

---

#### Ability: [Invert]
*Invert swaps only a specific attribute/s with a target card*

**Text**
    
    - [] swap colors with the opposing card
    - [] swap value with the opposing card

---

#### Ability: [Mimic]
*Mimic replicates an entire target card without it becoming inactive*

**Text**

    - [] Mimics the opposing card
    - [] mimics a card of your choice

---

#### Ability: [Copy]
*Copy inherits a specific attribute/s from another card*

**Text**

    - [] Copy a target cards value as your own
    - [] Copy a target cards color as your own
    - [] Copy a target cards gender as your own

---

#### Ability: [Steal]
*Steal an attribute/s, removing it from the targeted card*

**Text**

    - [] Steal a target cards ability as your own
    - [] Steal a target cards color
    - [] Steal a target cards value

---

#### Ability: [Transform]
*Transform changes a target card into a basic card*

**Transform Cards**

    - Frog, Llama, Dragon...

**Text**

    - [] Transform a target card into another card

---

#### Ability: [Evolve]
*Evolve transforms the origin card into something else*

**Text**

    - [] when pts reduced to 0, will evolve into a dragon

---

#### Ability: [Banish]
*Banish forces a target card to become inactive*

**Text**

    - [] If a yellow card is in play, Banish the opposite card

---

#### Ability: [Imbue/Enchant]
*Imbue assigns a random ability to a target card*

**Text**

    - [] If *CONDITION* acquire a random ability


---
---
---



## Status Effects [Buffs]
*Abilities that apply a positive state to a card*

---

#### Ability: [Ascended]
*This status protects cards from ANY ability*

**Text**

    - [] Ascended. This card is not affected by ANY ability.
    - [] Apply Ascended to a target card.

---

#### Ability: [Shield/Protect]
*This status protects cards from any board effects, negative status or point deduction*

**Text**

    - [] Shielded.
    - [] Apply Shielded to a target card.

---

#### Ability: [Immune]
*This status protects cards from any status effect*

**Text**

    - [] Immune.
    - [] Apply Immune to a target card.

---

#### Ability: [Ward]
*This status protects cards from any negative point effects*

**Text**

    - [] Ward.
    - [] Apply Ward to a target card.

---

#### Ability: [Guard]
*This status will take damage or effects in place of an ally*

**Text**

    - [] Guards any neighboring card.
    - [] Guards a target *character*

---

#### Ability: [Fortify]
*This status reduces the poitns lost from negative effects*

**Text**

    - [] Fortify.
    - [] Apply Fortify to a target card.

---

#### Ability: [Tether]
*This status links two cards together, so that buffs/debuffs affect both*

**Text**

    - [] Tether this card to the opposite card.
    - [] Tether this card to any *character*.

---

#### Ability: [Invisible]
*This status does not allow for the card to be targeted by abilities*
What happens to the ability then?
**Text**

---

#### Ability: [Lucky]
*This status has a chance to ignore negative board and negative value effects*

**Text**

    - [] 50% chance to reduce negative effects

---

#### Ability: [Endure/Resilient]
*This status has a chance to remove negative status effects*

**Text**

    - [] 50% chance to remove negative status effects

---

## Status Effects [Debuffs]
*Abilities that apply a negative state to a card*

---

#### Ability: [Endure/Resilient]
*This status has a chance to remove negative status effects*

**Text**

    - [] 50% chance to remove negative status effects

---




    - Silence
        Blocks an ability from being used
    - Poison
        applies -x points over time, can stack
    - Burn
        applies -x points to target, applies -1 to cards next to target, can not stack
    - Cursed
        Any player who interacts with this card, inherits negative side effects
    - Sleep
        card becomes temporarily inactive, can be attacked, but not buffed
        gains +2 points upon waking
    - Freeze
        Locks in card, can not be buffed or nerfed.
    - Confused / Blind
        Randomly targets another card
    - Weakened
        Cuts points in half (rounded down)
    - Decay / drained
        starts strong but loses points each round
        loses points equal to friendly buffs
    - Exposed
        Takes Bonus damage from negative effects
    - Unstable
        Points/color/abilities? are randomly generated each time a card enters play. 


**Trigger Effects**
*Effects that trigger on play, status, damage, situation, or round based conditions*
    - Reveal
        Reveals opponent hand
    - Echo
        Repeats the last used ability from any card.
        Repeats any added bonus of another card
    - Mend / Heal
        Remove a selected card state
    - Leech
        Gain x points and drain x points from enemy card
    - Vengeance
        When damaged, deals damage back to attacker
    - Ripple / Flow
        Effects to this card spread to other cards, for good or bad
    - Spike
        Gains +pts if your total is lower than opponents
    - Focus
        if card remains unaffected, gain +pts
    - Inspired
        gains points after so many turns
        gains xpts per play
        gains +pts if other cards lose/gain points
    - Doom
        loses points after so many turns
        loses xpts per play
        loses +pts if other cards lose/gain pts
    - Absorb
        Gains points equal to lost points by other cards
    - Crowned
        Pt bonus if highest/lowest score on the board
    - Limit Break
        When points reach X, add/subtract/multiply/manipulate N pts.
    - Reckless
        +3 this turn, -2 the next
    - Siphon (stealing set pts / play?)
        converts the difference between this card and target card into bonus points
    - Unlimited / Extra
        Can have duplicate characters in play


**Exit/Inactive Effects**
*Effects that trigger when a card becomes inactive*
    - Last Stand
        Deals damage when card leaves play
        Applies a status effect on an enemy card/s
    - Legacy
        Grants pts or buffs when cards leave play
    - Final Form / Awaken
        Card comes back after becoming inactive
    - Reanimate
        If card becomes inactive, it can come back weaker
    - Whisper
        Reveals an opponents last card
    - Soul
        Transfers its points to another character
    - Rebirth
        Returns to players hand when it becomes inactive
    - Grudge
        the card that removed this one suffers a penalty
    - Sacrifice
        destroy this card or an ally for a buff


**Point Effects**
*Effects that affect point values and scoring*
    - Add
    - Subtract
    - Multiply
        Multiplies current card points with a maximum of the original toons points





Cool Ideas
Gains points for each inactive card
Gains points for damage dealt in game
gains points every time a card is burned

Decay Boost - Gains points for every point lost to decay
Poison Boost - Gains points for poison damage dealt




QUESTIONABLE ABILITIES

    - ?? Push/Pull
        Forces cards into different slots
