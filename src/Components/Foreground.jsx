import React, { useRef, useState } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: 'This is the background color',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now',
        tagColor: 'Green',
      },
    },
    {
      desc: 'This is the background color',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Upload',
        tagColor: 'Green',
      },
    },
    {
      desc: 'This is the background color',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now',
        tagColor: 'Green',
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
