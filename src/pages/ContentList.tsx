import Layout from "@/components/Layout"
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

  const generateContent = (type: string) => {
    const baseContent = {
      notes: [
        { title: "Chapter 1: Introduction", description: "Basic concepts and fundamental principles", duration: "20 min read", views: 245 },
        { title: "Chapter 2: Core Concepts", description: "Deep dive into essential topics", duration: "25 min read", views: 189 },
        { title: "Chapter 3: Advanced Topics", description: "Complex concepts and applications", duration: "30 min read", views: 156 },
        { title: "Summary Notes", description: "Key points and review materials", duration: "15 min read", views: 298 },
        { title: "Study Guide", description: "Comprehensive exam preparation guide", duration: "35 min read", views: 201 }
      ],
      videos: [
        { title: "Introduction Video", description: "Welcome and course overview", duration: "15 min", views: 1289 },
        { title: "Lesson 1: Basics", description: "Fundamental concepts explained", duration: "22 min", views: 987 },
        { title: "Lesson 2: Practice", description: "Hands-on examples and exercises", duration: "28 min", views: 756 },
        { title: "Lesson 3: Advanced", description: "Complex topics and applications", duration: "32 min", views: 623 },
        { title: "Review Session", description: "Complete topic review and Q&A", duration: "45 min", views: 445 }
      ],
      questions: [
        { title: "Practice Set 1", description: "Basic level questions", duration: "30 min", views: 567 },
        { title: "Practice Set 2", description: "Intermediate level challenges", duration: "45 min", views: 423 },
        { title: "Mock Test 1", description: "Full length practice exam", duration: "60 min", views: 389 },
        { title: "Quick Quiz", description: "5-minute concept check", duration: "5 min", views: 789 },
        { title: "Challenge Questions", description: "Advanced problem solving", duration: "90 min", views: 234 }
      ],
      assignments: [
        { title: "Weekly Assignment 1", description: "Complete the first week's homework", duration: "2 hours", views: 345 },
        { title: "Project Proposal", description: "Submit your project idea", duration: "1 hour", views: 267 },
        { title: "Research Assignment", description: "Investigate a specific topic", duration: "3 hours", views: 198 },
        { title: "Group Project", description: "Collaborative assignment", duration: "5 hours", views: 156 },
        { title: "Final Assessment", description: "End of unit evaluation", duration: "90 min", views: 89 }
      ]
    }

    return baseContent[type as keyof typeof baseContent] || []
  }

  const gradeTitle = grade?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Grade'
  const subjectTitle = subject?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Subject'
  const contentTypeTitle = contentType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Content'
  
  const content = generateContent(contentType || 'notes')

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