import { NextApiRequest, NextApiResponse } from "next";


export interface IPost {
    id?:number
    image:string
    title:string
    description:string
    details:string
    createdAt?:Date
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default async function Posts(req:NextApiRequest, res:NextApiResponse<IPost | Array<IPost>>) {
    const postsArray = []
    async function Factory(props:IPost) {

        return {...props, id:props.id ?? Math.random(), createdAt:props.createdAt ?? new Date().toLocaleDateString()}
    }
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    postsArray.push(await Factory({
        title:'teste',
        description:lorem + lorem + lorem,
        details:lorem,
        image:'/img/design.jpg'
    }))
    return res.status(200).json(postsArray)

}