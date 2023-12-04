import { NextApiRequest, NextApiResponse } from "next";
import products from '../../database.json'

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {id} = req.query //extraindo parâmetro da minha rota que no caso é o id

    //Criei o arquivo com o nome [id].ts, pois é o parâmetro que desejo pegar na minha rota 

    //O req.query serve para eu extrair o parâmetro que desejo.

    const product = products.find(products => products.id === Number(id))//Estou varrendo o meu array de objeto para procurar o id digitado na rota dentro do array.
    res.status(200).json(product)
}