# Task 1: Raw Node.js HTTP Server

A simple HTTP server built with only Node.js core modules, no frameworks.

## Run

node server.js

Server runs on http://localhost:3000

## Routes

- GET / : welcome message (JSON)
- GET /api/users : list of users (JSON)
- GET /api/health : health check (JSON)
- Any other route : 404 JSON response