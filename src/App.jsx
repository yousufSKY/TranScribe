import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";

function App() {
  const [file, setfile] = useState(null);
  const [audioStream, setaudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setfile(null);
    setaudioStream(null);
  }

  return (
    <div className="flex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {isAudioAvailable ? (
          <FileDisplay
            handleAudioReset={handleAudioReset}
            file={file}
            audioStream={setaudioStream}
          />
        ) : (
          <HomePage setfile={setfile} setaudioStream={setaudioStream} />
        )}
      </section>

      <h1>hello world</h1>
      <footer></footer>
    </div>
  );
}

export default App;
