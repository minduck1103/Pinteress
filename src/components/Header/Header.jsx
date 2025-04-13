import "./Header.css"
import {useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NAV__LINKS = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Monochromatic",
        url: "/t/monochromatic",
    },
    {
        display: "Wallpapers",
        url: "/t/wallpapers",
    },
    {
        display: "3D Renders",
        url: "/t/3d-renders",
    },
    {
        display: "Nature",
        url: "/t/nature",
    },
    {
        display: "Textures & Patterns",
        url: "/t/textures-patterns",
    },
    {
        display: "Architecture & Interiors",
        url: "/t/architecture-interior",
    },
    {
        display: "Film",
        url: "/t/film",
    },
    {
        display: "Street Photography",
        url: "/t/street-photography",
    },
    {
        display: "Experimental",
        url: "/t/experimental",
    },
    {
        display: "Animals",
        url: "/t/animals",
    }
];

const Header = () => {
    let navigate = useNavigate();
    useEffect(() => {
        const inputElement = document.getElementById('myInput');
        const handle = () => {

            const inputValue = inputElement.value;
            inputElement.setSelectionRange(inputValue.length, inputValue.length)
        }
        inputElement.addEventListener('click', handle);
        return () => {
            inputElement.removeEventListener('click', handle);
        }
    });

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const stringWithDashes = event.target.value.replace(/\s+/g, "-");
            
            return navigate("/s/" + stringWithDashes);
        }   
      }
    return (
        <>
            <header className="header" >
                <div className="navigation">
                    <img src="https://unsplash.com/assets/core/logo-black-ddbdd505b663faadbc1e1731369f0929b2616886cb1d7fe11237c473bba02a50.svg" alt="" className="logo" />
                    <input type="search" placeholder="" id="myInput" spellcheck="false" onKeyDown={handleKeyDown}/>
                    <ul className="nav__list">
                        {NAV__LINKS.map((item, index) => (
                            <li className="nav__item" key={index}>
                                <NavLink
                                    to={item.url}
                                    className={(navClass) =>
                                        navClass.isActive ? "active" : ""
                                    }
                                >
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;