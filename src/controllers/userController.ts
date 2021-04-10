import { RequestHandler, Request, Response, NextFunction } from 'express';

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
		status: 'success',
		body: {
			data: 'Users Router'
		}
	});
};


// export const me: RequestHandler  = (req, res, next) => {
// 	res.status(200).json({
// 		status: 'success',
// 		body: {
// 			data: 'Users Router'
// 		}
// 	});
// };


interface myFunHandler {
	(req: Request, res: Response, next: NextFunction): void;
}

export const me: RequestHandler<{id: string}>  = (req, res, next) => {
	const id = req.params.id;
	// const id = req.params.id as string;
	// const id = (req.params as { id: string}).id 

	// const { id } = req.params as { id: string } 

	console.log( req.params )

	res.status(200).json({
		status: 'success',
		body: {
			data: 'Users me: Profile Data'
		}
	});
};


