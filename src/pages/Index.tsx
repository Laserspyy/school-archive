import Layout from "@/components/Layout"
import { FolderCard } from "@/components/FolderCard"
import { ContentCard } from "@/components/ContentCard"
import { useNavigate } from "react-router-dom"
import { getGradeSubjectCount } from "@/lib/contentDatabase"
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

  const gradeCards = [
    { title: "Grade 1", description: "Foundation learning for beginners", grade: "grade-1" },
    { title: "Grade 2", description: "Building basic skills", grade: "grade-2" },
    { title: "Grade 3", description: "Expanding knowledge base", grade: "grade-3" },
    { title: "Grade 4", description: "Intermediate concepts", grade: "grade-4" },
    { title: "Grade 5", description: "Advanced elementary topics", grade: "grade-5" },
    { title: "Grade 6", description: "Pre-middle school preparation", grade: "grade-6" },
    { title: "Grade 7", description: "Middle school foundations", grade: "grade-7" },
    { title: "Grade 8", description: "Advanced middle school", grade: "grade-8" },
    { title: "Grade 9", description: "High school preparation", grade: "grade-9" },
    { title: "Grade 10", description: "Advanced high school topics", grade: "grade-10" }
  ]

  const quickAccess = [
    {
      title: "All Classes",
      description: "Browse all available classes and grades",
      icon: <GraduationCap className="h-6 w-6" />,
      onClick: () => navigate('/classes')
    },
    {
      title: "Schedule",
      description: "View class schedules and timetables",
      icon: <Calendar className="h-6 w-6" />,
      onClick: () => navigate('/schedule')
    }
  ]

  // Remove recent content section as it should only show actual content

  const stats = [
    { label: "Total Classes", value: "10", icon: <GraduationCap className="h-5 w-5" /> },
    { label: "Subjects", value: getGradeSubjectCount('grade-10').toString(), icon: <BookOpen className="h-5 w-5" /> },
    { label: "Study Materials", value: "1", icon: <FileText className="h-5 w-5" /> },
    { label: "Study Hours", value: "3", icon: <Clock className="h-5 w-5" /> }
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
              />
            ))}
          </div>
        </div>

        {/* All Grades Navigation */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Browse by Grade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gradeCards.map((grade, index) => (
              <FolderCard
                key={index}
                title={grade.title}
                description={grade.description}
                icon={<GraduationCap className="h-6 w-6" />}
                onClick={() => navigate(`/classes/${grade.grade}`)}
                itemCount={getGradeSubjectCount(grade.grade)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Index;
