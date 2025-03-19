import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
}

export function SpeakerCard({
  name,
  title,
  institution,
  imageUrl,
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
        <p className="text-sm text-muted-foreground">{institution}</p>
      </div>
    </div>
  );
}
