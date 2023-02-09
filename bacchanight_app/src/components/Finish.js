import {useState} from 'react';

function Finish({handleStep,textButton}) {
    const [showButton, setShowButton] = useState(true);

    function handleChange(e){
      const t = e.target.value
      if(t === "2" && t === "8" && t === "9"){
        const show = showButton
        setShowButton(!show)
      }
    }
    return (
      <div className="container">
         <select name="Chiffre1" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="2">2</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
        </select> 
        <select name="Chiffre2" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="2">2</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
        </select> 
        <select name="Chiffre3" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="2">2</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
        </select> 
        {
          showButton ? "" :  <button onClick={handleStep} >{textButton}</button>
        }
      </div>
    );
  }
  
  export default Finish;
  