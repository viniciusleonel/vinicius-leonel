import Image from 'next/image';
import { useState } from 'react';
import moonIcon from '../../../../public/images/icons/moon.svg';
import sunIcon from '../../../../public/images/icons/sun-svgrepo-com.svg';
import lightsOnIcon from '../../../../public/images/icons/lights-on.svg';
import lightsOffIcon from '../../../../public/images/icons/lights-off.svg';

export default function ToggleButton (){

    window.onload = () => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const [lightsOff, setLightsOff] = useState(true)
    const [lightsOn, setLightsOn] = useState(false)
    const [moon, setMoon] = useState(true)
    const [sun, setSun] = useState(false)

    function toogleIcon() {
        setMoon(!moon)
        setSun(!sun)
    }

    return (
        <div className=" rounded-full bg-white flex items-center justify-center">
            <button onClick={toogleIcon} className='flex items-center justify-center'>
                {moon && (
                    <Image
                    src={moonIcon} 
                    alt="Descrição da imagem" 
                    className=' size-8 flex justify-start'
                >
                </Image>
                )}

                {sun && (
                    <Image
                    src={sunIcon} 
                    alt="Descrição da imagem" 
                    className=' size-8 flex justify-start'
                >
                </Image>
                )}
            </button>
            
        </div>
    )
}


// // ToggleButton.jsx
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import moonIcon from '../../../../public/images/icons/moon.svg';
// import sunIcon from '../../../../public/images/icons/sun-svgrepo-com.svg';

// export default function ToggleButton() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const currentTheme = localStorage.getItem('theme');
//         if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             setIsDarkMode(true);
//         }
//     }, []);

//     const toggleDarkMode = () => {
//         const newTheme = isDarkMode ? 'light' : 'dark';
//         localStorage.setItem('theme', newTheme);
//         setIsDarkMode(!isDarkMode);
//     };

//     return (
//         <div className=' rounded-full flex items-center justify-center'>
//             <button onClick={toggleDarkMode} className="flex items-center justify-center">
//                 <Image
//                     src={isDarkMode ? moonIcon : sunIcon}
//                     alt={isDarkMode ? 'Ícone da lua' : 'Ícone do sol'}
//                     width={32}
//                     height={32}
//                 />
//             </button>
//         </div>
//     );
// }
