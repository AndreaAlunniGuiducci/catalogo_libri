import styles from "./Modal.module.scss";

const Modal = ({ book, setSellPrice, sellPrice, handleSellPrice }) => {
  return (
    <form className={styles.modal}>
      <h3>IMPOSTA IL PREZZO PER:</h3>
      <h2>{book.title}</h2>
      <input
        type="number"
        id="buyPrice"
        name="buyPrice"
        onChange={setSellPrice}
        value={sellPrice}
        required
      />
      <br />
      <button onClick={() => handleSellPrice()}>PROSEGUI</button>
    </form>
  );
};

export default Modal;
