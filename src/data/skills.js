export const skillGroups = [
  {
    label: 'Programming Languages',
    skills: ['Python', 'C Programming', 'Kotlin'],
  },
  {
    label: 'Mobile Development',
    skills: ['Kotlin', 'Android Development (Android Studio)'],
  },
  {
    label: 'Web Basics',
    skills: ['HTML'],
  },
  {
    label: 'AI & Prompt Engineering',
    skills: ['Prompt Engineering', 'AI Content Generation', 'Generative AI Tools (ChatGPT, Gemini, Claude)'],
  },
]

export const allSkills = skillGroups.flatMap((g) => g.skills)

