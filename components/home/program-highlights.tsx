export function ProgramHighlightsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary mr-2"></span>
              PROGRAM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Program Highlights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our diverse range of sessions and workshops
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Keynote Presentations</h3>
              <p className="mt-2 text-muted-foreground">
                Thought-provoking talks from industry leaders and academic
                pioneers
              </p>
            </div>
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Panel Discussions</h3>
              <p className="mt-2 text-muted-foreground">
                Engaging debates on current challenges and future directions
              </p>
            </div>
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Workshops</h3>
              <p className="mt-2 text-muted-foreground">
                Hands-on sessions to develop practical skills and knowledge
              </p>
            </div>
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Poster Sessions</h3>
              <p className="mt-2 text-muted-foreground">
                Showcase of cutting-edge research and innovations
              </p>
            </div>
          </div>
          <Button variant="outline" className="mt-4 gap-1 rounded-full">
            View Full Program
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
