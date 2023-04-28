export class DatabaseErrorResponse extends Response {
  constructor() {
    super(JSON.stringify({ data: null, error: "Database Error" }), {
      status: 500,
    });
  }
}
