import { ComponentType } from 'react';

type SocialLink = {
    name: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
};

type SocialLinksProps = {
    links: SocialLink[];
    size?: 'sm' | 'md' | 'lg';
    dark?: boolean;
};

const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
};

const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
};

export default function SocialLinks({ links, size = 'md', dark = false }: SocialLinksProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {links.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`
                        ${sizeClasses[size]}
                        flex items-center justify-center
                        rounded-lg
                        border-2
                        transition-all
                        ${dark ? 'border-white/20 text-gray-300 hover:bg-orange-500/10' : 'border-gray-500 text-gray-700 hover:bg-orange-50'}
                        hover:border-orange-500
                        hover:text-orange-500
                    `}
                >
                    <Icon className={iconSizes[size]} />
                </a>
            ))}
        </div>
    );
}
