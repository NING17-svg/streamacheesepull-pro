import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Home page FAQs
  {
    id: "is-still-online",
    question: "Is Stream A Cheese Pull! still online on Roblox?",
    answer:
      "Yes. As of 2026-09-07, the official Roblox game page shows the Universe accepting players, with 9,570 in the live lobby and a server cap of six players per place.",
    pageIds: ["home", "streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "who-made-stream-a-cheese-pull",
    question: "Who made Stream A Cheese Pull!?",
    answer:
      "Cheesy Situation, a verified Roblox group with group id 1013100488, is the creator of record and the only publisher named on the official game page description.",
    pageIds: ["home", "streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-codes-active",
    question: "How many codes work right now?",
    answer:
      "Three codes are currently active and were last confirmed on 2026-09-07: FirstCodeEver (Blue Cheese Crate), SPEEDIE (Fast Worker), and Kitty (Cat pet). Full redemption steps are on the codes page.",
    pageIds: ["home", "streamacheesepull-codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-redeem-codes",
    question: "Where do I redeem codes?",
    answer:
      "Codes are redeemed inside the in-game Store on Stream A Cheese Pull!, not on any external site. The walkthrough is documented step by step on the codes page.",
    pageIds: ["home", "streamacheesepull-codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Game overview FAQs
  {
    id: "what-is-stream-a-cheese-pull-roblox",
    question: "What is Stream A Cheese Pull! on Roblox?",
    answer:
      "Stream A Cheese Pull! is a Roblox tycoon Universe (id 10628907188) published by the verified group Cheesy Situation, with a four-step core loop described on the official game page.",
    pageIds: ["streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-old-is-stream-a-cheese-pull",
    question: "How old is Stream A Cheese Pull!?",
    answer:
      "The Stream A Cheese Pull! Roblox Universe was created on 2026-08-04 and last updated on 2026-09-06, so it is roughly one month old as of the 2026-09-07 capture.",
    pageIds: ["streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-players-per-server",
    question: "How many players can join a server?",
    answer:
      "Each server on Stream A Cheese Pull! caps at six concurrent players, which matches the Simulation / Tycoon genre tag on the Roblox Games API entry.",
    pageIds: ["streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-active-codes",
    question: "Where do I find active codes?",
    answer:
      "Active codes are listed on the codes page, with the in-game Store path and the dated media snapshots behind each code and reward.",
    pageIds: ["streamacheesepull-game-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Codes page FAQs
  {
    id: "firstcodeever-reward",
    question: "What does FirstCodeEver give me?",
    answer:
      "FirstCodeEver grants one Blue Cheese Crate in your in-game inventory, as written on the official Roblox game page description.",
    pageIds: ["streamacheesepull-codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-codes-expire",
    question: "Do codes expire?",
    answer:
      "Yes, codes can expire without notice. The status table on this page is re-checked against the official description and the dated media snapshots on each visit, and any code that drops off those sources is removed from the active list.",
    pageIds: ["streamacheesepull-codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Beginner guide FAQs
  {
    id: "need-robux-to-progress",
    question: "Do I need Robux to make progress in Stream A Cheese Pull?",
    answer:
      "No. The four-step core loop, the FirstCodeEver code, the like-plus-group bonus, and the studio expansion tier are all cash-driven and do not require Robux. The fastest free path is the active code, the like-plus-group bonus, and the early studio upgrades.",
    pageIds: ["streamacheesepull-beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-redeem-codes-beginner",
    question: "Where do I redeem codes in Stream A Cheese Pull?",
    answer:
      "Codes redeem inside the in-game Store, not on the Roblox website. Open the Store, paste the code into the redemption box, and the reward lands in your inventory. The full active-code table is on the codes page.",
    pageIds: ["streamacheesepull-beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "session-length",
    question: "How long is one Stream A Cheese Pull session?",
    answer:
      "Most first sessions are short - 15 to 30 minutes is enough to clear the tutorial, redeem the active code, and run a few rounds of the core loop. Late-game sessions stretch longer as the studio footprint grows and the upgrade tier deepens.",
    pageIds: ["streamacheesepull-beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-rebirth-official",
    question: "Is rebirth an official mechanic?",
    answer:
      "The term rebirth is community vocabulary from the fan-built companion wiki. The official Roblox game page, the Cheesy Situation group page, and the public Discord have not confirmed a rebirth mechanic as of 2026-09-07. Treat the fan wiki's rebirth description as a community starting point.",
    pageIds: ["streamacheesepull-beginner-guide", "streamacheesepull-rebirth-mystery-boxes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "play-with-friends",
    question: "Can I play Stream A Cheese Pull with friends?",
    answer:
      "Yes. The Universe maxPlayers is 6, so a full lobby is six players. Coordinate by joining a private server or by queuing into the same public server so the cash engine and the decoration slots line up across saves.",
    pageIds: ["streamacheesepull-beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "safe-for-younger-players",
    question: "Is the game safe for younger players?",
    answer:
      "The Roblox client offers parental controls and account-level privacy settings, and Stream A Cheese Pull itself is a Simulation / Tycoon rated for the Roblox platform. The main safety concern is third-party script executors advertised outside the official game page - avoid any stream a cheese pull script download, and use only the official Roblox client to launch the game.",
    pageIds: ["streamacheesepull-beginner-guide"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Rebirth & mystery boxes FAQs
  {
    id: "is-rebirth-confirmed",
    question: "Is rebirth in Stream A Cheese Pull confirmed by the developer?",
    answer:
      "Not as of 2026-09-07. The official Roblox game page, the Cheesy Situation group page, and the Roblox Games API multi-get do not mention a rebirth mechanic. The term comes from the fan-built companion wiki and is treated here as community vocabulary.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-carries-over-rebirth",
    question: "What carries over after a Stream A Cheese Pull rebirth?",
    answer:
      "The fan-built companion wiki lists a carried-over progression bonus, but the specific carry-over list is not on any official channel as of 2026-09-07. Treat the carry-over list as a fan-reported starting point and verify any item you expect to keep against the active code list.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-mystery-boxes-drop",
    question: "Where do mystery boxes drop in Stream A Cheese Pull?",
    answer:
      "The fan wiki describes mystery boxes as random reward drops, but the drop location and trigger are not on the official Roblox page as of 2026-09-07. Treat the drop as a community-reported side-channel and not a developer-guaranteed mechanic.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "firstcodeever-related-to-rebirth",
    question: "Is the FirstCodeEver code related to rebirth?",
    answer:
      "No. FirstCodeEver is the only developer-confirmed economy signal on the official Roblox page as of 2026-09-07, and it grants 1 Blue Cheese Crate through the in-game Store. It is independent of the fan-wiki rebirth and mystery-box vocabulary.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes", "streamacheesepull-codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "should-reset-for-rebirth-bonus",
    question: "Should I reset my save to chase a rebirth bonus?",
    answer:
      "The official page does not confirm a rebirth bonus as of 2026-09-07, so the answer is to wait for a developer announcement before spending a saved studio on a reset. Until then, the safer read is to spend cash on confirmed studio upgrades and keep the saved cash on hand.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-mystery-box-calculators-safe",
    question: "Are mystery box calculators or drop-rate tools safe to use?",
    answer:
      "No third-party calculator, drop-rate tool, or guaranteed box tool is endorsed by the developer. Anything that asks you to paste a script, log in elsewhere, or download an executor is unsafe for the account. Use only the official Roblox client.",
    pageIds: ["streamacheesepull-rebirth-mystery-boxes"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Studio expansion FAQs
  {
    id: "fastest-studio-expansion-path",
    question: "What is the fastest Stream A Cheese Pull studio expansion path?",
    answer:
      "The fastest path is the like-plus-group bonus first, then a worker slot, then a pet slot, then the cheapest footprint upgrade. That order is the one the official four-step core loop frames, and it is the one the active code list is designed to support.",
    pageIds: ["streamacheesepull-studio-expansion"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-spend-cash-first",
    question: "Where do I spend cash first in Stream A Cheese Pull?",
    answer:
      "Spend cash on the cheapest cash-per-second upgrade you can afford. Decoration is cosmetic and does not move the studio forward on its own; the like-plus-group bonus is the only confirmed free path to the first round of upgrades.",
    pageIds: ["streamacheesepull-studio-expansion"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-cheese-wheels-real",
    question: "Are cheese wheels and cheese crates real objects in the game?",
    answer:
      "The fan-built companion wiki uses cheese wheel and cheese crates to describe objects on the studio floor. The official Roblox page, the Cheesy Situation group, and the public Discord have not confirmed those names as of 2026-09-07. The only developer-confirmed object name in the same visual layer is the Blue Cheese Crate granted by the FirstCodeEver code.",
    pageIds: ["streamacheesepull-studio-expansion"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-backrooms-event-confirmed",
    question: "Is the BACKROOMS event a confirmed in-game event?",
    answer:
      "Not as of 2026-09-07. The term comes from the fan-built companion wiki, and the developer has not confirmed an event calendar on the official Roblox page, the Cheesy Situation group, or the public Discord. Check the updates page for a confirmed announcement.",
    pageIds: ["streamacheesepull-studio-expansion", "streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-to-know-new-tier",
    question: "How do I know if a new upgrade tier has been added?",
    answer:
      "Check the updates page. The Roblox Games API records the latest update on 2026-09-06, so the studio is shipping actively, and a new upgrade tier can land in any patch. The updates page is the only place to read the developer-confirmed patch copy.",
    pageIds: ["streamacheesepull-studio-expansion", "streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-expansion-cost-robux",
    question: "Does studio expansion cost Robux?",
    answer:
      "No. The four-step core loop, the active code, the like-plus-group bonus, and the studio expansion tier are all cash-driven. The fastest free path is the active code, the like-plus-group bonus, and the cheapest confirmed studio upgrade. Avoid any third-party tool, executor, or free Robux generator advertised outside the official game page.",
    pageIds: ["streamacheesepull-studio-expansion"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Updates page FAQs
  {
    id: "when-last-update",
    question: "When was the last Stream A Cheese Pull update?",
    answer:
      "The Roblox Games API shows the Stream A Cheese Pull! Universe was last updated on 2026-09-06, which matches the date the official game page description was last refreshed by Cheesy Situation.",
    pageIds: ["streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-update-5-backrooms-real",
    question: "Are Update 5 and the BACKROOMS event real?",
    answer:
      "They appear on the fan-built wiki at stream-a-cheese-pull.wiki but have not been confirmed by Cheesy Situation on the official Roblox game page or the Cheesy Situation group page as of 2026-09-07, so they are treated as unconfirmed community references.",
    pageIds: ["streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-see-new-patches-first",
    question: "Where do I see new patches first?",
    answer:
      "New Stream A Cheese Pull update notes are surfaced on the official Roblox game page description and the Cheesy Situation group page first; Roblox notifications and the developer's Discord are secondary channels.",
    pageIds: ["streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-there-event-calendar",
    question: "Is there an event calendar?",
    answer:
      "No event calendar has been published on the official Stream A Cheese Pull! Roblox game page or the Cheesy Situation group page as of 2026-09-07. Any calendar seen elsewhere is community-maintained and is not used here.",
    pageIds: ["streamacheesepull-updates-events"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Source safety FAQs
  {
    id: "is-fan-wiki-official",
    question: "Is the stream a cheese pull wiki official?",
    answer:
      "No. The stream-a-cheese-pull.wiki companion site is community-maintained and is not affiliated with Cheesy Situation. It is cited only as dated community evidence for progression vocabulary, not as a current-game fact source.",
    pageIds: ["streamacheesepull-fan-wiki-safety"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-script-downloads-safe",
    question: "Are script downloads safe?",
    answer:
      "No. Any stream a cheese pull script link, paste, or video is an exploit cluster and can compromise your Roblox account while also violating the Roblox Terms of Use.",
    pageIds: ["streamacheesepull-fan-wiki-safety"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "which-sources-authoritative",
    question: "Which sources are authoritative for current-game facts?",
    answer:
      "Only the official Roblox game page, the Cheesy Situation group page, the in-game Store, and the Roblox Games API multi-get for Universe id 10628907188 are allowed to establish hard current-game facts.",
    pageIds: ["streamacheesepull-fan-wiki-safety"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-trust-media-articles",
    question: "Can I trust the dated media articles?",
    answer:
      "The dated Beebom, Dexerto, GachaPocket, Gameluster, and Roblox Den articles are reliable for the 2026-09-07 active code snapshot, but they are not authoritative for any future mechanic, reward, or schedule.",
    pageIds: ["streamacheesepull-fan-wiki-safety"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
