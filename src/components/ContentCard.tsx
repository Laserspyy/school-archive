import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from "lucide-react"

interface ContentCardProps {
  title: string
  description?: string
  icon: ReactNode
  type: string
  duration?: string
  views?: number
  onClick?: () => void
}

export function ContentCard({ 
  title, 
  description, 
  icon, 
  type, 
  duration, 
  views, 
  onClick 
}: ContentCardProps) {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-card bg-card border-border/50"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="text-base font-medium">{title}</CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs">
                {type}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          )}
          {views && (
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views} views</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}