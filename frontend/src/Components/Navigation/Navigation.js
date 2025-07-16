import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>USER</h2>
                    <p className='yourMoney'>Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        <i>{item.icon}</i>
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                {/* <li>
                    {signout} Sign Out
                </li> */}
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-size: 1.8rem;
            font-weight: 900;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav li{
        font-size: 1.8rem;
    }


@media (min-width: 900px) and (max-width: 1300px) 
{
        padding: 1rem 2rem;
        width: 100%;
        height: 8%;
        dispaly: flex;
        flex-direction: row;
        // justify-content: center;
        align-items: center;

    .user-con
    {
        padding: auto 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            display: none;
        }
    }

    .menu-items, .bottom-nav
    {
        flex-direction: row;
        justify-content: center;
        gap: 1.5vw;
        li{
            font-size: 1.8vw;
            font-weight: 900;
        }
        i{
            font-size: 2.3vw;
        }
    }

    p,h2
    {
        font-size: 2vw;
    }
}


@media (min-width: 500px) and (max-width: 900px) 
{
        padding: 1rem 2rem;
        width: 100%;
        height: 8%;
        dispaly: flex;
        flex-direction: row;
        // justify-content: center;
        align-items: center;

    .user-con
    {
        padding: auto 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            display: none;
        }
    }

    .menu-items, .bottom-nav
    {
        flex-direction: row;
        justify-content: center;
        gap: 1.5vw;
        li{
            font-size: 2.5vw;
            font-weight: 900;
        }
        i{
            font-size: 2vw;
        }
    }

    p,h2
    {
        font-size: 2vw;
    }
}

@media (min-width: 300px) and (max-width: 500px) 
{
        padding: 1rem 2rem;
        width: 100%;
        height: 6%;
        dispaly: flex;
        flex-direction: row;
        // justify-content: center;
        align-items: center;

    .user-con
    {
        padding: auto 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            display: none;
        }
    }

    .menu-items, .bottom-nav
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:1rem;
        li{
            text-align: right;
            font-size: 2.5vw;
        }
        i{
            display: none;
        }
    }

    p,h2
    {
        font-size: 1.8vw;
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        &::before{
            display: none;
        }
    }
}
    
`;

export default Navigation