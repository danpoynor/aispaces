export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      {children}
    </div>
  );
}
