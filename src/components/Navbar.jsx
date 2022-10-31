import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div key="List-con">
      <NavList key="list">
        {LINKS.map(item => (
          <li key={`${item.to}-con-inner`}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
              key={item.to}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Navbar);
