import { createServer, Model } from "miragejs";
import { Server } from "miragejs/server";
import { IWord } from "../../types";
import testData from "./testData";

type ServerEnvironment = { environment?: string };

export default function makeServer({
  environment = "test",
}: ServerEnvironment): Server {
  return createServer({
    environment,

    models: {
      exercise: Model.extend<Partial<IWord>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("exercise", (schema) => ({
        exercise: schema.db.exercises.find(Math.floor(Math.random() * 5 + 1)),
      }));

      this.get("taglist", () => ({
        tags: [1, 20, 30, 40],
      }));
    },

    seeds(server) {
      server.db.loadData(testData);
    },
  });
}
