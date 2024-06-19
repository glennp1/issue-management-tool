import { IssueType } from '@/types/IssueType';
import React, { FunctionComponent, useEffect, useState } from 'react';
import SingleIssue from './SingleIssue';

interface Props {

}

const IssuesDisplay: FunctionComponent<Props> = (props) => {

  const [issues, setIssues] = useState<IssueType[]>([]);

  useEffect(() => {
    fetch('/api/read-issues')
      .then((res) => res.json())
      .then((res) => {
        setIssues(res)
      })
      .catch((err) => console.error(err));
  }, [])


  // while loading, show nothing...

  return (
    <React.Fragment>
      <div className='w-full h-screen flex flex-col gap-4'>
        {issues.map((issue, index) => (
          <SingleIssue
            key={index}
            issue={issue}
          />
        ))}


      </div>
    </React.Fragment>

  );
};

export default IssuesDisplay;