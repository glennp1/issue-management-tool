import { IssueType } from '@/types/IssueType';
import { FunctionComponent, useState } from 'react';
import UpdateIssue from './UpdateIssue';

interface Props {
  issue: IssueType;
}

const SingleIssue: FunctionComponent<Props> = (props) => {

  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  return (
    <div className='w-full flex flex-col bg-slate-100 gap-2 p-4'>
      <div className='w-full flex flex-col gap-0'>
        <p className='font-bold'>Id</p>
        <p>{props.issue.id}</p>
      </div>
      <div className='w-full flex flex-col gap-0'>
        <p className='font-bold'>Title</p>
        <p>{props.issue.title}</p>
      </div>
      <div className='w-full flex flex-col gap-0'>
        <p className='font-bold'>Description</p>
        <p>{props.issue.description}</p>
      </div>
      <div className='w-full flex flex-row items-center justify-between'>
        <button className='px-4 py-2 bg-slate-800 text-white'>Update</button>
        <button
          className='px-4 py-2 bg-slate-800 text-white'
          onClick={() => {
            if (confirm("Are you sure you wish to delete?")) {
              // todo implement delete
            }
          }}
        >
          Delete
        </button>
      </div>
      {isUpdating && (
        <UpdateIssue issue={props.issue} />
      )}
    </div>
  );
};

export default SingleIssue;