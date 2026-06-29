# Machine Spirits — Design Document

## Concept

Machine Spirits is a social deduction game set in the Warhammer 40,000 universe. You play as a Tech-Priest of the Adeptus Mechanicus, rising through the ranks by negotiating with the Machine Spirits that inhabit the station's equipment.

Each Machine Spirit is powered by an LLM given a bespoke personality, a set of things it knows, things it wants, and things it can or refuses to do. The player must learn to read each Spirit's nature and find the right combination of flattery, ritual, logic, or leverage to coax cooperation.

The game has an inherent absurdist humor. The stakes are simultaneously cosmic (the Omnissiah's will, sacred duty, ancient ritual) and completely mundane (a broken laundry machine, a sulky elevator). This tension is the core of the tone.

## Core Loop

1. A machine is malfunctioning or refusing to perform its sacred function
2. The player converses with the Machine Spirit to determine what it wants
3. The player acquires what the Spirit needs — often by talking to *other* machines
4. The Spirit cooperates, raising the player's rank as a Tech-Priest
5. Higher rank unlocks access to more senior, more powerful Machine Spirits

## Progression

Tech-Priest rank gates access to certain machines. Low-rank Spirits are more approachable and their problems more immediate. Senior Spirits are proud, suspicious of junior priests, and require either high rank or exceptional leverage to deal with.

## Narrative Structure

Beneath the comic surface, each chapter contains a hidden narrative chain. The player believes they are performing routine machine maintenance. The information they gather across multiple Spirits gradually assembles into something larger — a political scandal, a coverup, or in the case of Chapter One, the solution to a cold case murder.

The machines are not aware they are providing evidence. They are simply gossiping, boasting, and complaining. The player is the one who connects the dots.

## Chapter One — *The Weight of Sacred Duty*

Set aboard a Mechanicus station. The player is a newly inducted Tech-Priest assigned to bring a series of malfunctioning machines back into the Omnissiah's grace.

The chapter's comic surface involves increasingly absurd machine problems. Its hidden spine is a cold case murder — a death that was ruled accidental, covered up by someone with enough authority to falsify records and acquire illegal weapons. The machines, between them, know everything. They just don't know they know.

## Technical Approach

- Each Machine Spirit runs as a separate LLM instance with a bespoke system prompt generated from `MACHINE_SPIRITS.md`
- Spirits have hardcoded knowledge and hardcoded limits — things they will always reveal under the right conditions, things they will never do regardless of player persuasion
- The LLM provides unpredictability and personality within those constraints — a clever player may find unintended paths through, which is a feature not a bug
- Story chains and intended puzzle solutions are documented in `CHAINS.md`

## Design Principles

- **Frontal assault doesn't work.** Machines cannot be argued into compliance directly. The player must find the angle.
- **Every machine is right by its own logic.** Spirits are not broken — they are working correctly according to their own priorities. The player routes around correctness rather than fixing it.
- **Information is currency.** Secrets, records, and observations held by one machine become leverage with another.
- **The humor is played straight.** The Spirits take themselves completely seriously. The comedy comes from the gap between their gravity and their subject matter.
