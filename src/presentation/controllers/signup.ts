/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: {
          message: 'Missing name in request body'
        }
      }
    }
    return {
      statusCode: 200,
      body: {
        message: 'Successfully created user'
      }
    }
  }
}
