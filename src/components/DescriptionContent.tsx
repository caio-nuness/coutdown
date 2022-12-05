export const DescriptionContent:React.FunctionComponent = () => {

  function handleButton() {
    alert('Obrigado! Você será alertado.');
  }

  return(
    <div className="box-teste">
      <p className="">Inscreva-se para saber mais sobre o lançamento</p>
      <button  onClick={handleButton} >Inscreva-se</button>
    </div>
  );
};
