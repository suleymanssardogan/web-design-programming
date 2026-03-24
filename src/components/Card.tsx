import React from 'react';

interface CardProps {
    title: string;
    children: React.ReactNode;
    variant?: 'elevated' | 'outline' | 'flat';
    image?: string;
    imageAlt?: string;
}

export default function Card({ title, children, variant = 'elevated', image, imageAlt }: CardProps) {
    const baseClasses = "rounded-lg overflow-hidden";
    const variantClasses = {
        elevated: "shadow-md bg-white dark:bg-gray-800",
        outline: "border border-gray-200 dark:border-gray-700",
        flat: "bg-gray-50 dark:bg-gray-900"
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]}`}>
            {image && (
                <img src={image} alt={imageAlt || title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
                {children}
            </div>
        </div>
    );
}
