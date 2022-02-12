import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  return (
    <header className="header-container">
      <img
        className="vote-image"
        src={voteImage}
        alt="vote"/>
      <h1 className="app-name">My Voice, My Vote</h1>
      <button
        className="our-story-button header-button">
        Our Story
      </button>
      <button
        className="en-espanol-button header-button">
        En Español
      </button>
    </header>
  );
}

export default Header;
