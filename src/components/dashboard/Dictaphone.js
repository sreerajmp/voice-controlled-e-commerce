import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GlobalContext } from "../../state/global/GlobalContextProvider";
const msg = new SpeechSynthesisUtterance()
const Dictaphone = () => {
  const globalCtx = useContext(GlobalContext);
  const [message, setMessage] = useState('');
  const [readStatus, setReadStatus] = useState(-1);
  const [keyCmdStack, setKeyCmdStack] = useState([]);
  const location = useLocation();
  const [productData, setProductData] = useState(globalCtx.globalState.allData)
  let navigate = useNavigate();
  const commands = [
    {
      command: 'reset',
      callback: () => { resetTranscript(); setMessage('') }
    },
    {
      command: 'shut up',
      callback: () => { setMessage('I wasn\'t talking.'); SpeechRecognition.stopListening() }
    },
    {
      command: "Hello let's buy",
      callback: () => { setMessage('Hi there!'); speechHandler('hoe u doing!') }
    },
    {
      command: "go to Wishlist",
      callback: () => {
        setMessage('going to Wishlist page!');
        speechHandler('going to Wishlist page!'); navigate('/WishList')
      }
    },
    {
      command: "go to Search",
      callback: () => {
        setMessage('going to Search Result Page!');
        speechHandler('going to Search Result Page!'); navigate('/SearchResultPage');
      }
    }, {
      command: "search for shirt",
      callback: () => {
        setMessage('going to Search Result Page!');
        speechHandler('going to Search Result Page!'); navigate('/SearchResultPage'); filterProduct("shirt")
      }
    },
    {
      command: "search for shoes",
      callback: () => {
        setMessage('going to Search Result Page!');
        speechHandler('going to Search Result Page!'); navigate('/SearchResultPage'); filterProduct("shoes")
      }
    }, {
      command: "search for jacket",
      callback: () => {
        setMessage('going to Search Result Page!');
        speechHandler('going to Search Result Page!'); navigate('/SearchResultPage'); filterProduct("jacket")
      }
    },
    {
      command: "read result",
      callback: () => { navigate('/SearchResultPage'); readResult("start") }
    },
    {
      command: "read next",
      callback: () => { navigate('/SearchResultPage'); readResult("nxt") }
    },
    {
      command: "read previous",
      callback: () => { navigate('/SearchResultPage'); readResult("prv") }
    },
    {
      command: "show details",
      callback: () => { navigate('/detail', { state: { prdtData: globalCtx.globalState.allData[readStatus] } }) }
    },
    {
      command: "add to wishlist",
      callback: () => addToWishList()
    },
    {
      command: "add to cart",
      callback: () => addToCart()
    },
    ,
    {
      command: "go to cart",
      callback: () =>{navigate('/Cart')}
    },
    {
      command: "buy now",
      callback: () => buyNow()
    }
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  const speechHandler = (value) => {
    msg.text = value
    window.speechSynthesis.speak(msg)
  }
  // useEffect(() =>{
  //   setMessage(transcript)
  // },[interimTranscript])
  useEffect(() => {
    if (readStatus > -1) {
      globalCtx.globalState.allData.forEach((item, index) => {
        if (index == readStatus) {
          item.selected = true
        }
        if (index != readStatus) {
          item.selected = false
        }
      });
      globalCtx.globalDispatch({ type: "SEARCH", payload: globalCtx.globalState.allData })
      speechHandler(globalCtx.globalState.allData[readStatus]?.title)
    }
  }, [readStatus])
  const filterProduct = (filter) => {
    let searchdata = []
    productData.map((itm, indx) => {
      console.log("itm.tag22:", itm.tag);
      if (itm.tag == filter) {
        console.log("itm.tag:", itm.tag);
        searchdata.push(itm)
      }
    })
    globalCtx.globalDispatch({ type: "SEARCH", payload: searchdata })
  }
  const addToWishList = () => {
    if (location.pathname == "/detail") {
      globalCtx.globalDispatch({ type: "WISH", payload: location.state.prdtData.id })
      speechHandler("Product added to wish list")
      setMessage("Product added to wish list")
    }

  }
  const addToCart = () => {
    if (location.pathname == "/detail") {
      globalCtx.globalDispatch({ type: "CART", payload: location.state.prdtData.id })
      speechHandler("Product added to cart")
      setMessage("Product added to cart")
    }
  }
  const buyNow = () => {
    if (location.pathname == "/detail") {
      // globalCtx.globalDispatch({ type: "CART", payload: location.state.prdtData.id })
      speechHandler("Going to checkout page. Press F to confirm J to cancel")
      setMessage("Going to checkout page. Press F to confirm J to cancel")
      globalCtx.globalDispatch({ type: "BUYNOW"})
    }
  }
  const readResult = (cntrl) => {
    if (cntrl == "start") {
      console.log("readinggg condn");
      setReadStatus(0)
    }
    if (cntrl == "nxt") {
      console.log("next", readStatus);
      setReadStatus(readStatus + 1)
    }
    if (cntrl == "prv" && readStatus >= 1) {
      console.log("prv", readStatus);
      setReadStatus(readStatus - 1)
    }
  }
  useEffect(() => {
    console.log("keyCmdStack chn:", keyCmdStack)
    if (keyCmdStack.length == 4 && keyCmdStack.every(item => item == "Space")) {
      listenContinuously()
      setKeyCmdStack([])
    }
  }, [keyCmdStack])

  useEffect(() => {
    window.addEventListener('keypress', e => {
      console.log("", e.code, location)
      if (e.code == "Space" && e.target == document.body) {
        e.preventDefault();
        // return false;
      }
      if(e.code=='KeyF' && location.pathname=='/CheckOutPage'){globalCtx.globalDispatch({type:'CONFIRM'})}
      if(e.code=='KeyJ' && location.pathname=='/CheckOutPage'){globalCtx.globalDispatch({type:'CANCEL'})}
      if (keyCmdStack.length >= 4) {
        keyCmdStack.shift()
      }
      keyCmdStack.push(e.code)

      setKeyCmdStack([...keyCmdStack])

    });

  }, []);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    if (!listening) {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'en-GB',
      });
      speechHandler("Welcome to letsbuy")
    }
    SpeechRecognition.stopListening()
  };
  return (
    <div>
      <div>
        {/* <span>
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span> */}

        <div>
          {/* <button type="button" onClick={resetTranscript}>Reset</button> */}
          <button type="button" onClick={listenContinuously}> {listening ? 'Stop Listening' : 'Listen'}</button>
          {/* <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button> */}
          {/* <button onClick={() => speechHandler(transcript)}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g data-name="Layer 2">
                <g data-name="mic">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4z" />
                  <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0
                          0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7
                          7 0 0 0 19 11z"/>
                </g>
              </g>
            </svg>
            Speak</button> */}
          <span>{transcript}</span>
          {/* <span>{finalTranscript}</span> */}
          <span>{message}</span>

        </div>
      </div>
      {/* <div>
       <span>{transcript}</span>
     </div> */}
    </div>
  );
};

export default Dictaphone;