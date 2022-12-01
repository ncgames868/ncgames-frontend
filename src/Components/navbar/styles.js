import styled from 'styled-components'

export const Header = styled.header`
  height: 100px;
  width: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
`
export const Nav = styled.nav`
  background: white;
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogo = styled.div`
margin-left: 20px;
  img {
    width: 100%;
    max-width: 200px;
    cursor: pointer;
    transition: transform .2s ease;
    :hover {
      transform: scale(1.02);
    }
    :active {
      transform: scale(.98);
    }
  }
`
export const HeaderLinks = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin: 0 20px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    a {
      font-size: 20px;
      padding: 0px 12px;
      transition: transform 0.3s ease;
      :hover {
        transform: scale(1.04);
      }
    }
  }
  .hamburger__btn {
    cursor: pointer;
    transition: transform 0.3s ease;
    :hover {
      transform: scale(1.04);
    }
    :active {
      transform: scale(.96);
    }
  }
  .hamburger__menu {
    background: #141518;
    position: absolute;
    top: 0;
    left: -1000px;
    margin: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: left 1s;
    .hamburger__menu-links {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
      li > a {
        color: black;
        font-size: 30px;
        text-decoration: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }
  .visible {
    left: 0;
  }
  @media (min-width: 600px) {
    display: flex;
    list-style: none;
    li {
      margin: 0;  
      align-items: center;
      a {
        color: white;
        font-size: 20px;
        padding: 0px 12px;
        transition: transform 0.3s ease;
        :hover {
          transform: scale(1.04);
        }
      }
    }
    .hamburger__btn {
      display: none;
    }
    .hamburger__menu {
      background: none;
      position: initial;
      margin: 0;
      width: 50%;
      z-index: 15;
      height: 100%;
      .hamburger__menu-links {
        margin: 0;
        flex-direction: row;
        gap: 0;
        li {
          margin: 0;
          a {
            svg {
              width: 25px;
              height: 25px;
            }
            gap: 4px;
            font-size: 16px;
          }
        }
      }
    }
  }
`