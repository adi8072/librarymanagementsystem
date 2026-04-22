import { useEffect, useState } from "react";
import API from "../services/api";

function BorrowedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowed = async () => {
      try {
        const res = await API.get("/borrow"); // we will adjust backend later if needed
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBorrowed();
  }, []);

  return (
    <div>
      <h2>Borrowed Books</h2>

      {books.length === 0 ? (
        <p>No borrowed books</p>
      ) : (
        books.map((item) => (
          <div key={item._id}>
            <p>{item.book?.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BorrowedBooks;