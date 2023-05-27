import React from 'react';
import styled from'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'


function navbar(){
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
return (
<>
<NavContainer>
<h2> Hola soy el navbar <span>responsive</span></h2>
<div className={`links ${clicked ? 'active' : ''}`}>
<a onClick={handleClick} href="home">Home</a>
<a onClick={handleClick} href="shop">Shop</a>
<a onClick={handleClick} href="cart">Cart</a>
<a onClick={handleClick}href="login">Login</a>
</div>
<div className='burguer'>
<burguerbutton clicked={clicked} handleClick={handleClick} />
</div>
<BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
</NavContainer>
</>
)
}

export default navbar
const NavContainer = styled.nav`
h2{
  color: #ffffff;
  font-wigth: 400;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;

a{
  color: #ffffff;
  text-decoration: none;
  margin-right: 1rem;
}

.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  a{
    color: #021533;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
    display: block;
  }
}

.links.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: #2866D9;
  }
}

.burguer{
  @media(min-width: 768px){
    display: none;
  }

  const BgDiv = styled.div`
  background-color: #B3D0FF;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`