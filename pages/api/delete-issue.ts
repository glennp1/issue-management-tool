import { IssueIdType } from "@/types/IssueType";
import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = IssueIdType;
type ResponseData = { issueId: IssueIdType } | { errorMsg: string };

// Delete: prints/logs out the object or id to delete
export default function deleteIssueHandler(
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
  const issueIdToDelete: RequestData = req.body;

  // --- server side validatation ---
  try {
    console.log('checking issue is valid...')
  } catch (e) {
    res.status(400).json({ errorMsg: 'invalid issue' })
  }

  // --- save the issue to the database ---
  try {
    console.log('deleting in database...');
  } catch (e) {
    res.status(400).json({ errorMsg: 'deleting in database failed' })
  }

  // --- Then respond with and log the deleted issue id ---
  console.log('issue deleted with id:', issueIdToDelete);
  res.status(200).json({ issueId: issueIdToDelete });
}