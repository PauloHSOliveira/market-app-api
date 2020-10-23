export class SignUpController {
  handle(httpRequest: any): any {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: `Missing param ${field}`,
        };
      }
    }
  }
}
