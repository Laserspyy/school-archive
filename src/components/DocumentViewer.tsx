import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Download,
  X,
  FileText,
  Clock,
  GraduationCap
} from "lucide-react"

interface DocumentViewerProps {
  isOpen: boolean
  onClose: () => void
  document: {
    title: string
    description: string
    type: string
    duration: string
    maxMarks?: number
    sections?: number
    totalQuestions?: number
    pages: string[]
  }
}

export function DocumentViewer({ isOpen, onClose, document }: DocumentViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [zoom, setZoom] = useState(1)

  const nextPage = () => {
    if (currentPage < document.pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.25, 3))
  }

  const zoomOut = () => {
    setZoom(Math.max(zoom - 0.25, 0.5))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold mb-2">{document.title}</DialogTitle>
              <p className="text-sm text-muted-foreground mb-3">{document.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {document.type}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {document.duration}
                </Badge>
                {document.maxMarks && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    Max Marks: {document.maxMarks}
                  </Badge>
                )}
                {document.sections && (
                  <Badge variant="outline">
                    {document.sections} Sections
                  </Badge>
                )}
                {document.totalQuestions && (
                  <Badge variant="outline">
                    {document.totalQuestions} Questions
                  </Badge>
                )}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b bg-muted/30">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground px-3">
              Page {currentPage + 1} of {document.pages.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === document.pages.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={zoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground px-2">
              {Math.round(zoom * 100)}%
            </span>
            <Button variant="outline" size="sm" onClick={zoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="flex justify-center">
            <div 
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-full"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
            >
              <img
                src={document.pages[currentPage]}
                alt={`Page ${currentPage + 1} of ${document.title}`}
                className="w-full h-auto"
                style={{ maxWidth: '800px' }}
              />
            </div>
          </div>
        </div>

        {/* Page Navigation Footer */}
        {document.pages.length > 1 && (
          <div className="p-4 border-t bg-muted/30">
            <div className="flex justify-center gap-2 overflow-x-auto">
              {document.pages.map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(index)}
                  className="min-w-[40px]"
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}