import React, { useState, useEffect, useMemo } from "react";

// Sample enterprise-level data fetching function
const fetchTransactions = () => {
  // Simulating an asynchronous API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, amount: 100 },
        { id: 2, amount: 200 },
        { id: 3, amount: 300 },
      ]);
    }, 1000);
  });
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions and update state when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTransactions();
      setTransactions(result);
    };

    fetchData();
  }, []);

  // Calculate the total amount using useMemo to memoize the result
  const totalAmount = useMemo(() => {
    console.log("Calculating total amount...");
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }, [transactions]);

  const handleAddTransaction = () => {
    // Generate a new transaction with a random amount
    const newTransaction = {
      id: transactions.length + 1,
      amount: Math.floor(Math.random() * 1000),
    };

    // Update transactions state with the new transaction
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={
              transaction.id
            }>{`Transaction ${transaction.id}: $${transaction.amount}`}</li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount}</h2>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default TransactionList;
