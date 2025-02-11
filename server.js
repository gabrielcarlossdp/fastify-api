import fastify from "fastify";
import { DataBasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DataBasePostgres();

server.get("/videos", async (request, reply) => {
  const search = request.query.search;
  const videos = await database.list(search);
  return reply.send(videos);
});

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return reply.status(201).send();
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title: title,
    description: description,
    duration: duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3000,
});
