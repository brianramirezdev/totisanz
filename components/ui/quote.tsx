interface QuoteProps {
    title: string;
    subtitle?: string;
    className?: string;
    leftLine?: boolean;
}

export default function Quote({ title, subtitle, className, leftLine = false }: QuoteProps) {
    return (
        <div
            className={`
        ${className ?? ''}
        ${leftLine ? 'border-l-4 border-accent-orange pl-6' : ''}
      `}
        >
            <blockquote className="italic font-light leading-snug text-gray-700">“{title}”</blockquote>

            {subtitle && <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wider text-gray-500">{subtitle}</p>}
        </div>
    );
}
