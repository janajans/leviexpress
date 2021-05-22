import React, { useState } from 'react';
import Seat from '../Seat';
import './style.css';

//  Samotné tlačítko pro sedadlo – element button s obrázkem svg uvnitř přesuňte do komponenty Seat. Na místě původního tlačítka v SeatPicker použijte komponentu Seat.

// const SeatPicker = () => (
//   <div className="seat-picker container">
//     <h2>Vyberte sedadlo</h2>
//     <div className="seats">
//       <div className="seat-row">
//         <Seat />
//       </div>
//     </div>
//     <button className="btn" type="button">
//       Rezervovat
//     </button>
//   </div>
// );

// export default SeatPicker;

// Komponenta Seat bude očekávat čtyři properties: number, isOccupied, isSelected a onSelect. V komponentě SeatPicker upravte vloženou komponentu Seat tak, že jí nastavíte číslo sedadla a boolean hodnoty isOccupied a isSelected. Property onSelect zatím ignorujte. Vložte si do komponenty několik sedadel, nastavte jim různá čísla a některé hodnoty isOccupied nastavte na true. Jednomu neobsazenému sedadlu nastavte isSelected na true. Nyní zprovozníte komponentu Seat, tato ručně vložená sedadla použijete pro testování.
// const SeatPicker = () => (
//   <div className="seat-picker container">
//     <h2>Vyberte sedadlo</h2>
//     <div className="seats">
//       <div className="seat-row">
//         <Seat number="12" isOccupied={false} isSelected={false} />
//         <Seat number="13" isOccupied={true} isSelected={false} />
//         <Seat number="14" isOccupied={false} isSelected={true} />
//       </div>
//     </div>
//     <button className="btn" type="button">
//       Rezervovat
//     </button>
//   </div>
// );

// export default SeatPicker;

// Vraťte se do komponenty SeatPicker a vytvořte zde funkci handleSeatSelect. Funkce dostane na vstupu číslo sedadla – zatím číslo sedadla vypište do konzole. Předejte tuto funkci do property onSelect u všech testovacích sedadel. Vyzkoušejte v prohlížeči, že při klikání na sedadla se v konzoli logu zobrazují jejich čísla. Styl sedadla (červená barva textu) se zatím měnit nebude.
// V komponentě SeatPicker vytvořte pomocí useSelect stav selectedSeatNumber. Výchozí hodnota bude null. Ve funkci handleSeatSelect nastavujte tento stav na číslo sedadla, které uživatel vybral.
// const SeatPicker = () => {
//   const handleSeatSelect = (number) => {
//     console.log(number);
//   };

//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         <div className="seat-row">
//           <Seat
//             number="12"
//             isOccupied={false}
//             isSelected={false}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="13"
//             isOccupied={true}
//             isSelected={false}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="14"
//             isOccupied={false}
//             isSelected={true}
//             onSelect={handleSeatSelect}
//           />
//         </div>
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 11.V komponentě SeatPicker vytvořte pomocí useSelect stav selectedSeatNumber. Výchozí hodnota bude null. Ve funkci handleSeatSelect nastavujte tento stav na číslo sedadla, které uživatel vybral.
// const SeatPicker = () => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };

//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         <div className="seat-row">
//           <Seat
//             number="12"
//             isOccupied={false}
//             isSelected={false}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="13"
//             isOccupied={true}
//             isSelected={false}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="14"
//             isOccupied={false}
//             isSelected={true}
//             onSelect={handleSeatSelect}
//           />
//         </div>
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// Na vložených komponentách Seat změňte atribut isSelected. Místo statické hodnoty true nebo false nastavujte jeho hodnotu v závislosti na tom, zda číslo sedadla je shodné s číslem uloženým ve stavu selectedSeatNumber. Čísla zatím opíšete z atributu number ručně. Nyní si v prohlížeči vyzkoušejte, že při klikání na jednotlivá neobsazená sedadla se vypisuje číslo sedadla do konzole ale také se mění barva textu vybraného sedadla na červenou. Výpis do konzole pak můžete smazat.
// const SeatPicker = () => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };

