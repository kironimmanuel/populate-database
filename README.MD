# Populate mongoDB using Node.js

<<<<<<< HEAD
#### Code uses ES6 modules
=======
#### Node.js ES6 modules
>>>>>>> 4fc15f3b0c6b6e824a4436741828e42f13857f78

##### Required libraries

```sh
npm i dotenv mongoose
```

##### Recommended with

[Mockaroo](https://www.mockaroo.com/) for creating mock data

##### Sequence

1. create populate.js file in root

2. in populate.js set path to the data.json file and mongoDB connection string in .env

```sh
await connectDB(process.env.MONGO_URL)
```

3. run:

```sh
node populate
```
