// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LinkCollection } from "@/firebase/collection/link";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const getLinkList = async (userId: string) => {
  console.debug("test");
  const linkList = await LinkCollection.readLinkList(userId);
  return linkList;
};
