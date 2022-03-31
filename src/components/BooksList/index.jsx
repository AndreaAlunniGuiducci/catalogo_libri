import styles from './BookList.module.scss'

const BooksList = ({ title, author, buyPrice, sellPrice, handleSell, toSell, deleteCard }) => {
  return (
    <>
      <div className={styles.bookList} onClick={()=> handleSell(title)}>
        <button onClick={()=> deleteCard(title)}><img alt='x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLUlEQVRoge2avS4EURiGHxRIFCJELeECSNhCSYKEO1DhInADfgqU6GkouAIKehGhUEkkEoUN0VjsKnYkm5O1856fmR2bfZPp9nu++bLPzpw5s9BMM6nmDCjVOPJALoG+uYhdq/eZDfAqBlYC7oGuIKdfTlfEjOt7ZQMdAQoCdC/EBFH2hX5fwJgteF0Al4A53wmAaaAo9FpzgbcDNwL8Gej3GKIPeBL63AEdrk1ylL/OuCanrg2AY4H/DYx79AB0xRYd2Esi20kpM6pi78CQBXcAeBO4XkqZURW7BNoEXitwLvCCKGVGVWxFYK2KrCBKmVEV+wRGa3CGgQ+BE1QpM6pit0Bnlfp24FqoT0QpMxvCiZSA7Sq1O2LteqITRFEVKwIzFXWTaHfvRJUyoyr2CPQA3cCD8PlUlDKjKnYYHcpnN1KdIIqqmHqkqpQZVbFMKmVGVazuV6m4+CpWV6XMuCqWCaXMuCgWTKnWUCCgJaWaRNMQaoX4sVdbYKaeTfwvv3W5o1emIW6ISSxR6qKYqtQBGV40NsQy3ubBarqibiI60cwopiq1VaV2W6xNXLGG2HxQlSoQbjsoEcXUReGywFoRWcGfU1SlLsjwlqnNJvagBXcAeBW4wRRTlVpwYC+KbG/FVKVOPHocCXwvxdJ69daL/urNSTFVqVmPIX4zhbadaq2YqtSu7wQV2RP6WSv27/4w8NfmQz6maR6Yp3zJDZX3iBnX+yVgz2aaicsPONQj3/nORbAAAAAASUVORK5CYII="/></button>
        <br/>
        <p>TITOLO: {title}</p>
        <p>AUTORE: {author}</p>
        <p>PREZZO D'ACQUISTO: {buyPrice}€</p>
        {toSell && <p>PREZZO DI VENDITA: {sellPrice}€</p>}
      </div>
    </>
  );
};

export default BooksList;
