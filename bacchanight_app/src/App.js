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
        handleStep={()=>handleStep(1)}
        textButton="Suivant"
        />
      }
      // {
      //   step: <Explanation 
      //   image="https://images.pexels.com/photos/366791/pexels-photo-366791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      //   handleStep={()=>handleStep(5)}
      //   transcriptionText={0}
      //   transcription={false}
      //   />
      // },
      // {
      //   step: <Quiz 
      //   text={<p>Commençons le 1er jeu !</p>}
      //   textButton="Jouer"
      //   handleStep={()=>handleStep(6)}
      //   />
      // },
      // {
      //   step: <Explanation 
      //   text="Commençons par le 1er jeu !" 
      //   textButton="Suivant"
      //   image="https://images.pexels.com/photos/7367948/pexels-photo-7367948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      //   handleStep={()=>handleStep(3)}
      //   transcriptionText={1}
      //   transcription={true}
      //   />
      // },
      // {
      //   step: <Quiz 
      //   title={<h1>Résumé de la vidéo</h1>}
      //   text={<p>Rendez-vous dans la salle : Les années 1910-1940 : du cubisme au retour à l’ordre.<br/>
      //   Devant chacune de ces œuvres pour Cherche un chiffre cacher, une fois que les 3 chiffres sont trouvés, additionne les !</p>}
      //   textButton="Valide ta réponse"
      //   />
      // }
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
