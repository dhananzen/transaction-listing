import React from "react";

export default function TransactionItem({ data }) {
  const isWithdrawlTxn = data["Withdrawal AMT"] !== "";

  return (
    <div className="card transaction">
      <span className="label transaction__date">Date:{data["Date"]}</span>
      <p className="title transaction__title">{data["Transaction Details"]}</p>
      {isWithdrawlTxn ? (
        <p>
          <span>Withdrawl Amount: </span>
          {data["Withdrawal AMT"]}
        </p>
      ) : (
        <p>
          <span>Deposit Amount: </span>
          {data["Deposit AMT"]}
        </p>
      )}
      <p>
        <span>Balance Amount: </span>
        {data["Balance AMT"]}
      </p>
    </div>
  );
}
