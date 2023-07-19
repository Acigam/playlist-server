const { Playlist, addSong, sortPlaylist } = require("../models/playlistModel");
const { incrementPlayCount } = require("../services/playlistService");

const express = require("express");
const app = express();

app.post("/", (req, res) => {
  try {
    const { title, artists, url } = req.body;

    if (!title || !artists || !url) {
      throw new Error("Missing required property");
    }

    const newSong = addSong(title, artists, url);
    res.status(201).json({ message: "Song added", song: newSong });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/:id", (req, res) => {
  try {
    let id = req.params.id;
    let song = Playlist.find((song) => {
      return song.id == id;
    });

    if (song) {
      incrementPlayCount(song);
      res.status(200).json({ message: `Now playing ${song.title}` });
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  try {
    let sort = req.query.sort;
    let [sortKey, sortDirection] = sort ? sort.split(":") : [null, null];

    if (sortKey) {
      if (!Object.keys(Playlist[0]).includes(sortKey)) {
        throw new Error("Invalid sort key");
      }
      sortDirection = sortDirection ?? "desc";
      if (!["asc", "desc"].includes(sortDirection)) {
        throw new Error("Invalid sort direction");
      }
      res.status(200).json({ songs: sortPlaylist(sortKey, sortDirection) });
    } else {
      res.status(200).json({ songs: Playlist });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
