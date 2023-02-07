function Motion1({handleStep,textButton}) {

    return (
      <div className="container">
        <p>Ici motion de présentation</p>
        <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Motion1;
  