import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface FolderCardProps {
  title: string
  description?: string
  icon: ReactNode
  onClick?: () => void
  itemCount?: number
  variant?: "default" | "subject" | "content"
}

export function FolderCard({ 
  title, 
  description, 
  icon, 
  onClick, 
  itemCount,
  variant = "default" 
}: FolderCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "subject":
        return "bg-education-green-light hover:bg-education-green-light/80 border-education-green/20"
      case "content":
        return "bg-folder-bg hover:bg-folder-hover border-education-blue/20"
      default:
        return "bg-gradient-card hover:shadow-card border-primary/10"
    }
  }

  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:scale-[1.02] shadow-folder ${getVariantStyles()}`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
              {itemCount !== undefined && (
                <p className="text-xs text-muted-foreground mt-1">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        </div>
      </CardContent>
    </Card>
  )
}