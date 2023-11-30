// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {//dados tipados.
  name: string,
  timestamp:Date
  formattedTimestamp: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {//função que cuida de devolver a resposta dos meus dados tipados
  const timestamp = new Date();//pegando a data
  const formattedTimestamp = timestamp.toLocaleString();//convertendo para hora com base me localidade.
  res.status(200).json({ name: 'John Doe',timestamp,formattedTimestamp });
}
