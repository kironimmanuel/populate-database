import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import connectDB from './db/connect';
import MySchema, { IProduct } from './models/MySchema';

dotenv.config();

const start = async (): Promise<void> => {
  try {
    await connectDB(String(process.env.MONGO_URL));
    await MySchema.deleteMany();

    const jsonData: Buffer = await readFile(
      new URL('./mock-data.json', import.meta.url)
    );
    const jsonProducts: IProduct[] = JSON.parse(jsonData.toString());

    await MySchema.create(jsonProducts);
    console.log('Database was populated successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
