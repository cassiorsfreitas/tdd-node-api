import bcrypt from 'bcrypt'
import { BcryptAdapter } from '../../../src/infra/criptography/bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve('hash')
  }
}))

const SALT = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(SALT)
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', SALT)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
