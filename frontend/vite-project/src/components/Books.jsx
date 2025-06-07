import React, { useEffect, useState } from 'react'
import BookCard from './Book'
import axios from 'axios';
function BookList() {
  const [freeBooks, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book/getbook");
        console.log(res.data);
        const allBooks = res.data.books;
         console.log(allBooks);
        const data = allBooks.filter((data) => data.category === "free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Free Books</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {freeBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookList
