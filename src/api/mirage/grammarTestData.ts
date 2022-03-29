import { IGrammar } from "../../types";

export const grammarTestData: { grammar: Array<IGrammar> } = {
  grammar: [
    {
      task: "_____ left at eight o'clock. (subject)",
      correct: "The plane",
      variants: ["A new", "The plane", "With friends", "Yesterday"],
      tag: "Parts of the Sentence",
    },
    {
      task: "Peter's _____ work at a large bank. (subject)",
      correct: "daughters",
      variants: ["brother", "coworker", "daughters", "mother"],
      tag: "Parts of the Sentence",
    },
    {
      task: "There was _____ in the room. (subject)",
      correct: "a boy",
      variants: ["a boy", "very hot", "no chairs", "somewhere"],
      tag: "Parts of the Sentence",
    },
    {
      task: "He _____ very busy lately. (predicate)",
      correct: "has been",
      variants: ["not being", "does not", "had done", "has been"],
      tag: "Parts of the Sentence",
    },
    {
      task: "Jim and Mary _____ in a nice house with a large yard. (predicate)",
      correct: "lived",
      variants: ["bought", "lived", "sold", "wanted"],
      tag: "Parts of the Sentence",
    },
    {
      task: "John is a car mechanic, and Mike repairs _____. (object)",
      correct: "refrigerators",
      variants: ["as an expert", "a TV set", "on Saturdays", "refrigerators"],
      tag: "Parts of the Sentence",
    },
    {
      task: "He will speak _____. (object)",
      correct: "to the manager",
      variants: ["at noon", "in an hour", "to the manager", "very slowly"],
      tag: "Parts of the Sentence",
    },
    {
      task: "She was wearing a _____ summer dress and open-toe sandals. (attribute)",
      correct: "light",
      variants: ["beautifully", "best", "her sister's", "light"],
      // "tag": "Parts of the Sentence"
    },
    {
      task: "I saw something _____ in the kitchen. Is it for me? (attribute)",
      correct: "interesting",
      variants: ["a present", "from the window", "interesting", "on the table"],
      // "tag": "Parts of the Sentence"
    },
    {
      task: "I'll ask them _____. (adverbial modifier)",
      correct: "after dinner",
      variants: ["about it", "after dinner", "three questions", "to come back"],
      // "tag": "Parts of the Sentence"
    },
  ],
};
