import api from "../axios"

export const fetchIdeas = async() => {
    const res = await api.get(`/ideas`)
    return res.data
}

export const fetchIdea = async(ideaId:string) => {
    const res = await api.get(`/ideas/${ideaId}`)
    return res.data
}