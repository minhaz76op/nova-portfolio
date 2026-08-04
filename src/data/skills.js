export const skillGroups = [
  {
    label: 'Programming',
    skills: ['C++', 'Java', 'Python'],
  },
  {
    label: 'Web',
    skills: ['HTML5'],
  },
  {
    label: 'Mobile',
    skills: ['App Development'],
  },
  {
    label: 'Design & Tools',
    skills: ['UI/UX Design', 'Git / GitHub'],
  },
]

export const allSkills = skillGroups.flatMap((g) => g.skills)
