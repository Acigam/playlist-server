# playlist-server

| HTTP Verbs | Endpoints                | Action                                |
| ---------- | ------------------------ | ------------------------------------- |
| GET        | /api/songs               | Get all songs                         |
| GET        | /api/songs/:id           | Get song by id                        |
| POST       | /api/songs               | Create new song (title, artists, URL) |
| GET        | /api/songs?key:direction | Get all songs with sort options       |

- `key`: The field to sort by.
- `direction`: The sort direction. Use `asc` for ascending order or `desc` for descending order.
