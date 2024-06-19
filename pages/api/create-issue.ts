import { IssueType } from "@/types/IssueType";
import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = IssueType;
type ResponseData = IssueType | { errorMsg: string };

// Create: accepts a JSON object & prints/logs the object
export default function createIssueHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // --- authenticate ---
  try {
    console.log('authenticating the request...')
  } catch (e) {
    res.status(400).json({ errorMsg: 'authentication failed' })
  }

  // --- parse the request body ---
  const newIssue: RequestData = req.body;

  // --- server side validatation ---
  try {
    console.log('checking issue format is valid...')
  } catch (e) {
    res.status(400).json({ errorMsg: 'invalid issue format' })
  }

  // --- save the issue to the database ---
  try {
    console.log('creating in database...');
  } catch (e) {
    res.status(400).json({ errorMsg: 'creating in database failed' })
  }

  // --- Then respond with and log the created issue ---
  console.log('issue created:', newIssue)
  res.status(200).json(newIssue);
}
