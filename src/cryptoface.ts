export abstract class Cryptoface<T_opt,
  T_IN_create_account, T_IN_get_account,
  T_IN_create_transaction, T_IN_get_transaction> {

  /**
   * Create one crypto account (could be a "wallet")
   * @param opt
   */
  abstract create_account(opt?: T_IN_create_account)

  /**
   * Create many crypto accounts
   * @param opt
   */
  abstract create_accountS?(optS?: T_IN_create_account[])

  /**
   * Get one crypto account's (could be a "wallet") info
   * @param opt
   */
  abstract get_account(opt?: T_IN_get_account)

  /**
   * Get many crypto accounts' info
   * @param opt
   */
  abstract get_accountS?(optS?: T_IN_get_account[])

  /**
   * Create one transaction
   * @param opt
   */
  abstract create_transaction(opt?: T_IN_create_transaction)

  /**
   * Create many transactions
   * @param opt
   */
  abstract create_transactionS?(optS?: T_IN_create_transaction[])

  /**
   * Get one transaction
   * @param opt
   */
  abstract get_transaction(opt?: T_IN_get_transaction)

  /**
   * Get many transactions
   * @param opt
   */
  abstract get_transactionS?(opt?: T_IN_get_transaction[])
}
