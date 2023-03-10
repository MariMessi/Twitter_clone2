import "./index.css";
import TrendList from "../trendList";






const SideTrends = () => {
  

    return (
    <div className="SideTrends">
    <div className="SideTrends_up">
    <input className="cerca"
    type="text"
    placeholder="Scrivi qualcosa" />
    <button className="search">Cerca</button>
    </div>
    <div className="SideTrends_down">
        <h2 className="sideTrendsh2">Trends for You</h2>    
    <TrendList />
    </div>
</div>
    );

};

export default SideTrends;
