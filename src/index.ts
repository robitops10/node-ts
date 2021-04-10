import express, { Request, Response, NextFunction } from 'express';
import userRouter from './routes/userRoute';

const app = express();
const PORT = 5000;

app.use( express.json({}) ); 									// Enable req.body

app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		body: {
			data: 'json data'
		}
	});
});


// Routers
app.use('/api/users', userRouter);

// Global Express Error Handler
app.use( (err: Error, req: Request, res: Response, next: NextFunction ) => {
	res.status(500).json({
		status: 'error',
		message: '(Express) Error: ' + err.message
	});
});

app.listen( PORT, () => console.log(`server is running on port ${PORT}`))
