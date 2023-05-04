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