//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         <div className="seat-row">
//           <Seat
//             number="12"
//             isOccupied={false}
//             isSelected={'12' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="13"
//             isOccupied={true}
//             isSelected={'13' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="14"
//             isOccupied={false}
//             isSelected={'14' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//         </div>
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 9.13 Nyní je potřeba údaje o sedadlech předat z komponenty Home do komponenty SeatPicker. Zároveň se bude později hodit i identifikátor spoje. Do komponenty SeatPicker tedy přidejte dvě props – seats a journeyId. Zatím si tyto props vypisujte do konzole prohlížeče.
// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };
//   console.log(seats);
//   console.log(journeyId);
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         <div className="seat-row">
//           <Seat
//             number="12"
//             isOccupied={false}
//             isSelected={'12' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="13"
//             isOccupied={true}
//             isSelected={'13' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//           <Seat
//             number="14"
//             isOccupied={false}
//             isSelected={'14' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//         </div>
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 9.16 Plánek sedadel bude vypadat tak, že v HTML bude pro každou řadu sedadel jeden div s třídou seat-row a teprve uvnitř tohoto divu budou jednotlivá sedadla – komponenty Seat. Třeba plánek pětimístného osobního auta jedoucího vpravo by vypadal takhle:
// <div className="seats">
//   <div classname="seat-row">
//      <Seat number="3" />
//      <Seat number="1" />
//   </div>
//   <div classname="seat-row">
//      <Seat number="4" />
//   </div>
//   <div classname="seat-row">
//      <Seat number="2" />
//      <Seat number="5" />
//   </div>
// </div>

