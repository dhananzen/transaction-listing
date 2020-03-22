import React, { useState, useRef, useEffect } from "react";
import TransactionItem from "./TransactionItem";

const hasScrollReachedTo = (threshold, element) => {
  const activeHeight = element.scrollTop + element.clientHeight,
    thresholdHeight = Math.floor(element.scrollHeight * (threshold / 100));

  return activeHeight > thresholdHeight;
};

export default function ItemList({ items }) {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    if (hasScrollReachedTo(80, listRef.current))
      setCurrentPage(page => page + 1);
  }, [scrollTop]);

  const handleScroll = () => {
    setScrollTop(listRef.current.scrollTop);
  };

  return (
    <div
      ref={listRef}
      onScroll={handleScroll}
      className="item-list transactions"
    >
      {items.slice(0, currentPage * PAGE_SIZE).map((transactionData, i) => (
        <TransactionItem key={i} data={transactionData} />
      ))}
    </div>
  );
}
