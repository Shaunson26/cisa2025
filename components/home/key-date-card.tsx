interface KeyDateCardProps {
    title: string;
    date: string;
    children: React.ReactNode
  }

export function KeyDateCard({title, date, children}: KeyDateCardProps) {
  return (
    <div className="group flex flex-col items-center space-y-2 rounded-xl border bg-card p-6 shadow-sm text-card-foreground">
      <div className="flex h-12 w-12 items-center justify-center rounded-full">
        <div className="h-6 w-6 text-accent">
            {children}
        </div>
      </div>
      <h3 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: title}}/> 
      <p className="text-sm text-tertiary">{date}</p>
    </div>
  );
}
