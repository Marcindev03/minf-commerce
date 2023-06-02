import { ZodError } from "zod";

export class DatabaseErrorResponse extends Response {
  constructor() {
    super(JSON.stringify({ data: null, error: "Database Error" }), {
      status: 500,
    });
  }
}

export class NotFoundErrorResponse extends Response {
  constructor() {
    super(JSON.stringify({ data: null, error: "Not Found" }), {
      status: 404,
    });
  }
}

export class ZodValidationError extends Response {
  constructor(err: ZodError) {
    super(JSON.stringify({ data: null, error: err }), {
      status: 400,
    });
  }
}
