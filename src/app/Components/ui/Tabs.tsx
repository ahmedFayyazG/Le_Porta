import React from "react";
import Image from "next/image";
import { Tabs } from "./AnimatedTabs"; // Adjust the path to where the Tabs component is located
// Example tab data with more meaningful content
//Just To Check..
const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const tabData = [
  {
    title: "React",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Bubble.io",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Artificial Intelligence",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
];

const ParentComponent = () => {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-8xl mx-auto w-full  items-start justify-start my-40">
      <Tabs
        tabs={tabData} // Passing filled data for the tabs
      />
      {/* <Image
        src="./op"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      /> */}
    </div>
  );
};

export default ParentComponent;
