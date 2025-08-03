import Layout from "@/components/Layout"
import { FolderCard } from "@/components/FolderCard"
import { ContentCard } from "@/components/ContentCard"
import { useNavigate } from "react-router-dom"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar,
  FileText,
  Video,
  HelpCircle,
  Target,
  TrendingUp,
  Clock
} from "lucide-react"

const Index = () => {
  const navigate = useNavigate()

  const quickAccess = [
    {
      title: "All Classes",
      description: "Browse all available classes and grades",
      icon: <GraduationCap className="h-6 w-6" />,
      onClick: () => navigate('/classes'),
      itemCount: 10
    },
    {
      title: "Schedule",
      description: "View class schedules and timetables",
      icon: <Calendar className="h-6 w-6" />,
      onClick: () => navigate('/schedule'),
      itemCount: 24
    }
  ]

  const recentContent = [
    {
      title: "Introduction to Algebra",
      description: "Basic algebraic concepts and problem solving techniques",
      icon: <Video className="h-5 w-5" />,
      type: "Video",
      duration: "25 min",
      views: 1250
    },
    {
      title: "English Grammar Notes",
      description: "Comprehensive notes on parts of speech and sentence structure",
      icon: <FileText className="h-5 w-5" />,
      type: "Notes",
      duration: "15 min read",
      views: 890
    },
    {
      title: "Science Quiz - Physics",
      description: "Test your understanding of basic physics concepts",
      icon: <HelpCircle className="h-5 w-5" />,
      type: "Quiz",
      duration: "10 min",
      views: 456
    }
  ]

  const stats = [
    { label: "Total Classes", value: "10", icon: <GraduationCap className="h-5 w-5" /> },
    { label: "Subjects", value: "32", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Study Materials", value: "450+", icon: <FileText className="h-5 w-5" /> },
    { label: "Study Hours", value: "128", icon: <Clock className="h-5 w-5" /> }
  ]

  return (
    <Layout>
      <div className="p-6 space-y-8 animate-fade-in">
        {/* Hero Section */}
        <div className="bg-gradient-primary rounded-xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to EduCenter</h1>
          <p className="text-xl opacity-90 mb-6">
            Your comprehensive online learning platform for all grades and subjects
          </p>
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon}
                  <span className="text-sm opacity-80">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickAccess.map((item, index) => (
              <FolderCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                onClick={item.onClick}
                itemCount={item.itemCount}
              />
            ))}
          </div>
        </div>

        {/* Recent Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Recent Learning Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentContent.map((content, index) => (
              <ContentCard
                key={index}
                title={content.title}
                description={content.description}
                icon={content.icon}
                type={content.type}
                duration={content.duration}
                views={content.views}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Index;
