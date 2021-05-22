import React, { useState } from 'react';
import JourneyDetail from '../JourneyDetail';
import SeatPicker from '../SeatPicker';
import JourneyPicker from './JourneyPicker/index';

//Vraťte se do komponenty Home, ze které se volá komponenta JourneyPicker. V komponentě Home vytvořte pomocí useState nový stav journey, výchozí hodnota bude null.

// const Home = () => {
//   const [journey, setJourney] = useState(null);
//   const handleJourneyChange = (props) => {
//     setJourney(props);
//   };
//   return (
//     <>
//       {console.log(journey)}
//       <JourneyPicker onJourneyChange={handleJourneyChange} />
//       {/* {journey ? <p>Nalezeno spojení s id {journey.journeyId}</p> : null} */}
//       {/* {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>} */}
//       {journey && <JourneyDetail journey={journey} />}
//     </>
//   );
// };
// export default Home;

// Propojte komponentu JourneyPicker se stavem journey – když komponenta JourneyPicker zavolá onJourneyChange s údaji o nalezeném spoji, nastaví se toto spojení do stavu journey.

// Upravte komponentu Home tak, aby v případě, kdy ve stavu journey je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude id z dat o nalezeném spojení.

// Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá nějaké spojení a vypíše se do stránky jeho id.

//Použijete komponentu JourneyDetail v komponentě Home na místě, kde se nyní vypisuje id nalezeného spoje. Komponenta se bude zobrazovat jenom tehdy, když ve stavu journey v komponentě Home je něco jiného, než null. Ověřte, že po vyhledání spojení se na stránce zobrazí podrobnosti cesty s městy 1 až 4.

// Nyní už zbývá jen poslat z komponenty Home do komponenty JourneyDetail údaje o cestě. Vraťte se do komponenty Home. Ve stavu journey tam jsou uloženy údaje o cestě. Nyní už jen stačí tento stav předat do property journey komponenty JourneyDetail.

// const Home = () => {
//   const [journey, setJourney] = useState(null);
//   const handleJourneyChange = (props) => {
//     setJourney(props);
//   };
//   return (
//     <>
//       {console.log(journey)}
//       <JourneyPicker onJourneyChange={handleJourneyChange} />
//       {/* {journey ? <p>Nalezeno spojení s id {journey.journeyId}</p> : null} */}
//       {/* {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>} */}
//       {journey && <JourneyDetail journey={journey} />}
//     </>
//   );
// };
// export default Home;

// Přidejte komponentu SeatPicker do komponenty Home. Bude umístěna pod JourneyDetail. Finálně se bude zobrazovat stejně jako JourneyDetail jen v případě, kdy stav journey není prázdný. Pro vývoj komponenty ale bude rychlejší, když se prozatím bude zobrazovat stále.
// const Home = () => {
//   const [journey, setJourney] = useState(null);

//   const handleJourneyChange = (props) => {
//     setJourney(props);
//   };
//   return (
//     <>
//       {console.log(journey)}
//       <JourneyPicker onJourneyChange={handleJourneyChange} />
//       {journey && <JourneyDetail journey={journey} />}
//       <SeatPicker />

//     </>
//   );
// };
// export default Home;

// 9.14 Teď už je potřeba upravit komunentu Home tak, že komponentu SeatPicker bude zobrazovat jedině v případě, že je stav journey jiný, než null – stejně, jako se zobrazuje komponenta JourneyDetail. V komponentě SeatPicker také nastavte atributy seats (vloží se do něj journey.seats) a journeyId (do kterého přijde journey.journeyId). Ověřte v prohlížeči, že po vyhledání spoje se zobrazí podrobnosti cesty a také komponenta pro výběr sedadel – zatím s vašimi testovacími sedadly. V konzoli prohlížeče se vypíše pole s údaji o sedadlech a také identifikátor spoje.
const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (props) => {
    setJourney(props);
  };
  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
        </>
      )}
    </>
  );
};
export default Home;
