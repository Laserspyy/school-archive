import Layout from "@/components/Layout"
import { ContentCard } from "@/components/ContentCard"
import { useNavigate, useParams } from "react-router-dom"
import { getContentForGradeSubject } from "@/lib/contentDatabase"
import { 
  FileText, 
  Video, 
  HelpCircle, 
  Target, 
  BookOpen,
  Download,
  PlayCircle,
  PenTool,
  Clock,
  Calendar
} from "lucide-react"

const ContentList = () => {
  const navigate = useNavigate()
  const { grade, subject, contentType } = useParams()

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'notes': return <FileText className="h-5 w-5" />
      case 'videos': return <Video className="h-5 w-5" />
      case 'questions': return <HelpCircle className="h-5 w-5" />
      case 'assignments': return <Target className="h-5 w-5" />
      default: return <BookOpen className="h-5 w-5" />
    }
  }

  const content = getContentForGradeSubject(grade || '', subject || '', contentType || 'notes')

  const gradeTitle = grade?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Grade'
  const subjectTitle = subject?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Subject'
  const contentTypeTitle = contentType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Content'
  

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground mb-2">
            <span 
              className="hover:text-primary cursor-pointer"
              onClick={() => navigate('/classes')}
            >
              Classes
            </span>
            <span className="mx-2">/</span>
            <span 
              className="hover:text-primary cursor-pointer"
              onClick={() => navigate(`/classes/${grade}`)}
            >
              {gradeTitle}
            </span>
            <span className="mx-2">/</span>
            <span 
              className="hover:text-primary cursor-pointer"
              onClick={() => navigate(`/classes/${grade}/${subject}`)}
            >
              {subjectTitle}
            </span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{contentTypeTitle}</span>
          </nav>
          <h1 className="text-3xl font-bold text-foreground mb-2">{contentTypeTitle}</h1>
          <p className="text-muted-foreground">
            {gradeTitle} {subjectTitle} - {contentTypeTitle.toLowerCase()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              icon={getContentIcon(contentType || 'notes')}
              type={contentTypeTitle}
              duration={item.duration}
              views={item.views}
              onClick={() => {
                // Navigate to specific content item
                console.log(`Opening: ${item.title}`)
              }}
            />
          ))}
        </div>

        {content.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No content available for this section yet.</p>
              <p className="text-sm mt-2">Check back later for updates!</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ContentList