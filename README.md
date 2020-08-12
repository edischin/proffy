# proffy
[Next Level Week](https://nextlevelweek.com/) - Week #2 (Omnistack) project

App to connect teachers and students. 
Teachers can register their classes informing their subject, in which week days and times they can occur, and contact information (Whatsapp number).
Students can find teachers by subject, week day and time, and contact teachers using Whatsapp.

This app was developed as part of a great one week course by [rocketseat](https://rocketseat.com.br/) to learn concepts and intermediate level development using Node.js, Typescript, SQLite, React and React Native.

To explore Reach and React Native two front-ends were created, a web and a mobile application. Those front-ends are connected to a REST API, also present is this repository, to obtain and register data.

## Dependencies

### Main

#### express
Fast, unopinionated, minimalist web framework for node.
Facilitates API development.

[Documentation](https://expressjs.com/)
express

#### sqlite3
SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
Relational database for the back-end.

[Documentation](https://www.sqlite.org/)
sqlite3

#### cors
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
Allows front-end to communicate with API by enabling cross-origin resource sharing (communication between different ports).

[Documentation](https://www.npmjs.com/package/cors)
cors

#### axios
Promise based HTTP client for the browser and node.js.
Facilitates communication with an API.

[Documentation](https://github.com/axios/axios)
axios

#### react
A JavaScript library for building user interfaces.
Facilitates UI creation with dynamic data.

[Documentation](https://reactjs.org/)
react

#### react-native
React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
Facilitates mobile UI creation based on React.

[Documentation](https://reactnative.dev/)
react-native


### Development

#### typescript
Adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. Compiles to readable, standards-based JavaScript.

[Documentation](https://github.com/Microsoft/TypeScript)
typescript

#### ts-node-dev
Run Typescript application with auto recompile/start when changes are saved.

[Documentation](https://yarnpkg.com/package/ts-node-dev)
ts-node-dev


### Global Libraries/Tools

#### Expo
Used to run/debug application in mobile device.

[Documentation](https://docs.expo.io/workflow/expo-cli/)
expo-cli

**npm** `npm install expo-cli --global`

**yarn** `yarn add expo-cli --global`