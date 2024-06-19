import { IssueType } from "@/types/IssueType";
import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = IssueType;
type ResponseData = IssueType | { errorMsg: string };

// Update: accepts a JSON object & prints/logs the object
export default function updateIssueHandler(
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
  const updatedIssue: RequestData = req.body;

  // --- server side validatation ---
  try {
    console.log('checking issue is valid...')
  } catch (e) {
    res.status(400).json({ errorMsg: 'invalid issue' })
  }

  // --- save the issue to the database ---
  try {
    console.log('updating in database...');
  } catch (e) {
    res.status(400).json({ errorMsg: 'updating in database failed' })
  }

  // --- Then respond with and log the created issue ---
  console.log('issue updated:', updatedIssue)
  res.status(200).json(updatedIssue);
}