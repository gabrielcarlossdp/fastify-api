import { randomUUID } from "crypto";
import { sql } from "./db.js";
export class DataBasePostgres {
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`
      SELECT * FROM videos
      WHERE title LIKE ${`%${search}%`}
    `;
    } else {
      videos = await sql`
      SELECT * FROM videos
    `;
    }

    return videos;
  }

  async create(video) {
    const videoId = randomUUID();
    const [newVideo] = await sql`
      INSERT INTO videos (id,title, description, duration)
      VALUES (${videoId},${video.title}, ${video.description}, ${video.duration})
    `;

    return newVideo;
  }

  async update(id, video) {
    const [newVideo] = await sql`
      UPDATE videos
      SET title = ${video.title}, description = ${video.description}, duration = ${video.duration}
      WHERE id = ${id}
    `;

    return newVideo;

  }

  async delete(id) {
    const [newVideo] = await sql`
      DELETE FROM videos
      WHERE id = ${id}
    `;

    return newVideo;
  }
}
