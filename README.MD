# Populate database using mongoDB & Node.js

#### Code uses ES6 modules

##### Required libraries

```sh
npm i dotenv mongoose
```

##### Recommended with

[Mockaroo](https://www.mockaroo.com/) for creating mock data

##### Sequence

1. create populate.js file in root

2. in populate.js set path to the data.json file and mongoDB connection string

```sh
await connectDB(process.env.MONGO_URL)
```

3. run:

```sh
node populate
```
