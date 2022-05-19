import React from 'react'
import AddExpense from '../components/Expenses/AddExpense'
import ExpensesList from '../components/Expenses/ExpensesList'



function ExpensesPage() {
  return (
    <section>
        <AddExpense/>
        <ExpensesList/>
    </section>
  )
}

export default ExpensesPage