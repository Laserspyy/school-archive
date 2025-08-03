import Layout from "@/components/Layout"
import { FolderCard } from "@/components/FolderCard"
import { useNavigate, useParams } from "react-router-dom"
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Palette, 
  Music, 
  Heart, 
  Computer,
  Languages,
  TreePine
} from "lucide-react"

const ClassDetail = () => {
  const navigate = useNavigate()
  const { grade } = useParams()

  const subjectIcons = {
    mathematics: <Calculator className="h-6 w-6" />,
    english: <BookOpen className="h-6 w-6" />,
    science: <FlaskConical className="h-6 w-6" />,
    "social-studies": <Globe className="h-6 w-6" />,
    art: <Palette className="h-6 w-6" />,
    music: <Music className="h-6 w-6" />,
    "physical-education": <Heart className="h-6 w-6" />,
    "computer-science": <Computer className="h-6 w-6" />,
    "foreign-language": <Languages className="h-6 w-6" />,
    "environmental-studies": <TreePine className="h-6 w-6" />
  }

  const getSubjectsForGrade = (grade: string) => {
    const baseSubjects = [
      { name: "Mathematics", key: "mathematics", description: "Numbers, arithmetic, and problem solving" },
      { name: "English Language Arts", key: "english", description: "Reading, writing, grammar, and literature" },
      { name: "Science", key: "science", description: "Basic scientific concepts and experiments" },
      { name: "Social Studies", key: "social-studies", description: "History, geography, and community studies" },
      { name: "Art", key: "art", description: "Creative expression through various mediums" },
      { name: "Music", key: "music", description: "Musical appreciation and basic instruments" },
      { name: "Physical Education", key: "physical-education", description: "Physical fitness and sports activities" },
      { name: "Environmental Studies", key: "environmental-studies", description: "Nature, environment, and conservation" }
    ]

    // Add advanced subjects for higher grades
    if (parseInt(grade?.split('-')[1] || '1') >= 4) {
      baseSubjects.push(
        { name: "Computer Science", key: "computer-science", description: "Basic programming and technology skills" },
        { name: "Foreign Language", key: "foreign-language", description: "Introduction to a second language" }
      )
    }

    return baseSubjects
  }

  const gradeTitle = grade?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Grade'
  const subjects = getSubjectsForGrade(grade || '1')

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{gradeTitle} Subjects</h1>
          <p className="text-muted-foreground">
            Explore all subjects available for {gradeTitle.toLowerCase()} students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <FolderCard
              key={index}
              title={subject.name}
              description={subject.description}
              icon={subjectIcons[subject.key as keyof typeof subjectIcons] || <BookOpen className="h-6 w-6" />}
              onClick={() => navigate(`/classes/${grade}/${subject.key}`)}
              variant="subject"
              itemCount={Math.floor(Math.random() * 20) + 10} // Random content count for demo
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ClassDetail