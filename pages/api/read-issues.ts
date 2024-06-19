import { IssueType } from "@/types/IssueType";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = IssueType[] | { errorMsg: string };

// Read: returns a static JSON object - I've interpretted this as multiple issues
export default function readIssuesHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // --- authenticate ---
  try {
      console.log('authenticating the request...');
  } catch (e) {
    res.status(400).json({ errorMsg: 'authentication failed' })
  }

  // --- initialise a variable for response ---
  let issues: IssueType[] = []

  // --- read the issues from the database ---
  try {
    console.log('reading from database...');
    issues = [
      {
        id: "1",
        title: "Create account authentication",
        description: "Allow returning users to log in so that they can access the tool"
      },
      {
        id: "2",
        title: "Create account authentication",
        description: "Allow returning users to log in so that they can access the tool"
      },
    ]
  } catch (e) {
    res.status(400).json({ errorMsg: 'reading from database failed' })
  }

  // --- Then respond with and log the created issue ---
  console.log('issues read:', issues)
  res.status(200).json(issues);
}