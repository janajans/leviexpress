import React from 'react';
import BusStop from '../BusStop';
import './style.css';

// Komponenta JourneyDetail bude v props očekávat property journey s údaji o cestě. V property journey bude objekt, který má v sobě v property stops seznam zastávek. Property journey si můžete vypsat do konzole prohlížeče.

// POZOR: MUSÍM DATA JOURNEY POSLAT!!! = V KOMPONENTĚ HOME PŘIPÍŠU PROP JOURNEY ZDE: <JourneyDetail journey={journey} />

// const JourneyDetail = ({ journey }) => {
//   console.log(journey);
//   return (
//     <>
//       <div className="journey-detail container">
//         <h2>Podrobnosti cesty</h2>
//         <div className="stops">
//           <BusStop name="Praha" station="ÚAN Florenc" time="15:55" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default JourneyDetail;

// Místo jedné komponenty BusStop použité v komponentě napište kód, který projde všechny zastávky v journey.stops a pro každou zastávku vloží jednu komponentu BusStop, které předá správné údaje. Můžete si pomoci tak, že nejprve upravíte vloženou komponentu BusStop, ve které máte „Praha“, „ÚAN Florenc“ a „15:55“ tak, aby se místo těchto údajů vložily údaje z první zastávky v journey.stops[0] a následně kód upravíte tak, aby pomocí funkce map prošel všechny zastávky v journey.stops.
const JourneyDetail = ({ journey }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          {journey.stops.map((item) => (
            <BusStop
              key={item.code}
              name={item.name}
              station={item.station}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JourneyDetail;
