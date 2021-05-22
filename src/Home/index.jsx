import React, { useState } from 'react';
import JourneyPicker from './JourneyPicker/index';

//Vraťte se do komponenty Home, ze které se volá komponenta JourneyPicker. V komponentě Home vytvořte pomocí useState nový stav journey, výchozí hodnota bude null.

const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (props) => {
    setJourney(props);
  };
  return (
    <>
      {console.log(journey)}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <p>Nalezeno spojení s id {journey.journeyId}</p> : null}
      {/* {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>} */}
    </>
  );
};
export default Home;

// Propojte komponentu JourneyPicker se stavem journey – když komponenta JourneyPicker zavolá onJourneyChange s údaji o nalezeném spoji, nastaví se toto spojení do stavu journey.

// Upravte komponentu Home tak, aby v případě, kdy ve stavu journey je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude id z dat o nalezeném spojení.

// Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá nějaké spojení a vypíše se do stránky jeho id.
