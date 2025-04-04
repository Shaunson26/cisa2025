
export function CommitteeCard({name, affiliation}: {name: string, affiliation: string}){
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg border bg-primary text-primary-foreground">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate">{name}</h3>
          <p className="text-xs text-tertiary truncate">{affiliation}</p>
        </div>
      </div>
    )
}