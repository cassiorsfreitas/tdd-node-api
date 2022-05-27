import { AddAccountRepository } from '@/data/interfaces/add-account-repository.interface'
import { AccountModel } from '@/domain/models/account.interface'
import { AddAccountModel } from '@/domain/usecases/add-account.interface'
import { MongoHelper } from '../mongodb/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: result.insertedId })
    return MongoHelper.map(account)
  }
}
