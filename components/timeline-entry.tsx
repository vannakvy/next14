"use client"

import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

type TimelineEntryProps = {
  cName: string;
  title: string;
  content: string;
};

const TimelineEntry: FC<TimelineEntryProps> = (props) => {
  const { cName, title, content } = props;

  const { ref, inView } = useInView({
    rootMargin: '60% 0% -60% 0%',
  });
  // className={cn(inView ? 'timeline active' : 'timeline')}
  return (
    <div ref={ref} className={inView ? 'timeline active' : 'timeline'}>
      <div
        className={inView ? 'scrollHighlight active' : 'scrollHighlight'}>
      </div>
      <div className={cName}>
        <h3 className="mb-2 font-secondary text-[17px] font-semibold leading-5">{title}</h3>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default TimelineEntry;