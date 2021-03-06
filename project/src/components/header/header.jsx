import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MAIN, LOGIN, FAVORITES } from '../../constants/route-pathes';
import { AuthorizationStatus } from '../../constants/authorization-status';

function Header ({ authInfo, authorizationStatus }) {
  const { email } = authInfo;
  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={ MAIN }>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isLogged
                  ? (
                    <Link className="header__nav-link header__nav-link--profile" to={ FAVORITES }>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{email}</span>
                    </Link>)
                  : (
                    <Link className="header__nav-link header__nav-link--profile" to={ LOGIN }>
                      <span className="header__login">Sign in</span>
                    </Link>)}
              </li>
              {isLogged && (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authInfo: PropTypes.shape({
    email: PropTypes.string,
  }),
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
  authorizationStatus: state.authorizationStatus,
});

export { Header };
export default connect(
  mapStateToProps,
  null,
)(Header);
