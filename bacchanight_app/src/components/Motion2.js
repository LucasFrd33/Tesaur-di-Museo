function Motion2({handleStep,textButton}) {

    return (
      <div className="container">
        <p>Ici motion du jeu 1</p>
        <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Motion2;
  