import Image from "next/image"

export function SponsorGrid() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center py-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center justify-center group">
          <div className="relative h-16 w-32 overflow-hidden rounded-md border bg-background p-2 transition-all duration-300 hover:shadow-md">
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt={`Sponsor ${i + 1}`}
              fill
              className="object-contain p-2 grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

