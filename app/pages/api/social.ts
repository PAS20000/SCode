import { NextApiRequest, NextApiResponse } from "next";

export interface ISocial {
    id?:number
    image:string
    name:string
    description:string
    tag:string
    createdAt?:Date
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default async function Social(req:NextApiRequest, res:NextApiResponse<ISocial | Array<ISocial>>) {
    const postsArray = []
    async function Factory(props:ISocial) {

        return {...props, id:props.id ?? Math.random(), createdAt:props.createdAt ?? new Date().toLocaleDateString()}
    }
    postsArray.push(await Factory({
        name:'Matheus Oliveira',
        tag:'@Matheus_Oliveira',
        description:lorem + lorem + lorem,
        image:'/img/matheus.jpg'
    })) 
    postsArray.push(await Factory({
        name:'Ana Luíza da silva',
        tag:'@AnaLu',
        description:lorem + lorem + lorem,
        image:`/img/ana.jpg`
    })) 
    postsArray.push(await Factory({
        name:'Júlia Borges',
        tag:'@Júlia-Borges',
        description:lorem + lorem + lorem,
        image:'/img/Julia.jpg'
    }))
    postsArray.push(await Factory({
        name:'Gustavo Andrade',
        tag:'@Gustavo.A',
        description:lorem + lorem + lorem,
        image:'/img/gustavo.jpg'
    }))

    return res.status(200).json(postsArray)

}