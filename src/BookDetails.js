import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Navigate, useParams } from "react-router-dom";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function BookDetails() {
  const { bookid } = useParams();
  //const book = bookList[bookid];
  //console.log("BookList", bookList, "Book", book);

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setBook(bk));
  }, []); //call only once

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="Charlotte&#39;s Web (2006) Trailer #1 | Movieclips Classic Trailers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-spec">
        <h2 className="book-name">{book.name}</h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <p className="book-summary">{book.summary}</p>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<FastRewindIcon />}
        variant="contained"
      >
        BACK
      </Button>
    </div>
  );
}
