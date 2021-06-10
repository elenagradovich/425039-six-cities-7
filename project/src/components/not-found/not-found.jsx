import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from '../../constants/route-pathes';

function NotFound() {
  return (
    <div style={{fontSize: '32px', color: '#4481c3', textAlign:'center', marginTop: '10%'}}>
      <p style={{fontSize: '100px', padding: '0', margin: '0'}}>404</p>
      <p>Page not found</p>
      <Link
        to={ MAIN }
        style={
          {
            display: 'inline-block',
            textShadow: '1px 0 0, 0.5px 0 0, -1px 0 0',
            color: '#fff',
            backgroundColor: '#4481c3',
            padding: '9px 21px 6px 11px',
            fontWeight: '900',
            fontStyle: 'oblique',
            transform: 'skew(-15deg)',
            borderRadius: '3px',
            transition: 'background .3s,color .3s,text-shadow .3s'}
        }
      >
        <span>Back to Main page</span>
      </Link>
    </div>
  );
}

export default NotFound;
