# Backend description

Here goes the description

## Installation

For this project I used v18.18.0 of NodeJS. There is a _.nvmrc_ file to select the correct version with **nvm**.
To do this in Windows open a PowerShell terminal in the projects root directory and run `nvm use $(Get-Content .nvmrc)`.
In Linux or Mac, open a terminal in the project directory and run `nvm use`.

If you don't have nvm installed in your computer, ensure that you have that specific node version. You can check your Node version by running `node -v` in a terminal.

#### <sub>See [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) for more info.</sub>

Once you ensure that you have the correct Node version, open a terminal inside the projects root directory and run `npm install`

## Configuration

Below you will find information about main processes you have to follow to ensure a correct configuration of the project

### Port

Define a port number within .env file. Ensure the port is available.

### Database

This project utilize MongoDB, so its necessary to create a new database in a mongo service. You can do so locally with [MongoDB Community Server Download](https://www.mongodb.com/try/download/community) or remotely with [Atlas](https://www.mongodb.com/atlas). Please check their documentation to see more info. Once you have created the database successfully, copy your mongodb database url and paste it in MONGODB_URL environment variable within .env file.

### Linting and formatting

You can configure the formatting rules in the `.prettierrc` file, and the formatting rules in `.eslintrc.json`

### Scripts

Run the development server:

```bash
/project-route npm run dev
```

## API

## Learn more
