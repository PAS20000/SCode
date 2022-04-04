import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto'
export interface ISocial {
    id:number
    image:string
    name:string
    description:string
    tag:string
    createdAt:Date
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


export default async function Social(req:NextApiRequest, res:NextApiResponse) {
    const createdAt = new Date().toLocaleDateString()

    const social = [{
        id: crypto.randomBytes(32).toString('hex'),
        name:'Gustavo Andrade',
        tag:'@Gustavo.A',
        description:lorem + lorem + lorem,
        image:'/img/gustavo.jpg',
        createdAt
    }, {
        id: crypto.randomBytes(32).toString('hex'),
        name:'Júlia Borges',
        tag:'@Júlia-Borges',
        description:lorem + lorem + lorem,
        image:'/img/Julia.jpg',
        createdAt

    }, {
        id: crypto.randomBytes(32).toString('hex'),
        name:'Ana Luíza da silva',
        tag:'@AnaLu',
        description:lorem + lorem + lorem,
        image:`/img/ana.jpg`,
        createdAt
    }, {
        id: crypto.randomBytes(32).toString('hex'),
        name:'Matheus Oliveira',
        tag:'@Matheus_Oliveira',
        description:lorem + lorem + lorem,
        image:'/img/matheus.jpg',
        createdAt
    }]
    return res.status(200).json(social)

}