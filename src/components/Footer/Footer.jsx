import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} This Gatsby website is based on a template by Jacobo
          Martinez: . Google Play and the Google Play logo are trademarks of Google LLC.
          <a
            href="https://github.com/cobidev/gatsby-simplefolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simplefolio
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
