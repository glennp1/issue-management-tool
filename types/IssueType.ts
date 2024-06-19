// As per the specification:
// "Issues can be hard-coded JSON objects with just 3 attributes: id, title + description."
export type IssueType = {
  id: IssueIdType;
  title: IssueTitleType;
  description: IssueDescriptionType;
}

export type IssueIdType = string;
export type IssueTitleType = string;
export type IssueDescriptionType = string;