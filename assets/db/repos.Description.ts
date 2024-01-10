export interface RepoDescription {
  [key: string]: {
    [key: string]: string
  }
}

const reposDescription: RepoDescription = {
  "abduragimov-cv": {
    "ru": "Мое резюме.Технологии:Nuxt",
    "en": "My CV.Technologies: Nuxt"
  },
  "youtube-client": {
    "ru": "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.Технологии: Angular,NgRx.",
    "en": "My CV.Technologies: Nuxt"
  },
}
export default reposDescription