import React from "react";

const geeks = () => {
  return (
    <div>
      {/** STATIC / W & H + absolute positions */}
      <h1 className="text-green-600 text-5xl font-bold">GeeksforGeeks</h1>
      <b>Tailwind CSS Position Class</b>
      <div className="static text-left p-2 m-2 bg-green-200 w-48 h-48">
        <p className="font-bold">Static parent+54566</p>
        <div className="absolute bottom-0 left-0 p-2 bg-blue-200">
          <p>Absolute child</p>
        </div>
      </div>
      {/** Overlow-auto, MAX = margin left and right, h text-justify FLOAT - text above the text behind */}
      <h1 className="text-green-600 text-5xl font-bold">GeeksforGeeks</h1>
      <b>Tailwind CSS Position Class</b>
      <div className="overflow-auto bg-green-200 mx-16 h-24 text-justify">
        <div className="float-right fixed">
          <p className="bg-green-500 p-2">Geeksforgeeks Fixed Child</p>
        </div>
        <p>
          How many times were you frustrated while looking out for a good
          collection of programming/algorithm/interview questions? What did you
          expect and what did you get? This portal has been created to provide
          well written, well thought and well explained solutions for selected
          questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He
          loves to solve programming problems in most efficient ways. Apart from
          GeeksforGeeks, he has worked with DE Shaw and Co. as a software
          developer and JIIT Noida as an assistant professor.It is a good
          platform to learn programming. It is an educational website. Prepare
          for the Recruitment drive of product based companies like Microsoft,
          Amazon, Adobe etc with a free online placement preparation course.
        </p>
      </div>
      {/** Static */}
      <h1 className="text-green-600 text-5xl font-bold">GeeksforGeeks</h1>
      <b>Tailwind CSS Position Class</b>
      <div className="static text-left p-2 m-2 bg-green-200 h-48">
        <p className="font-bold">Static parent</p>
        <div className="absolute bottom-10 left-10 p-2 bg-green-500">
          <p>Absolute child</p>
        </div>
      </div>
      {/** Relative */}
      <h1 class="text-green-600 text-5xl font-bold"> GeeksforGeeks</h1>
      <b>Tailwind CSS Position Class</b>
      <div className="static text-left p-2 m-2 bg-green-200 h-48">
        <p className="font-bold">Static parent</p>
        <div className="relative p-2 inline-block bg-green-500">
          <p>Relative child</p>
        </div>
        <div className="relative p-2 inline-block bg-green-600">
          <p>Relative Sibling child</p>
        </div>
        <div className="relative p-2 inline-block bg-blue-600">
          <p>Relative Sibling child</p>
        </div>
      </div>
      {/** Overflow & w, sticky,  */}
      <h1 class="text-green-600 text-5xl font-bold">GeeksforGeeks</h1>
      <b>Tailwind CSS Position Class</b>
      <div class="w-3/4 bg-green-200 h-24 overflow-auto">
        <div>
          <div class="p-2 sticky top-0 bg-green-500 text-right">
            Sticky Heading 1
          </div>
          <p class="py-4">
            How many times were you frustrated while looking out for a good
            collection of programming/algorithm/interview questions? What did
            you expect and what did you get? This portal has been created to
            provide well written, well thought and well explained solutions for
            selected questions.
          </p>
        </div>
        <div>
          <div class="p-2 sticky top-0 bg-green-500 text-right">
            Sticky Heading 2
          </div>
          <p class="py-4">
            How many times were you frustrated while looking out for a good
            collection of programming/algorithm/interview questions? What did
            you expect and what did you get? This portal has been created to
            provide well written, well thought and well explained solutions for
            selected questions.
          </p>
        </div>
        <div>
          <div class="p-2 sticky top-0 bg-green-500 text-right">
            {" "}
            Sticky Heading 3
          </div>
          <p class="py-4">
            How many times were you frustrated while looking out for a good
            collection of programming/algorithm/interview questions? What did
            you expect and what did you get? This portal has been created to
            provide well written, well thought and well explained solutions for
            selected questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default geeks;
