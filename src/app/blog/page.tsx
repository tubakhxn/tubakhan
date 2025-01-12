import React from "react";

function Page() {
  return (
    <div className="container mx-auto text-zinc-300 flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-3xl">Visit My Blog!</h1>
        <p>
          You can visit my blog{" "}
          <a
            href="https://tubakhan.art.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            tubakhan.art.blog
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
