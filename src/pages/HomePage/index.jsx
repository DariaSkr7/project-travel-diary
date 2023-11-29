import { useEffect } from 'react';
import './style.css';

export const HomePage = () => {
  useEffect(() => {
    document.body.className = 'image-background';
  }, []);
  return (
    <div className="home-page">
      <h1>Travel, Write, Repeat.</h1>
      <p>
        Don't let the world's chaos deter you, <br />
        let the wanderlust within you guide you.
      </p>
      <a href="/dashboard">EXPLORE →</a>
    </div>
  );
};
