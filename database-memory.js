import { randomUUID } from "node:crypto";

export class DataBaseMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const video = videoArray[1];
        return { id, ...video };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }

        return video;
      });
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
