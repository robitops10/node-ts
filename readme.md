

## Node-TS Setup (For Me)

### Installation:

	$ sudo npm install -g typescript nodemon ts-node 	

	$ npm init -y 
	$ npm i express 
	$ npm i -D @types/express
	$ tsc --init 

### /tsconfig.json 
	... { 
	  "target": "es2018",
	  "module": "commonjs",
	  "outDir": "./dist", 
	  "rootDir": "./src",  (Note)	: always use subdir for TS, else it
	}, 

### /package.json
	"main": "./dist/index.js", : Define the main file.
	"scripts": { 	
	 "start" : "node .", 			: Run file which is defined in main. 
	 "dev" : "nodemon --exec ts-node ./src/index.ts", 
	 "build" : "tsc"  : Run *.ts 	from rootDir in tsconfig.json
	}, 


### /src/index.ts 

	// const express = require('express'); 				: Require $ npm i @types/node
	//   . Not has property intelligence support 	: so I will not use this module style any more

		import express, { Request, Response, NextFunction } from 'express';
		import userRouter from './routes/userRoute';

		const app = express(); 	: TypeScript suport import/export module.
		const PORT = 5000;

		app.get('/', (req, res) => { 
			res.status(200).json({ 
				status: 'success',
				body: { 
					data: 'json data'
				} 
			});
		}); 

		app.use('/api/users', userRouter); 					: User Router 

		app.use( (err: Error, req: Request, res: Response, next: NextFunction ) => { 		: Express Error Handler
			res.status(500).json({
				status: 'error', 
				message: err.message
			});
		}); 

		app.listen( PORT, () => console.log(`server is running on port ${PORT}`))


### /src/routes/userRoute.ts 	

		import { Router } from 'express';

		const router = Router(); 	

		router.get('/', (req, res) => {
			res.status(200).json({ 
				status: 'success',
				body: { 
					data: 'Users Router' 
				}
			});
		}); 

		export default router; 


## Allowing Types (in Node)


 ### -------[ Type in arguments ]---------	
	const getAllUsers = (req, res, next) => {...}

	Method-0: 	
		const getAllUsers = (	
			req: express.Request, 
			res: express.Response,
			next: express.NextFunction	
		) => {...}

	Method-1:
		import { Request, Response, NextFunction } from 'express'; 
		const getAllUsers = (req: Request, res: Response, next: NextFunction) => {...}

	Method-2:
		import { RequestHandler } from 'express';	
		const getAllUsers: RequestHandler = (req, res, next) => {...}

	Method-3: User Define handler:
	1. 	interface myFunHandler {
				(req: Request, res: Response, next: NextFunction): void;
			}
	2.	export const me: myFunHandler  = (req, res, next) => {...};


### -------[ Type Casting ]---------	

	import { RequestHandler } from 'express';

	const getAllUsers: RequestHandler = (req, res, next) => {	

	M-1:	const id = req.params.id as string; 								: By Type Casting	.
	M-2:	const id = (req.params as { id: string} ).id 				: Defining Specificly
				const { id } = req.params as { id: string }; 				: 	. Easy way 
	};

	const getAllUsers: RequestHandler<{id: string}> = (req, res, next) => {
	M-3:	const id = req.params.id 														: Probebly for params only
	}; 
