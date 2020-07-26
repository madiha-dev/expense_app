import React from 'react';
import './App.css';

function Child() {

    let transactions = [
        { amount: 500, desc: "Cash" },
        { amount: -40, desc: "Book" },
        { amount: -200, desc: "Camera" }
    ]

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance<br />$260.00</h3>

            <div className="expense-container">
                <h3>INCOME<br />$500.00</h3>
                <h3>EXPENSE<br />$240.00</h3>
            </div>
            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description<br />
                    <input type='text' requied />
                </label>

                <br />
                <label>
                    Enter Amount<br />
                    <input type='number' required />
                </label>
                <br />
                <input type='submit' value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
