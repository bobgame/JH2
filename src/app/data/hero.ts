export const defaultHero: Hero = {
  id: 0,
  name: '吴茗',
  desc: '吴茗',
  avatar: 'wuming',
}



export interface Hero {
  id: number
  name: string
  desc: string
  avatar: string
}