# jsAgents

A simple fullstack agents AI project using Node.js, Fastify, React, and TypeScript.

## Tech Stack

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Fastify](https://fastify.dev/)
  - [Zod](https://zod.dev/)
  - [drizzle-orm](https://orm.drizzle.team/)
- **Frontend:**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [clsx](https://github.com/lukeed/clsx)
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge)
  - [@tanstack/react-query](https://tanstack.com/query/latest)
  - [lucide-react](https://lucide.dev/)
  - [class-variance-authority](https://cva.style/)
  - [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/components/slot)
  - [tw-animate-css](https://github.com/justinmahar/tw-animate-css)
- **Other:**
  - [Docker](https://www.docker.com/) (optional, for database)
  - [TypeScript](https://www.typescriptlang.org/)

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- npm or bun
- Docker (optional, for database)

---

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/jsAgents.git
cd jsAgents
```

---

### 2. Install dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

---

### 3. Environment Variables

Copy `.env.example` to `.env` in the `server` directory and update as needed.

---

### 4. Start the development servers

#### Backend

```sh
cd server
npm run dev
```

#### Frontend

```sh
cd ../client
npm run dev
```

---

### 5. (Optional) Start database with Docker

```sh
cd server
docker compose up
```

---

## Project Structure

```
client/   # React frontend
server/   # Fastify backend
```

---

## License

MIT