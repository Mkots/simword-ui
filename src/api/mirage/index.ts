import { createServer, Model } from "miragejs";
import { Server } from "miragejs/server";
import { IGap, IGrammar, IWord } from "../../types";
import wordsTestData from "./wordsTestData";
import { grammarTestData } from "./grammarTestData";

type ServerEnvironment = { environment?: string };

export default function makeServer({
  environment = "test",
}: ServerEnvironment): Server {
  return createServer({
    environment,

    models: {
      exercise: Model.extend<Partial<IWord>>({}),
      grammar: Model.extend<Partial<IGrammar>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get<IWord>("exercise", (schema) => ({
        exercise: schema.db.exercises.find(Math.floor(Math.random() * 5 + 1)),
      }));

      this.get("taglist", () => ({
        tags: [1, 20, 30, 40],
      }));

      this.get<IGap>("gaps/exercise", () => ({
        sentence: "They all assume that Penny will provide hospitality.",
        word: "granted",
        task: "Everyone ___ Penny will provide hospitality.",
        answer: "takes it for granted that",
      }));

      this.get<IGrammar>(
        "grammar/exercise",
        (schema) =>
          schema.db.grammar.find(Math.floor(Math.random() * 10 + 1)) as IGrammar
      );
    },

    seeds(server) {
      server.db.loadData(wordsTestData);
      server.db.loadData(grammarTestData);
    },
  });
}
