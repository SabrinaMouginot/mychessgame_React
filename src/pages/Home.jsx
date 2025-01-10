import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur MyChessGame</h1>
      <Link to="/game">Start</Link>
    </div>
  );
};

export default Home;