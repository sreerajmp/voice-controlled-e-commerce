import React, { useEffect, useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis ,useSpeechRecognition} from 'react-speech-kit';
const Dictaphone = () => {
 const [message, setMessage] = useState('');
 const [value, setValue] = useState('');
 const { speak } = useSpeechSynthesis();
 const commands = [
  {
    command: 'reset',
    callback: () => setValue('')
  },
  {
    command: 'shut up',
    callback: () => setMessage('I wasn\'t talking.')
  },
  {
    command: 'Hello',
    callback: () => setMessage('Hi there!')
  },
]
 const { listen, listening, stop } = useSpeechRecognition({ commands ,
  onResult: (result) => {
    setValue(result);
  },
});
 
//  const {
//    transcript,
//    interimTranscript,
//    finalTranscript,
//    resetTranscript,
//    listening,
//  } = useSpeechRecognition({ commands });

//  useEffect(() => {
//    if (finalTranscript !== '') {
//      console.log('Got final result:', finalTranscript);
//    }
//  }, [interimTranscript, finalTranscript]);
//  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//    return null;
//  }

//  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
//  }
//  const listenContinuously = () => {
//    SpeechRecognition.startListening({
//      continuous: true,
//      language: 'en-GB',
//    });
//  };
 return (
   <div>
     {/* <div>
       <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>
         <button type="button" onClick={resetTranscript}>Reset</button>
         <button type="button" onClick={listenContinuously}>Listen</button>
         <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
       </div>
     </div>

     
     <div>
       {message}
     </div>
     <div>
       <span>{transcript}</span>
     </div> */}
     <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
      {/* <button onMouseDown={listen} onMouseUp={stop}>
        
      </button> */}
      <button type="button" onClick={listen}>🎤Listen</button>
         <button type="button" onClick={stop}>Stop</button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
   </div>
 );
};

export default Dictaphone;