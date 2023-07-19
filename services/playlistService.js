const { Playlist } = require("../models/playlistModel");

const incrementPlayCount = (id) => {
  let song = Playlist.find((song) => {
    return song.id == id;
  });
  song.playCount++;
};

module.exports = { incrementPlayCount };
