export function SectionPreTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="inline-flex items-center text-sm font-medium text-accent">
      <span className="h-px w-8 bg-accent mr-2"></span>
      {children}
    </div>
  );
}
