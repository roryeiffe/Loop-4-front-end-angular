export interface Player {
    id: number,
    name: string,
    total_score: number,
    current_score: number,
    vote_count: number,
    inLoop:boolean
}

export interface Answer {
    id: number,
    answer: string,
    category: string
}

export interface Question {
    id: number,
    question: string,
    category: string
}

export interface Room {
    id: number,
    password: string,
    players: Player[],
    category: string,
    questions: Question[],
    answers: Answer[],
    answer: string
}