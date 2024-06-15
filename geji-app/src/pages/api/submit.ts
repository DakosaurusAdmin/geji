import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const formData = req.body.query;

  console.log("request", req.body)
  res.send(200)
}