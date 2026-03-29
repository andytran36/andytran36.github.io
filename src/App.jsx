import { useEffect, useRef } from 'react';

export default function App() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    let prevScrollPos = window.scrollY;

    const onScroll = () => {
      if (!navbar) return;
      if (window.innerWidth <= 768) {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = '-60px';
        }
        prevScrollPos = currentScrollPos;
      } else {
        navbar.style.top = '0';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="navbar" ref={navbarRef}>
        <ul>
          <li>
            <a href="#">andyTran</a>
          </li>
          <li>
            <a href="#about">.about</a>
          </li>
        </ul>
      </nav>

      <div id="welcome">
        <img id="profile" src="/files/portrait.jpg" alt="" />
        <h1>Hi there! I'm Andy Tran</h1>
        <p>
          <i>Software Developer</i>
        </p>
      </div>

      <div id="main">
        <div id="about">
          <div>
            <h2>A Little Bit About Me</h2>
            <p>
              I graduated with a Bachelor's degree in <strong>Software Engineering</strong> at
              the{' '}
              <a href="https://www.ucalgary.ca">
                <strong>University of Calgary</strong>
              </a>{' '}
              in Alberta, Canada.
            </p>

            <p>
              I have been working profesionally as a software developer at <strong>WestJet</strong>{' '}
              since 2021, primarily focused on front-end development.
            </p>
            <p>
              Some of my interests include
              <strong> weightlifting, video games, and music.</strong> <br />
              I have been actively weightlifting since 2014, it's been an outlet for my energy and
              keeps me active in a field where we normally don't get much physical activity.
            </p>
            <div id="about-buttons">
              <a className="button" href="/files/resume.pdf" target="_blank" rel="noreferrer">
                <span>MY RESUME</span>
              </a>
              <a className="button" href="mailto:andytran636@gmail.com">
                <span>EMAIL ME</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav id="socials">
        <a href="https://www.github.com/andytran36" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/andytran36" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/andytran36" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/andytran36" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.twitter.com/andytran36" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </nav>

      <footer>
        <a href="https://github.com/andytran36/andytran36.github.io">Built by Andy Tran</a>
      </footer>
    </>
  );
}
