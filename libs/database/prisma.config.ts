import { defineProject } from "prisma";

export default defineProject({
  schema: [
    "./prisma/auth.schema.prisma",
    "./prisma/scrapper.schema.prisma"
  ],
  emit: {
    client: {
      output: "./src/generated",
    },
  },
});
