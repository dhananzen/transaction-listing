import React, { useEffect, useState, useRef } from "react";
import "./styles.scss";
import ItemList from "./ItemList";
import SearchBox from "./SearchBox";
import TransactionsData from "./transactions-data";
import matchSorter from "match-sorter";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://starlord.hackerearth.com/bankAccount")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => {
        //fetching from the URL fails because mixed content issue
        setTransactions(TransactionsData);
        setResults(TransactionsData);
      });
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
    setResults(
      matchSorter(transactions, searchQuery, { keys: ["Transaction Details"] })
    );
  };

  const handleClear = () => {
    setSearchQuery("");
    setResults(transactions);
  };

  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} onClear={handleClear} />
      <ItemList items={results} />
    </div>
  );
}
