import "./App.css";import { useEffect, useState } from "react";
import BooksList from "./components/BooksList";
import InputBooks from "./components/InputBooks";
import TotalPrice from "./components/TotalPrice";
import Modal from "./components/Modal";
import styles from "./SetBook.module.scss";
// import SetBook from "./pages/SetBook";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [book, setBook] = useState([]);
  const [isClicked, setIsClicked] = useState([]);
  const [toSell, setToSell] = useState([]);
  const [modal, setModal] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeBuyPrice = (e) => {
    setBuyPrice(e.target.value);
  };
  const onChangeSellPrice = (e) => {
    setSellPrice(e.target.value);
  };

  const handleSell = (title) => {
    if (toSell.find((item) => item.title === title) === undefined) {
      setIsClicked(book.find((item) => item.title === title));
      setModal(true);
    }
  };

  const handleSellPrice = () => {
    console.log(isClicked);
    setToSell([...toSell, { ...isClicked, sellPrice }]);
    setModal(false);
    // setToSell([...toSell, book.find((item) => item.title === title)]); --------------- copia l'oggetto nella colonna "da vendere"
  };

  const deleteToSellCard = (title) => {
    setToSell(toSell.filter((item) => item.title !== title));
  };

  const deleteBookCard = (title) => {
    setBook(book.filter((item) => item.title !== title));
  };

  const handleInput = (e) => {
    e.preventDefault();
    setBook([
      ...book,
      {
        title: title,
        author: author,
        buyPrice: buyPrice,
        sellPrice: sellPrice,
      },
    ]);
    setTitle("");
    setAuthor("");
    setBuyPrice("");
    setSellPrice("");
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("books")) === null
      ? localStorage.setItem("books", [])
      : setBook(JSON.parse(localStorage.getItem("books")));
    JSON.parse(localStorage.getItem("toSell")) === null
      ? localStorage.setItem("toSell", [])
      : setToSell(JSON.parse(localStorage.getItem("toSell")));
  }, []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(book));
  }, [book]);
  useEffect(() => {
    localStorage.setItem("toSell", JSON.stringify(toSell));
  }, [toSell]);
  return (
    <div className="App">
        {modal && (
          <Modal
            book={isClicked}
            setSellPrice={onChangeSellPrice}
            handleSellPrice={handleSellPrice}
            sellPrice={sellPrice}
          />
        )}
        <div className={styles.inputBook}>
          <InputBooks
            title={title}
            buyPrice={buyPrice}
            sellPrice={sellPrice}
            author={author}
            onChangeTitle={onChangeTitle}
            onChangeAuthor={onChangeAuthor}
            onChangeBuyPrice={onChangeBuyPrice}
            handleInput={handleInput}
          />
        </div>
        <div className={styles.bookList}>
          <div className={styles.buiedBook}>
            <h2>LIBRI COMPRATI</h2>
            {book?.map((item, index) => (
              <BooksList
                toSell={false}
                key={index}
                title={item.title}
                author={item.author}
                buyPrice={item.buyPrice}
                sellPrice={item.sellPrice}
                handleSell={handleSell}
                deleteCard={deleteBookCard}
              />
            ))}
          </div>
          <div className={styles.bookToSell}>
            <h2>LIBRI DA VENDERE</h2>
            {toSell?.map((item, index) => (
              <BooksList
                toSell={true}
                key={index}
                title={item.title}
                author={item.author}
                buyPrice={item.buyPrice}
                sellPrice={item.sellPrice}
                deleteCard={deleteToSellCard}
              />
            ))}
          </div>
        </div>
        <TotalPrice books={book} toSell={toSell} />
    </div>
  );
}

export default App;
