const TotalPrice = ({ books, toSell }) => {
  const totalBuy = books?.reduce(
    (prevValue, currentValue) => prevValue + parseInt(currentValue.buyPrice),0);
  const totalSell = toSell?.reduce(
    (prevValue, currentValue) => prevValue + parseInt(currentValue.sellPrice),0);
  return (
    <>
      <hr />
      <p>TOTALE ACQUISTO: {totalBuy} €</p>
      <p>TOTALE VENDITA: {totalSell} €</p>
      <p>TOTALE GUADAGNO TEORICO: {totalSell - totalBuy} €</p>
    </>
  );
};

export default TotalPrice;