// Když se podíváte do konzole na výpis, co je uložené v property seats: pole, které představuje jednotlivé řady v autobusu. Můžete tedy toto pole projít pomocí funkce map, a pro každý řádek pole vypsat jeden div. Tím vytvoříte řady (zatím bez sedadel) v autobusu. Pro otestování si do divu vypište text „řada 0“, „řada 1“ apod. Nezapomeňte, že funkce vložená do funkce map může mít dva parametry, druhý parametr je právě pořadové číslo aktuálního prvku. To použijete pro výpis čísla řady a také se bude hodit pro atribut key, který po vás Reat bude chtít. Vyzkoušejte v prohlížeči, že se vám po vyhledání spojení zobrazí pět řad, zatím bez sedadel. Očíslované jsou 0–4, ale to už vás určitě nerozhází
// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };
//   console.log(seats);
//   console.log(journeyId);
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((item, index) => (
//           <div key={index} className="seat-row">
//             řada {index}
//           </div>
//         ))}
//         {/* <div className="seat-row">
//           <Seat
//             number="12"
//             isOccupied={false}
//             isSelected={'12' === selectedSeatNumber}
//             onSelect={handleSeatSelect}
//           />
//         </div> */}
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 9.17 Nyní v jednotlivých řadách zobrazíme sedadla. V datech získaných ze seats je v každé položce představující řadu sedadel další pole, prvky v něm představují jednotlivá sedadla. Každé sedadlo je reprezentováno objektem, ve kterém je číslo sedadla a údaj, zda už je obsazené. Uvnitř divu představujícího řadu sedadel tedy pomocí další funkce map budete procházet jednu řadu sedadel. Pro zobrazení sedadla použijete komponentu Seat. Můžete se inspirovat testovacími sedadly, pokud jste si je v kódu nechaly. Bude potřeba nastavit properties number, isOccupied (ty získáte z údajů o sedadle), isSelected (zjistíte, zda číslo sedadla z údajů o sedadle je shodné s číslem ve stavu selectedSeatNumber) a onSelected necháte stejně, jako to bylo u testovacích sedadel (zavoláte funkci handleSeatSelect). Když kód otestujete v prohlížeči, bude React protestovat, že chybí autribut key – ten můžete nastavit také na číslo sedadla. Vyzkoušejte v prohlížeči, že se po vyhledání spoje správně zobrazuje plánek sedadel, zobrazují se volná a obsazená sedadla, kliknutím můžete volné sedadlo vybrat.
// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((item, index) => (
//           <div key={index} className="seat-row">
//             {item.map((seat) => (
//               <Seat
//                 number={seat.number}
//                 isOccupied={seat.isOccupied}
//                 isSelected={seat.number === selectedSeatNumber}
//                 onSelect={handleSeatSelect}
//                 key={seat.number}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//       <button className="btn" type="button">
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 10.1 Nyní je potřeba zprovoznit tlačítko „Rezervovat". Stále v komponentě SeatPicker vytvořte funkci handleBuy a zařiďte, aby byla tato funkce volána při kliknutí na tlačítko „Rezervovat". Ve funkci si zatím můžete vypsat nějakou zprávu do konzole ('Funguju!').
// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };
//   const handleBuy = () => {
//     console.log('rezervuju?');
//   };
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((item, index) => (
//           <div key={index} className="seat-row">
//             {item.map((seat) => (
//               <Seat
//                 number={seat.number}
//                 isOccupied={seat.isOccupied}
//                 isSelected={seat.number === selectedSeatNumber}
//                 onSelect={handleSeatSelect}
//                 key={seat.number}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//       <button className="btn" type="button" onClick={handleBuy}>
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 10.2 Pomocí atributu disabled na tlačítku „Rezervovat" zabezpečte, aby bylo tlačítko přístupné jenom tehdy, když je vybrané nějaké sedadlo, tj. když stav selectedSeatNumber nemá hodnotu null. Ověřte v prohlížeči, že se tlačítko zpřístupní až po výběru sedadla a že se po kliknutí na tlačítko vypíše do konzole text, který máte ve funkci handleBuy.

// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };
//   const handleBuy = () => {
//     console.log('rezervuju?');
//   };
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((item, index) => (
//           <div key={index} className="seat-row">
//             {item.map((seat) => (
//               <Seat
//                 number={seat.number}
//                 isOccupied={seat.isOccupied}
//                 isSelected={seat.number === selectedSeatNumber}
//                 onSelect={handleSeatSelect}
//                 key={seat.number}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//       <button
//         className="btn"
//         type="button"
//         onClick={handleBuy}
//         disabled={selectedSeatNumber === null}
//       >
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 10.3 Podle dokumentace React Routeru se podívejte, jak lze pomocí hooku useHistory přímo v kódu změnit stránka, na které se uživatel nachází. Tedy jak uživatele přesměrovat.
// 10.4 Nad funkcí handleBuy vytvořte proměnnou history s použitím hooku useHistory(), nezapomeňte hook naimportovat z react-router-dom. Za moment tuto proměnnou použijeme.
// 10.5 Nákup jízdenky se ve funkci handleBuy provede tak, že zavoláte API endpoint: https:/leviexpress-backend.herokuapp.com/api/reserve?seat=…&journeyId=…
// Parametr seat bude číslo sedadla vybrané uživatelem a parametr journeyId bude mít hodnotu journeyId z props. Pozor, tento endpoint je nutné volat HTTP metodou POST – tělo požadavku zůstane prázdné, tj. ve fetch vůbec nebude property body.
// 10.6 Volání tohoto API vrací JSON s daty, ze kterých nás bude zajímat hodnota reservationId. Vypište si ji do konzole.
// import { useHistory } from 'react-router-dom';

// const SeatPicker = ({ seats, journeyId }) => {
//   const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
//   const handleSeatSelect = (number) => {
//     setSelectedSeatNumber(number);
//   };

//   const history = useHistory();
//   const handleBuy = () => {
//     fetch(
//       `https:/leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     )
//       .then((resp) => resp.json())
//       .then((json) => console.log(json.data.reservationId));
//   };
//   return (
//     <div className="seat-picker container">
//       <h2>Vyberte sedadlo</h2>
//       <div className="seats">
//         {seats.map((item, index) => (
//           <div key={index} className="seat-row">
//             {item.map((seat) => (
//               <Seat
//                 number={seat.number}
//                 isOccupied={seat.isOccupied}
//                 isSelected={seat.number === selectedSeatNumber}
//                 onSelect={handleSeatSelect}
//                 key={seat.number}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//       <button
//         className="btn"
//         type="button"
//         onClick={handleBuy}
//         disabled={selectedSeatNumber === null}
//       >
//         Rezervovat
//       </button>
//     </div>
//   );
// };

// export default SeatPicker;

// 10.7 Pomocí naší history proměnné, její metody push a hodnoty reservationId přesměrujte uživatele na stránku detailu rezervace. Takové volání bude může vypadat následovně: history.push(`/reservation/${reservationId}`);
// 10.8 Zkontrolujte, že po vybrání sedadla a kliknutí na tlačíko „Rezervovat" se stránka přesměruje například na adresu http://localhost:8080/reservation/FwQBAAMcgLs kde záhy vytvoříme detail jízdenky!
import { useHistory } from 'react-router-dom';

const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  const history = useHistory();
  const handleBuy = () => {
    fetch(
      `https:/leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => history.push(`/reservation/${json.data.reservationId}`));
  };
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((item, index) => (
          <div key={index} className="seat-row">
            {item.map((seat) => (
              <Seat
                number={seat.number}
                isOccupied={seat.isOccupied}
                isSelected={seat.number === selectedSeatNumber}
                onSelect={handleSeatSelect}
                key={seat.number}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="btn"
        type="button"
        onClick={handleBuy}
        disabled={selectedSeatNumber === null}
      >
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
