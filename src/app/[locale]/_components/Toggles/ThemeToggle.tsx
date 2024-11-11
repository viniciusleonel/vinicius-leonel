import { Howl } from 'howler';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";
import { IoBulbOutline, IoBulbSharp } from "react-icons/io5";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    const clickOn = '/sounds/clickOn.wav';
    const clickOff = '/sounds/clickOff.wav';

    const playClickSound = (audio: string) => {
        const sound = new Howl({
            src: [audio], 
            volume: 0.5, 
        });
        sound.play();
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <IoBulbOutline className=' animate-pulse  text-yellow-400' />
        );
    }

    return (
        <div className='mt-1'>
            {resolvedTheme === 'dark' ? (
                <button onClick={() => { setTheme('light'); playClickSound(clickOn);}} 
                className='transition duration-500  '>
                    <IoBulbOutline className='dark:hover:text-yellow-400' />
                </button>
            ) : (
                <button onClick={() => { setTheme('dark'); playClickSound(clickOff);}} 
                className='transition duration-500 '>
                    <IoBulbSharp className=" text-yellow-400" />
                </button>
            )}
        </div>
    );
}
