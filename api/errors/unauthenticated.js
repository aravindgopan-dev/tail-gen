const CustomApiError = require('./custom-api-error.js');
const { StatusCodes } = require('http-status-codes');

class UnauthenticatedError extends CustomApiError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError;