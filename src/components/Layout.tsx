import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 flex items-center border-b bg-card px-6">
        <div className="flex-1">
          <h1 className="font-semibold text-lg text-foreground">EduCenter</h1>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}