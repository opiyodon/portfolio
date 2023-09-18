import { services } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // By default, it's a GET request
  console.log(services);

  res.status(200).json({ services });
};

export default handler;
