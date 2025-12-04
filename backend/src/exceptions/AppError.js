// class AppError extends Error {
//     constructor(message, statusCode) {
//         super(message);
//         this.statusCode = statusCode;
//         Error.captureStackTrace(this, this.constructor);
//     }
// }

// module.exports = AppError;


class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);

        this.name = "AppError";
        this.statusCode = statusCode;
        this.success = false;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
