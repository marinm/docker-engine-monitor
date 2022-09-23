# Docker Monitor

## About

Browser client to the [Docker Engine API](https://docs.docker.com/engine/api).

Made for local instance monitoring, not remote.

Why I made this:
- to learn React.js
- to learn Docker
- to learn REST-ful API design

## Setup

See `src/config.js`.

## Screenshot

![Screenshot](screenshot.png "Screenshot")

## Notes

Reference: [Docker Engine API (1.41)](https://docs.docker.com/engine/api/v1.41)

- ( ✔︎ ) used by monitor
- ( ✕ ) out of scope for this project

|   |          | Path                                | 
|---|----------|-------------------------------------|
| ✔︎ | `GET`    | `/v1.41/containers/json`            |
|   | `GET`    | `/v1.41/containers/{id}/json`       |
|   | `GET`    | `/v1.41/containers/{id}/top`        |
|   | `GET`    | `/v1.41/containers/{id}/logs`       |
|   | `GET`    | `/v1.41/containers/{id}/changes`    |
|   | `GET`    | `/v1.41/containers/{id}/stats`      |
| ✕ | `GET`    | `/v1.41/containers/{id}/export`     |
| ✕ | `GET`    | `/v1.41/containers/{id}/attach/ws`  |
| ✕ | `GET`    | `/v1.41/containers/{id}/archive`    |
| ✕ | `HEAD`   | `/v1.41/containers/{id}/archive`    |
| ✕ | `POST`   | `/v1.41/containers/create`          |
| ✕ | `POST`   | `/v1.41/containers/{id}/resize`     |
| ✕ | `POST`   | `/v1.41/containers/{id}/start`      |
| ✕ | `POST`   | `/v1.41/containers/{id}/stop`       |
| ✕ | `POST`   | `/v1.41/containers/{id}/restart`    |
| ✕ | `POST`   | `/v1.41/containers/{id}/kill`       |
| ✕ | `POST`   | `/v1.41/containers/{id}/update`     |
| ✕ | `POST`   | `/v1.41/containers/{id}/rename`     |
| ✕ | `POST`   | `/v1.41/containers/{id}/pause`      |
| ✕ | `POST`   | `/v1.41/containers/{id}/unpause`    |
| ✕ | `POST`   | `/v1.41/containers/{id}/attach`     |
| ✕ | `POST`   | `/v1.41/containers/{id}/wait`       |
| ✕ | `POST`   | `/v1.41/containers/{id}/prune`      |
| ✕ | `PUT`    | `/v1.41/containers/{id}/archive`    |
| ✕ | `DELETE` | `/v1.41/containers/{id}/`           |

## Complimentary watermelon emoji

🍉