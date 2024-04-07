import { Howl } from 'howler';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";
import { IoBulbOutline, IoBulbSharp } from "react-icons/io5";

export default function ToggleButton() {
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
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={24}
                height={24}
                sizes="24x24"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        );
    }

    return (
        <div className='pt-2'>
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
