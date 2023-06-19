import { PaymentError } from "@modules/payment";
import { ZodError } from "zod";

// TODO add generic 500 error response
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

export class ZodValidationErrorResponse extends Response {
  constructor(err: ZodError) {
    super(JSON.stringify({ data: null, error: err }), {
      status: 400,
    });
  }
}

export class PaymentErrorResponse extends Response {
  constructor(err: PaymentError) {
    super(JSON.stringify({ data: null, error: err }), {
      status: 400,
    });
  }
}
