export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-neutral-100">
      {children}
    </div>
  );
}
