import './Snow.css';

const Snow = () => {
  const snowflakes = Math.floor(Math.random() * 500 + 50);
  return (
    <div className="snowfall">
      {[...Array(snowflakes)].map((_, i) => {
        const size = Math.random() * 4 + 3;
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