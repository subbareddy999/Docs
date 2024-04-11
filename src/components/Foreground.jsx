import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
  let ref = useRef();
  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green"},
    }
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
