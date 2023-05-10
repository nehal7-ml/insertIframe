import React, { useEffect, useState } from 'react'

function Iframe() {

  const [url, setUrl] = useState("");

  useEffect(() => {
    chrome.storage.sync.get("inject").then(({ inject }) => {

      setUrl(inject);
    });

  });

  return (
    <><div id="dragable-iframe" className="frameOverlay"></div>
      <div className="draggable resizable">
        <div className="handle"></div>
        <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen={false}></iframe>
      </div>
    </>)
}

export default Iframe