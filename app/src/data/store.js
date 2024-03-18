import { create } from 'zustand'

export const usePostStore = create((set) => ({
    posts: [
        {
            date: '18 march 2024',
            username: 'User2203',
            message: 'Hello! I need help please'
        },
        {
            date: '14 march 2024',
            username: 'User2201',
            message: 'Is my brew supposed to do this????'
        }
    ]
}))