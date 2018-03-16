module.exports = {
  inProgress: {
    code: 100,
    message: "In Progress"
  },

  ok: {
    code: 200,
    message: "OK"
  },

  created: {
    code: 201,
    message: "Created"
  },

  accepted: {
    code: 202,
    message: "Accepted"
  },

  deleted: {
    code: 204,
    message: "Deleted"
  },

  noContent: {
    code: 204,
    message: "No Content"
  },

  badRequest: {
    code: 400,
    message: "Bad Request"
  },

  insufficientData: {
    code: 400,
    message: "Insufficient data was provided with your request"
  },

  unauthorized: {
    code: 401,
    message: "Unauthorized"
  },

  forbidden: {
    code: 403,
    message: "Forbidden"
  },

  notFound: {
    code: 404,
    message: "Not Found"
  },

  timeout: {
    code: 408,
    message: "Timeout"
  },

  alreadyExists: {
    code: 409,
    message: "Conflict. A matching item already exists."
  },

  conflict: {
    code: 409,
    message: "Conflict"
  },

  protected: {
    code: 409,
    message: "Protected"
  },

  readOnly: {
    code: 409,
    message: "Conflict. The item is read only."
  },

  gone: {
    code: 410,
    message: "Gone. The location has been intentionally removed."
  },

  mediaTypeApplicationJsonRequired: {
    code: 415,
    message: "All API requests to POST, PUT and PATCH MUST set the Content-Type to application/json"
  },

  locked: {
    code: 423,
    message: "Locked"
  },

  tooManyRequests: {
    code: 429,
    message: "Too many requests."
  },

  internal: {
    code: 500,
    message: "Internal Error"
  },

  notImplemented: {
    code: 501,
    message: "Not Implemented"
  },

  unavailable: {
    code: 503,
    message: "Unavailable"
  }
};
