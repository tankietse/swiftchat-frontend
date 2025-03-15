# SwiftChat Frontend

## Overview
SwiftChat Frontend is the client-side application for the SwiftChat messaging platform. This project implements a modern, high-performance web interface for real-time messaging using Next.js and TypeScript.

## Main Stack
- **Next.js**: React framework with App Router architecture
- **TypeScript**: Strongly typed programming language
- **tRPC**: End-to-end typesafe APIs

## Why This Stack?

- **Code Generation**: Automatically generate client code from backend's OpenAPI/Swagger specifications
- **Type Safety**: TypeScript + tRPC ensure end-to-end type safety between frontend and backend
- **Performance**: Next.js provides SSR/SSG capabilities for optimal SEO and performance
- **Developer Experience**: Improved developer experience with type checking and autocompletion

## Technology Breakdown

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | Next.js (App Router) | Server Components, API Routes, seamless backend integration |
| State Management | Zustand/Jotai | Minimal API, reduced boilerplate code |
| API Client | tRPC | Auto-generate client code from OpenAPI/Swagger, type-safe |
| UI Library | Shadcn UI + Tailwind | Pre-built components, high customizability, reduced CSS code |
| Real-time | Socket.IO | Simple WebSocket implementation for real-time communication |
| Form Handling | React Hook Form + Zod | Automatic validation, minimalistic code |
| Code Generation | OpenAPI Generator | Auto-generate client SDK from Spring Boot documentation |

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/swiftchat-frontend.git
cd swiftchat-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with appropriate values.

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Development Workflow

### Code Structure
```
swiftchat-frontend/
│── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Global layout
│   │   ├── page.tsx           # Home page
│   │   ├── api/               # API routes (tRPC)
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom hooks (Zustand, Jotai)
│   ├── lib/                   # Utilities, OpenAPI SDK
│   ├── services/              # API services (tRPC)
│── public/                    # Static assets
│── styles/                    # Tailwind CSS
│── openapi.yaml                # OpenAPI spec
│── package.json
│── tsconfig.json
│── next.config.js

```

### API Integration
The frontend connects to the SwiftChat backend services using tRPC. API clients are automatically generated from the OpenAPI specifications provided by the backend services.

## Integration with Backend

SwiftChat Frontend integrates with a comprehensive microservices backend architecture:

- **Backend Technology**: Spring Boot / Golang
- **Deployment**: Jenkins handles backend build, test, and deployment
- **Frontend Deployment**: Automatic deployment to Vercel
- **Integration Process**: When backend deployment completes, frontend automatically updates API URLs and rebuilds

For detailed information on the backend architecture, refer to [architecture.md](./achitechture.md).

## Build and Deployment

### Development Build
```bash
npm run build
# or
yarn build
```

### Production Deployment
The application is automatically deployed to Vercel when changes are pushed to the main branch.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting
- `npm run test` - Run tests

## Features

- Real-time messaging
- User authentication and profile management
- Media sharing
- Message reactions and editing
- Group chats
- And more...

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
