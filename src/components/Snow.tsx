import './Snow.css';

const Snow = () => {
  return (
    <div className="snowfall">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 4 + 3; // Random size between 3-7px
        return (
          <div key={i} className="snowflake" style={{
            left: `${Math.random() * 100}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${Math.random() * 4 + 4}s`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        );
      })}
    </div>
  );
};

export default Snow; 