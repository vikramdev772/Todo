import { Request, Response, NextFunction } from "express";

// Error handling middleware function
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack for debugging

    res.status(500).json({ msg: "internal server error" });
};

export default errorHandler;
