import React from 'react';
import './style.css';

// const Seat = () => (
//   <button className="seat" type="button">
//     <svg className="seat__in" viewBox="0 0 100 100">
//       <rect
//         fill="#69bffc"
//         width="75"
//         height="70"
//         x="20"
//         y="15"
//         ry="10"
//         rx="10"
//       ></rect>
//       <path
//         fill="#666"
//         d="m 22.888567,10.000319 a 3.2175668,3.2771011 0 0 0 -2.887349,1.753582 4.8263502,4.9156518 0 0 0 -1.24731,1.436783 c -2.816103,4.766542 -5.009942,9.611367 -6.654421,14.518286 a 8.0439172,8.192753 0 0 0 -4.5336774,5.011154 c -3.4210738,10.453104 -3.4210899,24.106617 0,34.559721 A 8.0439172,8.192753 0 0 0 12.580192,72.5246 c 1.56453,4.664487 3.581872,9.355123 6.054324,14.067091 a 4.8263502,4.9156518 0 0 0 1.354139,1.641598 3.2175668,3.2771011 0 0 0 2.899912,1.766377 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 H 27.664166 A 4.8263502,4.9156518 0 0 0 27.145771,81.958136 C 24.934783,77.744451 23.135668,73.643323 21.722943,69.625425 a 8.0439172,8.192753 0 0 0 1.102791,-7.526339 c -1.386294,-4.235836 -1.386294,-19.959123 0,-24.195008 a 8.0439172,8.192753 0 0 0 -1.426397,-7.881525 c 1.430033,-3.917252 3.299542,-7.828917 5.623889,-11.76311 a 4.8263502,4.9156518 0 0 0 0.653503,-1.705577 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 z"
//       ></path>
//       <text className="seat__number" x="35" y="62.484478">
//         33
//       </text>
//     </svg>
//   </button>
// );

// export default Seat;

// V komponentě Seat použijte property number pro zobrazení čísla sedadla. To se zobrazuje uvnitř elementu svg v elementu text. Ověřte v prohlížeči, že se zobrazují sedadla s různými čísly.
// Dále nastavte třídy pro tlačítko v komponentě Seat. Tlačítko vždy musí mít třídu seat. Pokud je sedadlo obsazené, musí mít navíc třídu seat--occupied. Pokud je sedadlo vybrané (property iSelected je nastavena na true), bude mít nastavenu vedle seat také třídu seat--selected.

// Tlačítku ještě nastavte atribut disabled – pokud je sedadlo obsazené, nepůjde na tlačítko kliknout. Zkontrolujte chování v prohlížeči.

// const Seat = ({ number, isOccupied, isSelected }) => (
//   <button
//     className={`seat ${isOccupied ? 'seat--occupied' : ''} ${
//       isSelected ? 'seat--selected' : ''
//     } `}
//     type="button"
//     disabled={isOccupied}
//   >
//     <svg className="seat__in" viewBox="0 0 100 100">
//       <rect
//         fill="#69bffc"
//         width="75"
//         height="70"
//         x="20"
//         y="15"
//         ry="10"
//         rx="10"
//       ></rect>
//       <path
//         fill="#666"
//         d="m 22.888567,10.000319 a 3.2175668,3.2771011 0 0 0 -2.887349,1.753582 4.8263502,4.9156518 0 0 0 -1.24731,1.436783 c -2.816103,4.766542 -5.009942,9.611367 -6.654421,14.518286 a 8.0439172,8.192753 0 0 0 -4.5336774,5.011154 c -3.4210738,10.453104 -3.4210899,24.106617 0,34.559721 A 8.0439172,8.192753 0 0 0 12.580192,72.5246 c 1.56453,4.664487 3.581872,9.355123 6.054324,14.067091 a 4.8263502,4.9156518 0 0 0 1.354139,1.641598 3.2175668,3.2771011 0 0 0 2.899912,1.766377 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 H 27.664166 A 4.8263502,4.9156518 0 0 0 27.145771,81.958136 C 24.934783,77.744451 23.135668,73.643323 21.722943,69.625425 a 8.0439172,8.192753 0 0 0 1.102791,-7.526339 c -1.386294,-4.235836 -1.386294,-19.959123 0,-24.195008 a 8.0439172,8.192753 0 0 0 -1.426397,-7.881525 c 1.430033,-3.917252 3.299542,-7.828917 5.623889,-11.76311 a 4.8263502,4.9156518 0 0 0 0.653503,-1.705577 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 z"
//       ></path>
//       <text className="seat__number" x="35" y="62.484478">
//         {number}
//       </text>
//     </svg>
//   </button>
// );

// export default Seat;

//Nastal čas pro zprovoznění komunikace mezi potomkem a rodičem, mezi Seat a SeatPicker. Komponenta Seat očekává property onSelect. V této property bude funkce, kterou Seat zavolá, když uživatel klikne na tlačítko. Jako parametr funkci předejte číslo sedadla.

const Seat = ({ number, isOccupied, isSelected, onSelect }) => (
  <button
    className={`seat ${isOccupied ? 'seat--occupied' : ''} ${
      isSelected ? 'seat--selected' : ''
    } `}
    type="button"
    disabled={isOccupied}
    onClick={() => onSelect(number)}
  >
    <svg className="seat__in" viewBox="0 0 100 100">
      <rect
        fill="#69bffc"
        width="75"
        height="70"
        x="20"
        y="15"
        ry="10"
        rx="10"
      ></rect>
      <path
        fill="#666"
        d="m 22.888567,10.000319 a 3.2175668,3.2771011 0 0 0 -2.887349,1.753582 4.8263502,4.9156518 0 0 0 -1.24731,1.436783 c -2.816103,4.766542 -5.009942,9.611367 -6.654421,14.518286 a 8.0439172,8.192753 0 0 0 -4.5336774,5.011154 c -3.4210738,10.453104 -3.4210899,24.106617 0,34.559721 A 8.0439172,8.192753 0 0 0 12.580192,72.5246 c 1.56453,4.664487 3.581872,9.355123 6.054324,14.067091 a 4.8263502,4.9156518 0 0 0 1.354139,1.641598 3.2175668,3.2771011 0 0 0 2.899912,1.766377 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 H 27.664166 A 4.8263502,4.9156518 0 0 0 27.145771,81.958136 C 24.934783,77.744451 23.135668,73.643323 21.722943,69.625425 a 8.0439172,8.192753 0 0 0 1.102791,-7.526339 c -1.386294,-4.235836 -1.386294,-19.959123 0,-24.195008 a 8.0439172,8.192753 0 0 0 -1.426397,-7.881525 c 1.430033,-3.917252 3.299542,-7.828917 5.623889,-11.76311 a 4.8263502,4.9156518 0 0 0 0.653503,-1.705577 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 z"
      ></path>
      <text className="seat__number" x="35" y="62.484478">
        {number}
      </text>
    </svg>
  </button>
);

export default Seat;
