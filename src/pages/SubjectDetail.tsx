import Layout from "@/components/Layout"
import { FolderCard } from "@/components/FolderCard"
import { ContentCard } from "@/components/ContentCard"
import { useNavigate, useParams } from "react-router-dom"
import { 
  FileText, 
  Video, 
  HelpCircle, 
  Target, 
  BookOpen,
  Download,
  PlayCircle,
  PenTool
} from "lucide-react"

const SubjectDetail = () => {
  const navigate = useNavigate()
  const { grade, subject } = useParams()

  const contentTypes = [
    {
      title: "Lesson Notes",
      description: "Comprehensive written materials and study guides",
      icon: <FileText className="h-6 w-6" />,
      path: "notes",
      count: 12
    },
    {
      title: "Video Lessons",
      description: "Interactive video content and tutorials",
      icon: <Video className="h-6 w-6" />,
      path: "videos",
      count: 8
    },
    {
      title: "Practice Questions",
      description: "Sample questions and practice exercises",
      icon: <HelpCircle className="h-6 w-6" />,
      path: "questions",
      count: 15
    },
    {
      title: "Assignments",
      description: "Homework and project assignments",
      icon: <Target className="h-6 w-6" />,
      path: "assignments",
      count: 5
    }
  ]

  const getRecentContent = (grade: string, subject: string) => {
    // Only show recent content if there's actual content available
    if (grade === 'grade-10' && subject === 'mathematics') {
      return [
        {
          title: "Mathematics Standard - Sample Question Paper",
          description: "Class X (2025-26) - Complete sample paper for practice",
          icon: <PenTool className="h-5 w-5" />,
          type: "Sample Paper",
          duration: "3 hours",
          views: 0
        }
      ]
    }
    return []
  }

  const recentContent = getRecentContent(grade || '', subject || '')

  const gradeTitle = grade?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Grade'
  const subjectTitle = subject?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Subject'

  return (
    <Layout>
      <div className="p-6 space-y-8 animate-fade-in">
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
            <span className="text-foreground">{subjectTitle}</span>
          </nav>
          <h1 className="text-3xl font-bold text-foreground mb-2">{subjectTitle}</h1>
          <p className="text-muted-foreground">
            {gradeTitle} {subjectTitle} learning materials and resources
          </p>
        </div>

        {/* Content Types */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <FolderCard
                key={index}
                title={type.title}
                description={type.description}
                icon={type.icon}
                onClick={() => navigate(`/classes/${grade}/${subject}/${type.path}`)}
                variant="content"
                itemCount={type.count}
              />
            ))}
          </div>
        </div>

        {/* Recent Content */}
        {recentContent.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Recent Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentContent.map((content, index) => (
                <ContentCard
                  key={index}
                  title={content.title}
                  description={content.description}
                  icon={content.icon}
                  type={content.type}
                  duration={content.duration}
                  views={content.views}
                  onClick={() => {
                    // Navigate to specific content
                    console.log(`Viewing: ${content.title}`)
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default SubjectDetail