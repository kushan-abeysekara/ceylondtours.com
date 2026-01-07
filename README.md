# Ceylon D Tours - Frontend

React frontend for Ceylon D Tours website.

## Folder Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   │   └── images/
│   ├── components/     # Reusable components
│   ├── context/        # React Context API files
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── routes/         # Route configurations
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── .env.example        # Environment variables example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```
REACT_APP_API_URL=your_api_url
```
