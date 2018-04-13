import * as React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <div>
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
        </div>
      </nav>
      <main>
        {props.children}
      </main>
      <footer id="footer" >
        <b>Copyright © 2018 <a href="https://github.com/paulorsouza">Foo</a></b>.
        <span className="is-hidden-mobile">Nenhum direito reservado.</span>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
