function Answer({handleStep,textButton}) {
  function handleChange(e){
    const t = e.target.value

    console.log(t)
    if(t === guava){
      console.log("odzzd")
    }
  }
    return (
      <div className="container">
        <select name="fruit" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="guava">5</option>
          <option value ="lychee">6</option>
          <option value ="papaya">9</option>
        </select> 
        <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Answer;
  