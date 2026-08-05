export const skillGroups = [
  {
    label: 'Programming & Development',
    skills: ['Python', 'C Programming', 'Kotlin', 'Android Development (Android Studio)', 'HTML'],
  },
  {
    label: 'AI & Prompt Engineering',
    skills: ['Prompt Engineering', 'AI Content Generation', 'Generative AI Tools (ChatGPT, Gemini, Claude)'],
  },
  {
    label: 'Creative & Media',
    skills: ['Photography', 'Videography'],
  },
  {
    label: 'Gaming',
    skills: ['PUBG', 'Call of Duty', 'eFootball', 'GTA V', 'Clash of Clans'],
  },
]

export const allSkills = skillGroups.flatMap((g) => g.skills)


