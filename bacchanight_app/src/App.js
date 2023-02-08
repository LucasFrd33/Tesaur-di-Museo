import {useState} from 'react';
// import Explanation from './components/Explanation';
import Quiz from './components/Quiz';
import Intro from './components/Intro'
import Motion1 from './components/Motion1'
import Motion2 from './components/Motion2'
import Answer from './components/Answer'
import Resume from './components/Resume'


function App(){
    const [stepSetup, setStepSetup] = useState(0);

    const stepPage = [
      {
        step:
        <Intro
        transcription={true}
        handleStep={()=>handleStep(1)}
        textButton="Commencer"
        title={<h1 className='titre'>Tesaur</h1>}
        />
      },
      {
        step:
        <Motion1 
        handleStep={()=>handleStep(2)}
        textButton="Suivant"
        />
      },
      {
        step: <Quiz 
        title={<h1>Commençons le 1er jeu !</h1>}
        text={<p>Rendez-vous dans la salle : Les années 1910-1940 : du cubisme au retour à l’ordre.</p>}
        textButton="Jouer"
        handleStep={()=>handleStep(3)}
        />
      },
      {
        step:
        <Motion2
        handleStep={()=>handleStep(4)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume 
        handleStep={()=>handleStep(5)}
        textButton="Suivant"
        title={<h1>Résumé du 1er jeu </h1>}
        text={<p>Rend toi devant cette œuvre, Analyse bien le nom de ce tableau.<br/>

          Cela te donnera le 1er numéro du cadenas.</p>}
        />
      },
      {
        step:
        <Answer
        handleStep={()=>handleStep(6)}
        textButton="Suivant"
        />,
      },



      {
        step: <Quiz 
        title={<h1>Pour ce 2ème jeu, 
          il va falloir lever les yeux du téléphone.</h1>}
        text={<p>Et être attentif à l’environnement autour de toi !</p>}
        textButton="Jouer"
        handleStep={()=>handleStep(7)}
        />
      },
      {
        step:
        <Motion2
        handleStep={()=>handleStep(8)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume 
        handleStep={()=>handleStep(9)}
        textButton="Suivant"
        title={<h1>Résumé du 2ieme jeu </h1>}
        text={<p>Rend toi devant cette œuvre, Analyse bien le nom de ce tableau.<br/>

          Cela te donnera le 1er numéro du cadenas.</p>}
        />
      },
      {
        step:
        <Answer
        handleStep={()=>handleStep(10)}
        textButton="Suivant"
        />,
      },




      
    ]
    function handleStep(i){
      const set = i
      setStepSetup(set)
    }
  return (
    <div className="">
    {
      stepPage[stepSetup].step
    }
    </div>
  );
}


export default App;
