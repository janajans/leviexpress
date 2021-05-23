import React from 'react';
import './style.css';

// export const Reservation = () => (
//   <div className="reservation">
//     <h2>Vaše e-jízdenka</h2>
//     <div className="reservation__body">
//       <div className="reservation__body__headings">
//         <p>Datum cesty:</p>
//         <p>Z:</p>
//         <p>Do:</p>
//         <p>Sedadlo:</p>
//       </div>
//       <div className="reservation__body__data">
//         <p>
//           <strong>21.05.2021</strong>
//         </p>
//         <p>
//           <strong>NL-AMS</strong>
//         </p>
//         <p>
//           <strong>SK-BTS</strong>
//         </p>
//         <p>
//           <strong>13</strong>
//         </p>
//       </div>
//     </div>
//   </div>
// );

// 11.4 Komponenta musí zjistit, na detailu které jízdenky se nachází. Naimportujte si useParams hook z react-router-dom. Uvnitř komponenty tento hook zavolejte a získejte z něj parametr id.
// import { useParams } from 'react-router-dom';

// export const Reservation = () => {
//   const Child = () => {
//     let { id } = useParams();
//   };
//   return (
//     <div className="reservation">
//       <h2>Vaše e-jízdenka</h2>
//       <div className="reservation__body">
//         <div className="reservation__body__headings">
//           <p>Datum cesty:</p>
//           <p>Z:</p>
//           <p>Do:</p>
//           <p>Sedadlo:</p>
//         </div>
//         <div className="reservation__body__data">
//           <p>
//             <strong>21.05.2021</strong>
//           </p>
//           <p>
//             <strong>NL-AMS</strong>
//           </p>
//           <p>
//             <strong>SK-BTS</strong>
//           </p>
//           <p>
//             <strong>13</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// 11.5 Pomocí useState vytvořte nový stav reservation, výchozí hodnota bude null.
// 11.6 Přidejte useEffect volaný při prvním zobrazení komponenty. Bude z API získávat podrobné informace o jedné jízdence. Endpoint je na adrese https://leviexpress-backend.herokuapp.com/api/reservation?id=… kde tečky nahradí id konkrétní jízdenky. Toto id vezměte z vytvořené proměnné id z useParams hooku.
// 11.7 Endpoint vrací údaje o jízdence, pomocí funkce setReservation z useState hooku nastavte do proměnné reservation výsledek volání uvedeného endpointu.
// 11.8 Data z endpointu si také můžete vypsat do konzole. Podívejte se na jejich formát a porovnejte strukturu dat s daty, která jsou natvrdo v jsx (která jste vykopírovaly z reservation.html).
// 11.9 Nahraďte data jízdenky vepsaná natvrdo za ta, která jsou nyní uložená v proměnné reservation. Například hodnotu 21.05.2021 nahraďte za {reservation.date}. Nezapomeňte zobrazení dat podmínit tím, že stav reservation nemá hodnotu null, jinak bude prohlížeč hlásit chybu, že nelze číst z undefined.

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reservation = () => {
  const [reservation, setReservation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((json) => setReservation(json.data));
  }, []);

  return (
    <>
      {reservation && (
        <div className="reservation">
          <h2>Vaše e-jízdenka</h2>
          <div className="reservation__body">
            <div className="reservation__body__headings">
              <p>Datum cesty:</p>
              <p>Z:</p>
              <p>Do:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__body__data">
              <p>
                <strong>{reservation.date}</strong>
              </p>
              <p>
                <strong>{reservation.fromCity.code}</strong>
              </p>
              <p>
                <strong>{reservation.toCity.code}</strong>
              </p>
              <p>
                <strong>{reservation.seatNumber}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
