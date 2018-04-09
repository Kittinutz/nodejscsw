# Welcome to Nodejs Server

## Purpose

> We develop for CSW 2/60

## How to Install

```bash
# install command
git clone https://github.com/Kittinutz/nodejscsw.git && \
cd nodejscsw && \
npm install
```

## How to Start Server

```bash
# run development mode
npm run dev

# open web browser when start server: http://127.0.0.1:3000
```

## How To Use

* Generate sessionId
> POST /api/session

* Use sessionId for accesss database
> [GET, POST] /api/users/:sessionId
> [GET, PUT, DELTE] /api/users/:sessionId/:id

## Constructure Project

> project tree

```bash
.
├── index.js
├── package.json
├── Procfile
└── README.md
```

> package.json

```json
{
  "babel": {
    "presets": [
      "env",
      "stage-0"
    ]
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "express": "^4.16.3"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-stage-0": "^6.24.1",
    "nodemon": "^1.17.3"
  }
}
```

## Deploying With Heroku Server

> First, add heroku server to remote repository

```bash
git remote add heroku https://git.heroku.com/nodejscsw.git

# when push deploy server
git push heroku
```

> Next, open web browser: [https://nodejscsw.herokuapp.com](https://nodejscsw.herokuapp.com)
