import mongoose, { connect } from 'mongoose';
mongoose.set('strictQuery', false);

export const dbConnection = async () => {
  try {
    
    const db = await connect("mongodb+srv://ADMIN:ADMIN@cluster0.tzntztc.mongodb.net/MEVN-TS"); 
   

    console.log( db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
