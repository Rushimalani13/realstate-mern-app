export const errorHandler = (statusCode, message) => {
    const error=new Error();
    error.statusCode=statusCode;
    error.message=error.message;
    return error;
}