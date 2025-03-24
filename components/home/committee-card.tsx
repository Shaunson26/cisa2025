
export function CommitteeCard({name, affiliation}: {name: string, affiliation: string}){
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate">{name}</h3>
          <p className="text-sm text-muted-foreground truncate">{affiliation}</p>
        </div>
      </div>
    )
}