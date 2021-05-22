import React, { useState, useEffect } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const CityOptions = ({ cities }) => (
  <>
    <option value="">Vyberte</option>
    {cities.map((city) => (
      <option key={city.code} value={city.code}>
        {city.name}
      </option>
    ))}
  </>
);

const DatesOptions = ({ dates }) => (
  <>
    <option value="">Vyberte</option>
    {dates.map((date) => (
      <option key={date}>{date}</option>
    ))}
  </>
);

// Při kliknutí na tlačítko „Vyhledat spoj“ se volá funkce handleSubmit, která vypíše údaje zadané uživatelem. Nyní výpis do konzole nahradíte voláním API. Bude se volat následující API endpoint
// https://leviexpress-backend.herokuapp.com/api/journey?fromCity=…&toCity=…&date…
// Vytečkovaná místa se nahradí hodnotami vybranými uživatelem.
// Volání tohoto API vrací JSON s nalezenými spoji. Vypište si výstup do konzole prohlížeče.

// Nalezená spojení budeme potřebovat zobrazit v další komponentě na stránce. Potřebujeme je tedy poslat z komponenty JourneyPicker jejímu rodiči. V komponentě JourneyPicker bude property onJourneyChange, do které rodič vloží funkci, která se zavolá s údaji nalezeném spoji. Upravte hlavičku funkce JourneyPicker tak, aby bylo vidět, že akceptuje property onJourneyChange.

// Ve funkci handleSubmit máte nyní výpis nalezených spojení do konzole prohlížeče. Tento výpis nahraďte voláním funkce uložené v property onJourneyChange, které jako paramter předáte data získaná z volání API. Pozor na to, že z vráceného výsledku se použije jenom jeho část – to, co je uložené pod klíčem data.

//Vraťte se do komponenty Home, ze které se volá komponenta JourneyPicker. V komponentě Home vytvořte pomocí useState nový stav journey, výchozí hodnota bude null.

// Propojte komponentu JourneyPicker se stavem journey – když komponenta JourneyPicker zavolá onJourneyChange s údaji o nalezeném spoji, nastaví se toto spojení do stavu journey.
// Upravte komponentu Home tak, aby v případě, kdy ve stavu journey je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude id z dat o nalezeném spojení.

// Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá nějaké spojení a vypíše se do stránky jeho id.

const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((resp) => resp.json())
      .then((json) => onJourneyChange(json.data));
  };
  // onJourneyChange(json.data)
  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((resp) => resp.json())
      .then((json) => setDates(json.data));
  }, []);

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              onClick={handleSubmit}
              className="btn"
              type="submit"
              disabled={
                date === '' || toCity === '' || fromCity === '' ? true : false
              }
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
export default JourneyPicker;
