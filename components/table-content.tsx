"use client"

import { type FC, useState } from 'react';
import { cn, generateSlug } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

type TableOfContentsProps = {
  markdown: string;
};

const TableOfContents: FC<TableOfContentsProps> = ({ markdown }) => {
  // console.log(markdown, "dddd");

  const headings = markdown.match(/#{1,6}.+/g);
  console.log(headings, "heading");

  const [showTOC, setShowTOC] = useState(false);
  const handleShowTOC = () => setShowTOC(!showTOC);

 
  // relative  border border-solid bg-blue-500 border-red-400 mb-[2.2rem] pt-[2.8rem] pr-[1.5rem] pb-[1.25rem] pl-[1.5rem] contents

  return (
    <>
      {headings ? (
        <div className="pt-6">
          <div className="border dark:border-indigo-800 rounded-sm p-2">
            <button onClick={handleShowTOC} aria-label="Table of Contents">
              <summary className="flex items-center font-secondary leading-5 font-[600]">
                <span className="pt-[.25rem] mr-[1.1rem] -ml-[.1rem] ">
                  <svg
                    height={24}
                    width={24}
                    fill="green"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7 17.75c0-.414.336-.75.75-.75h13.5c.414 0 .75.336.75.75s-.336.75-.75.75h-13.5c-.414 0-.75-.336-.75-.75zm-5-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm9-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-7-4c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75s-.336.75-.75.75h-16.5c-.414 0-.75-.336-.75-.75z"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>{' '}
                <h4 className="text-xl">Table of Contents:</h4>
              </summary>
            </button>
            {showTOC ? (
              <ol className="mt-[.5rem]">
                {headings?.map((heading,index) => {
                  const headingText = heading.replace('### ', '');
                  const headingID = generateSlug(headingText);
                  return (
                    <li key={headingID} className="pl-10 -mt-2">
                      <div className="flex gap-1 items-center">
                      <p className="text-sm">{index}</p> 
                      <Link className={cn(" text-gray-400 font-secondary", buttonVariants({variant:"link", size:"sm"}))} href={`#${headingID}`}>
                       {headingText}
                      </Link>
                      </div>
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TableOfContents;
