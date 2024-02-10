import mongoose from "mongoose";


export async function connect() {    
try{
    mongoose.connect(process.env.mongo_connection_url!)
    const connection =  mongoose.connection;
    connection.on('connected', ()=> {
        console.log('MongoDB connected successfully')
    })

    connection.on('error', (err) => {
        console.log('MongoDB connection error:'+ err)
    })
}
catch(error){
    console.log('Something went wrong')
    console.log(error)
}

}