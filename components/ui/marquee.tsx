import React from 'react';

type MarqueeProps = {
    text: string;
    className?: string;
    itemClassName?: string;
    repeat?: number;
    border?: boolean;
    speed?: 'slow' | 'normal' | 'fast' | 'sonic';
    dark?: boolean;
    xl?: boolean;
    reverse?: boolean;
};

const SPEED_CLASS_MAP: Record<NonNullable<MarqueeProps['speed']>, string> = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee-normal',
    fast: 'animate-marquee-fast',
    sonic: 'animate-marquee-sonic',
};

const Marquee: React.FC<MarqueeProps> = ({ text, className = '', itemClassName = '', repeat = 2, border, speed = 'normal', dark, xl, reverse }) => {
    return (
        <div className={`overflow-hidden ${border && `border-y py-4 md:py-6 ${dark ? 'border-gray-50' : 'border-gray-900'}`} ${className} `}>
            <div className={`flex w-max ${SPEED_CLASS_MAP[speed]} ${reverse && 'animate-marquee-reverse'}`}>
                {Array.from({ length: repeat }).map((_, i) => (
                    <h2
                        key={i}
                        className={`text-nowrap font-bold text-4xl md:text-7xl lg:text-8xl ${xl && 'text-6xl xl:text-9xl'}   ${
                            dark ? 'text-gray-50' : 'text-gray-900'
                        } ${itemClassName}`}
                    >
                        {text}&nbsp;
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
