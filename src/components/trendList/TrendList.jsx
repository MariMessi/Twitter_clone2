import trendList from "../../trendList/trendList";
import TrendItem from "../trendItem";
import "./index.css";

const TrendList = ({trendData}) => {
    return (
        <div className="TrendList">
        {trendList.map((trend) => (
            <TrendItem trendData = {trend} />
        ))}
        </div>
    );
};

export default TrendList;