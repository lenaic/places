# Places Front-End

## Environment configuration

This project requires a local installation of npm. Install NodeJS (v10 or later) and in the project directory run `npm install` to install the required dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The interaction with the places service is configured throught the `proxy-config.json` file which will redirect the api requests to `http://localhost:8080`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
