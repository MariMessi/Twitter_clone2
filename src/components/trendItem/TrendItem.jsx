import "./index.css";

const TrendItem = ({ trendData }) => {
  const { title, abstract, byline, hashtag } = trendData;
    
  return (
    <div className="TrendItem">
       <span className="hashtag">{hashtag}</span>
       <h3 className="title">{title}</h3>
       <span className="byline">{byline}</span>
       <p className="abstract">{abstract}</p>

    </div>
    );
};

export default TrendItem;