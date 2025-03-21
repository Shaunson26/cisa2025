'use client';

import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
  description?: string;
  link?: string;
}

export function SpeakerCard({
  name,
  title,
  institution,
  imageUrl,
  description,
  link,
}: SpeakerCardProps) {
  return (
    <div className="group flex flex-col items-center space-y-4">
      <div className="relative h-48 w-48 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-bold">{name}</h3>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        <p className="text-sm text-muted-foreground">{institution}</p>
      </div>

      {/* Description and link - shown on hover */}
      <div className="
        text-center transition-all duration-300 ease-in-out max-w-sm
        opacity-0 max-h-0 overflow-hidden
        group-hover:opacity-100 group-hover:max-h-[1000px]
      ">
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}
