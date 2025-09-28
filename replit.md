# BlazerGames - Game Portal Website

## Overview
BlazerGames is a static website that serves as a portal for hosting multiple HTML5 games. The site features a clean, modern interface with a game gallery and search functionality.

## Recent Changes (September 27, 2025)
- Successfully imported project from GitHub
- Set up Python HTTP server on port 5000 for static file serving  
- Configured workflow for automatic server startup
- Set up deployment configuration for production (autoscale)
- Verified main portal and individual games are working correctly

## Project Architecture
- **Frontend**: Pure HTML/CSS/JavaScript static website
- **Server**: Python built-in HTTP server for development
- **Games**: Individual HTML5 games in `/games/` subdirectories
- **Assets**: Images, CSS, and JavaScript files in root and game directories

## Structure
```
/
├── index.html          # Main portal page
├── main.css           # Main stylesheet
├── script.js          # Search functionality
├── images/            # Portal images and logos
└── games/             # Individual game directories
    ├── vex4/          # VEX 4 platformer game
    ├── vex5/          # VEX 5 platformer game
    ├── slope/         # Slope racing game
    ├── drive-mad/     # Drive Mad racing game
    └── ...            # Other games
```

## Key Features
- Game portal with featured games section
- Search functionality for finding games
- Responsive design with hover effects
- Support for multiple HTML5 games
- Clean, modern dark theme

## Deployment
- Development: Python HTTP server on port 5000
- Production: Configured for autoscale deployment on Replit
- No build process required (static files)

## User Preferences
- No specific user preferences documented yet