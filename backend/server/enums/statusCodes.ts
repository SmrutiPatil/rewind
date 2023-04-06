export enum statusCode {
    OK = 200,
    CREATED=201,
    UPDATED=201,
    DELETED=204,
    BAD_REQUEST=400,
    UNAUTHORIZED=401,
    FORBIDDEN = 403,
    NOT_FOUND=404,
    TOO_MANY_REQUESTS=429,
    INTERNAL_SERVER_ERROR=500,
    NOT_IMPLEMENTED=501
}