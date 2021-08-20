import React, { useState, useEffect } from "react";

export const AddEmployee = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/findAllBooks")
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Still fetching data</p>
      ) : (
        book.map((m) => <li>{m.bookName}</li>)
      )}
    </div>
  );
};
