import React from 'react';
import './style.css';

// Komponenta BusStop bude očekávat tři props – name, station a time. Tam, kde používáte komponentu BusStop, přidejte komponentě odpovídající atributy a nastavte jim hodnoty „Praha“, „ÚAN Florenc“ a „15:55“. Komponentu BusStop upravte tak, aby se tyto hodnoty propsaly na správná místa v HTML. Zkontrolujte, že se v prohlížeči zobrazují správné údaje pro jednu zastávku.

const BusStop = ({ name, station, time }) => {
  return (
    <>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">{name}</div>
          <div className="bus-stop__station">{station}</div>
        </div>
        <div className="bus-stop__departure">{time}</div>
      </div>
    </>
  );
};

export default BusStop;
