import Layout from "@/components/Layout"
import { FolderCard } from "@/components/FolderCard"
import { useNavigate } from "react-router-dom"
import { GraduationCap } from "lucide-react"

const Classes = () => {
  const navigate = useNavigate()

  const classes = [
    {
      title: "Grade 1",
      description: "Foundation learning with basic concepts in all subjects",
      subjects: 8,
      path: "/classes/grade-1"
    },
    {
      title: "Grade 2", 
      description: "Building on fundamentals with expanded learning objectives",
      subjects: 8,
      path: "/classes/grade-2"
    },
    {
      title: "Grade 3",
      description: "Intermediate concepts and critical thinking development",
      subjects: 9,
      path: "/classes/grade-3"
    },
    {
      title: "Grade 4",
      description: "Advanced elementary concepts and skill building",
      subjects: 10,
      path: "/classes/grade-4"
    },
    {
      title: "Grade 5",
      description: "Pre-middle school preparation with comprehensive subjects",
      subjects: 10,
      path: "/classes/grade-5"
    },
    {
      title: "Grade 6",
      description: "Middle school readiness with specialized subject focus",
      subjects: 12,
      path: "/classes/grade-6"
    },
    {
      title: "Grade 7",
      description: "Early high school concepts with advanced mathematics",
      subjects: 12,
      path: "/classes/grade-7"
    },
    {
      title: "Grade 8",
      description: "Pre-high school preparation with complex topics",
      subjects: 13,
      path: "/classes/grade-8"
    },
    {
      title: "Grade 9",
      description: "High school foundation with specialized streams",
      subjects: 14,
      path: "/classes/grade-9"
    },
    {
      title: "Grade 10",
      description: "Board exam preparation with comprehensive curriculum",
      subjects: 15,
      path: "/classes/grade-10"
    }
  ]

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Classes</h1>
          <p className="text-muted-foreground">
            Select a grade level to explore subjects, lessons, and learning materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <FolderCard
              key={index}
              title={classItem.title}
              description={classItem.description}
              icon={<GraduationCap className="h-6 w-6" />}
              onClick={() => navigate(classItem.path)}
              itemCount={classItem.subjects}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Classes