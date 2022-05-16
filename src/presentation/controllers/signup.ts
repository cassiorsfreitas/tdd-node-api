/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body:
            new Error('Missing para: name')
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
