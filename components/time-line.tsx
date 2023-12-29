"use client"
import { FC, Key } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

import { TimelineTypes } from '@/types/about';
import TimelineEntry from './timeline-entry';

type TimelineProps = TimelineTypes;

const Timeline: FC<TimelineProps> = ({ timeline }) => {

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '0% 0% -33% 0%',
    triggerOnce: true,
  });



  interface Items {
    map: Function;
  }

  interface Item {
    cName: string;
    title: string;
    content: string;
  }

  const generateTimeline: Function = (items: Items) => {
    return items.map(({ cName, title, content }: Item, i: Key) => (
      <TimelineEntry key={i} cName={cName} title={title} content={content} />
    ));
  };

  return (
    <section>
      <h2 className="text-4xl font-secondary font-semibold text-center">{timeline.meta.title}</h2>
      <div className="mt-8 relative">

        <div className="grid grid-cols-2 pt-[7.5px] font-tertiary">{generateTimeline(timeline.items)}</div>
        <div
          ref={ref}
          className={inView ? 'readMoreLink active' : 'readMoreLink'}
        >
          <Link href={timeline.fullStory.link}>{timeline.fullStory.text}</Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
