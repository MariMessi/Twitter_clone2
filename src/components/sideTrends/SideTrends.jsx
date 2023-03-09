import "./index.css";
import TrendList from "../trendList";
import { useRef } from 'react';

//Esercizio 09-03-2023 - useRef
//ho provato, con scarsi risultati, a far inserire del testo all'utente nella sezione side trends,
//quello che ho ottenuto è stata la mia app che spariva.





const SideTrends = () => {
  
    const textInput = useRef();
    focusTextInput = () => textInput.current.focus();
  

    return (
    <div className="SideTrends">
    <div className="SideTrends_up">
    <input className="cerca"
    type="text"
    ref={textInput}
    placeholder="Scrivi qualcosa" />
    <button className="search" onClick={focusTextInput}>Cerca</button>
    </div>
    <div className="SideTrends_down">
        <h2 className="sideTrendsh2">Trends for You</h2>    
    <TrendList />
    </div>
</div>
    );

};

export default SideTrends;
