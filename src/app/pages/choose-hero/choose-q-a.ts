export const qa: QaItem[] = [
  {
    id: 1,
    question: '喜欢哪部小说？',
    answers: [
      {
        id: 1,
        text: '多情剑客无情剑',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 2,
        text: '​笑傲江湖',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 3,
        text: '​天龙八部',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 4,
        text: '​射雕英雄传',
        actionType: 1,
        actionValue: 1,
      },
    ],
  },
  {
    id: 2,
    question: '喜欢哪个人物？',
    answers: [
      {
        id: 1,
        text: '​阿飞',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 2,
        text: '​任盈盈',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 3,
        text: '​萧秋水',
        actionType: 1,
        actionValue: 1,
      },
      {
        id: 4,
        text: '​张无忌',
        actionType: 1,
        actionValue: 1,
      },
    ],
  },
]

export interface QaItem {
  id: number
  question: string
  answers: AnswerItem[]
}

export interface AnswerItem {
  id: number
  text: string
  actionType: number
  actionValue: number
}