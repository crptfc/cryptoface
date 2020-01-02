export interface T_cryptoface<T_opt,
  T_IN_create_account, T_IN_get_account,
  T_IN_create_transaction, T_IN_get_transaction> {

  /**
   * Create one crypto account (could be a "wallet")
   * @param opt
   */
  create_account(opt?: T_IN_create_account)

  /**
   * Create many crypto accounts
   * @param opt
   */
  create_accountS?(optS?: T_IN_create_account[])

  /**
   * Get one crypto account's (could be a "wallet") info
   * @param opt
   */
  get_account(opt?: T_IN_get_account)

  /**
   * Get many crypto accounts' info
   * @param opt
   */
  get_accountS?(optS?: T_IN_get_account[])

  /**
   * Create one transaction
   * @param opt
   */
  create_transaction(opt?: T_IN_create_transaction)

  /**
   * Create many transactions
   * @param opt
   */
  create_transactionS?(optS?: T_IN_create_transaction[])

  /**
   * Get one transaction
   * @param opt
   */
  get_transaction(opt?: T_IN_get_transaction)

  /**
   * Get many transactions
   * @param opt
   */
  get_transactionS?(opt?: T_IN_get_transaction[])
}
