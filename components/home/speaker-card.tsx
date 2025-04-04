'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push('/speakers')}
      className="group relative cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-4 transition-all duration-300 group-hover:scale-105">
        <div className="relative h-48 w-48 overflow-hidden rounded-xl">
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
          <p className="text-sm">{title}</p>
          <p className="text-sm text-tertiary">{institution}</p>
        </div>
      </div>
    </div>
  );
}
