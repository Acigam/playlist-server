let Playlist = [
  {
    id: 1,
    title: "vampire",
    artists: ["Olivia Rodrigo"],
    url: "https://open.spotify.com/track/3k79jB4aGmMDUQzEwa46Rz?si=c440be85197542b8",
    playCount: 7,
  },
  {
    id: 2,
    title: "Lemon",
    artists: ["Kenshi Yonezu"],
    url: "https://open.spotify.com/track/04TshWXkhV1qkqHzf31Hn6?si=a4cef088b9fa4ab6",
    playCount: 8,
  },
];

const generateId = () => {
  const lastSong = Playlist[Playlist.length - 1];
  const newId = lastSong ? lastSong.id + 1 : 1;
  return newId;
};

const addSong = (title, artists, url) => {
  const newSong = {
    id: generateId(),
    title,
    artists,
    url,
    playCount: 0,
  };

  Playlist.push(newSong);
  return newSong;
};

const sortPlaylist = (sortKey, sortDirection) => {
  const sortPlaylist = [...Playlist];
  if (sortDirection == "desc") {
    sortPlaylist.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? -1 : 1;
    });
  } else {
    sortPlaylist.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });
  }
  return sortPlaylist;
};

module.exports = { Playlist, addSong, sortPlaylist };
