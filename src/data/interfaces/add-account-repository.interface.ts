import { AddAccountModel } from '@/domain/usecases/add-account.interface'
import { AccountModel } from '@/domain/models/account.interface'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
