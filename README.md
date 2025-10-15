# HNG-0 API

This is a simple Express.js API built with TypeScript for **HNG13 Stage 0**.  
It returns a JSON response containing user details, a random cat fact (fetched from [Cat Fact API](https://catfact.ninja/fact)), and the current timestamp.

---

## Features

- Built with **Node.js**, **Express**, and **TypeScript**
- Uses **CORS** for cross-origin compatibility
- Fetches data from an external API
- Supports environment variables via `.env`
- Ready for deployment with compiled JavaScript output

---

## Technologies Used

- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **TypeScript** (Type-safe JavaScript)
- **CORS** (Middleware for handling cross-origin requests)
- **Nodemon** (Development auto-reloader)

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/lexizuchenna/hng-server-0.git
cd hng-0
```

### 2. Install Dependencies

This project uses pnpm as the package manager.

If you don’t have pnpm installed:

```bash
npm install -g pnpm
```

Then install dependencies

```bash
pnpm install
```

---

## Environment Variables

Create a .env file in the root directory and define the following variables:

```bash
PORT=3000
EMAIL=your_email@example.com
NAME='Your Name'
```

## Running the Project Locally

### 1. Start in Development Mode

Runs the project using nodemon for auto-reloading:

```bash
pnpm run dev
```

### 2. Build the Project

Compile TypeScript to JavaScript in the dist folder:

```bash
pnpm run build
```

### 3. Start the Production Server

After building, start the compiled app:

```bash
pnpm start
```

---

## API Endpoint

GET `/me`

Response Example:

```json
{
  "status": "success",
  "user": {
    "email": "your_email@example.com",
    "name": "Your Name",
    "stack": "Nodejs/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

---

## Dependencies

| Package        | Description                                   |
| -------------- | --------------------------------------------- |
| express        | Web framework for Node.js                     |
| cors           | Middleware to enable CORS                     |
| dotenv         | Inject .env file                              |
| typescript     | Type-safe JavaScript development              |
| ts-node        | Run TypeScript directly in Node               |
| nodemon        | Automatically restarts server on code changes |
| @types/express | Type definitions for Express                  |
| @types/cors    | Type definitions for CORS                     |
