const InputBooks = ({title, author, buyPrice, onChangeTitle, onChangeAuthor, onChangeBuyPrice, handleInput}) => {
    return(
        <>
        <label htmlFor="title">TITOLO: </label>
        <input type='text' id="title" name="title" onChange={onChangeTitle} value={title} required/>
        <br/>

        <label htmlFor="author">AUTORE: </label>
        <input type='text' id="author" name="author" onChange={onChangeAuthor} value={author} required/>
        <br/>

        <label htmlFor="buyPrice">PREZZO D'ACQUISTO: </label>
        <input type='number' id="buyPrice" name="buyPrice" onChange={onChangeBuyPrice} value={buyPrice} required/>
        <br/>

        <button onClick={handleInput}>INSERISCI</button>
        </>
    );
};

export default InputBooks;