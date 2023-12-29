import express from 'express'
// import ProductManager from './ProductManager.js'
import productRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/products',productRouter);

app.use('/api/carts',cartsRouter);

app.listen(8080, ()=>console.log("El servidor abrio correctamente"));

mongoose.connect('mongodb+srv://pelaezkevin:<password>@codercluster.dxjnex1.mongodb.net/?retryWrites=true&w=majority', (error) => {if(error){
    console.log("Cannot connect to database: ",error);
    process.exit()
}
})

app.use('/api/users',usersRouter);
