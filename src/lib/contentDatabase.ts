// Centralized content database and counting functions
export const contentDatabase = {
  'grade-1': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-2': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-3': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-4': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-5': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-6': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] },
    'foreign-language': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-7': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] },
    'foreign-language': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-8': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] },
    'foreign-language': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-9': {
    'mathematics': { notes: [], videos: [], questions: [], assignments: [] },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] },
    'foreign-language': { notes: [], videos: [], questions: [], assignments: [] },
    'physics': { notes: [], videos: [], questions: [], assignments: [] },
    'chemistry': { notes: [], videos: [], questions: [], assignments: [] },
    'biology': { notes: [], videos: [], questions: [], assignments: [] }
  },
  'grade-10': {
    'mathematics': { 
      notes: [], 
      videos: [], 
      questions: [
        {
          title: "Mathematics Standard - Sample Question Paper",
          description: "Class X (2025-26) - Code No.041 - Complete sample paper with solutions",
          duration: "3 hours",
          views: 0,
          type: "Sample Paper",
          maxMarks: 80,
          sections: 5,
          totalQuestions: 38,
          pages: [
            "/lovable-uploads/4a14c1de-e5f2-42ab-8aa3-3ed8d904e3b7.png",
            "/lovable-uploads/e1ecbc76-39da-4751-a755-864690ab147e.png",
            "/lovable-uploads/fc36684f-91be-4c7b-bcaf-f6f98e075e50.png",
            "/lovable-uploads/e886e407-93aa-437d-89dd-ee08d5af4f2b.png",
            "/lovable-uploads/93ecee03-5bb5-438a-b426-f2cd43171ba4.png",
            "/lovable-uploads/92b7c885-57b7-46c3-be46-96411990de95.png",
            "/lovable-uploads/79ae259c-29b6-4be0-a3c6-b397242d5615.png",
            "/lovable-uploads/f2aae645-1b88-4a8e-bfa9-368ab7101cfa.png"
          ]
        }
      ], 
      assignments: [] 
    },
    'english': { notes: [], videos: [], questions: [], assignments: [] },
    'science': { notes: [], videos: [], questions: [], assignments: [] },
    'social-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'art': { notes: [], videos: [], questions: [], assignments: [] },
    'music': { notes: [], videos: [], questions: [], assignments: [] },
    'physical-education': { notes: [], videos: [], questions: [], assignments: [] },
    'environmental-studies': { notes: [], videos: [], questions: [], assignments: [] },
    'computer-science': { notes: [], videos: [], questions: [], assignments: [] },
    'foreign-language': { notes: [], videos: [], questions: [], assignments: [] },
    'physics': { notes: [], videos: [], questions: [], assignments: [] },
    'chemistry': { notes: [], videos: [], questions: [], assignments: [] },
    'biology': { notes: [], videos: [], questions: [], assignments: [] }
  }
}

// Get total content count for a grade
export const getGradeContentCount = (grade: string): number => {
  const gradeData = contentDatabase[grade as keyof typeof contentDatabase]
  if (!gradeData) return 0
  
  let totalCount = 0
  Object.values(gradeData).forEach(subject => {
    totalCount += subject.notes.length + subject.videos.length + subject.questions.length + subject.assignments.length
  })
  
  return totalCount
}

// Get subject count for a grade
export const getGradeSubjectCount = (grade: string): number => {
  const gradeData = contentDatabase[grade as keyof typeof contentDatabase]
  return gradeData ? Object.keys(gradeData).length : 0
}

// Get content type count for a subject
export const getSubjectContentTypeCount = (grade: string, subject: string, contentType: string): number => {
  const gradeData = contentDatabase[grade as keyof typeof contentDatabase]
  if (!gradeData) return 0
  
  const subjectData = gradeData[subject as keyof typeof gradeData]
  if (!subjectData) return 0
  
  return subjectData[contentType as keyof typeof subjectData]?.length || 0
}

// Get total content count for a subject across all content types
export const getSubjectTotalContentCount = (grade: string, subject: string): number => {
  const gradeData = contentDatabase[grade as keyof typeof contentDatabase]
  if (!gradeData) return 0
  
  const subjectData = gradeData[subject as keyof typeof gradeData]
  if (!subjectData) return 0
  
  return subjectData.notes.length + subjectData.videos.length + subjectData.questions.length + subjectData.assignments.length
}

// Get content for specific grade/subject/type
export const getContentForGradeSubject = (grade: string, subject: string, type: string) => {
  const gradeData = contentDatabase[grade as keyof typeof contentDatabase]
  if (!gradeData) return []
  
  const subjectData = gradeData[subject as keyof typeof gradeData]
  if (!subjectData) return []
  
  return subjectData[type as keyof typeof subjectData] || []
}