CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "public"."List" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  "userId" INTEGER NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Todo" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  "listId" INTEGER NOT NULL,
  FOREIGN KEY ("listId") REFERENCES "public"."List"(id)
);
