import React, { useState } from "react";

function UrlShortener({ handleClick }) {
  const [url, setUrl] = useState("");
  const validateUrl = (url) => {
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    if (regex.test(url)) {
      setUrl(url);
    } else {
      setUrl("");
    }
  };
  return (
    <div className="container absolute top-[-4rem] rounded-lg bg-primary_dark_violet bg-shortenMobile bg-cover lg:flex lg:h-[150px] lg:w-full lg:items-center lg:justify-center lg:bg-shortenDeskTop">
      <div className="flex flex-col gap-3 px-5 py-6 lg:w-full lg:flex-row lg:items-center lg:justify-evenly lg:gap-5 lg:px-12">
        <input
          type="text"
          name="longURL"
          placeholder="Shorten a link here..."
          className="rounded-lg py-3 px-5 lg:basis-3/4"
          onChange={(e) => validateUrl(e.target.value)}
        />
        <button
          type="button"
          disabled={url === ""}
          className="rounded-lg bg-primary_cyan px-8 py-3 text-base font-bold text-white hover:bg-hover disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary_cyan lg:basis-1/4"
          onClick={() => handleClick(url)}
        >
          Shorten it!
        </button>
      </div>
    </div>
  );
}

export default UrlShortener;
