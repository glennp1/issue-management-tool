import { IssueType } from '@/types/IssueType';
import { FunctionComponent, useState } from 'react';

interface Props {
  issue: IssueType;
}

const UpdateIssue: FunctionComponent<Props> = (props) => {

  const [issue, setIssue] = useState<IssueType>(props.issue);

  return (
    <div className='w-full bg-slate-100'>
      <h3>Update Issue</h3>
      {/* todo implement update */}
    </div>
  );
};

export default UpdateIssue;