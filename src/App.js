import { useState, useEffect, useRef } from "react";

function App() {
  const [switchToOutput, setSwitchOutput] = useState(false)

  const [BasicIncome, setBasicIncome] = useState(0)
  const [HRA, setHRA] = useState(0)
  // const [DA, setDA] = useState(0)
  const [TA, setTA] = useState(0)
  const [otherAllowance, setOtherAllowance] = useState(0)
  const [NPSAllowance, setNPSAllowance] = useState(false)


  return (
    <div className="App h-dvh text-white bg-black flex flex-col ">
      {
        !switchToOutput ?
          <div className=" w-full h-14 flex-none text-3xl font-bold flex justify-around items-center overflow-hidden">
            <div>
            वेतन
          </div>
          <img src="profileImg.png" className=" w-20 h-18 translate-y-5 translate-x-10"/>

            </div>
          :
          <div className=" w-full h-14 flex-none text-3xl font-bold flex ">
            <div className="h-full w-2/5 overflow-hidden">
              <img src="profileImg.png" className=" w-20 h-18 -translate-y-4 translate-x-10"/>
            </div>
            <div className="h-full w-2/6 justify-center flex items-center">
              जुने 
            </div>
            <div className="h-full w-2/6 justify-center flex items-center">
              नवीन
            </div>

          </div>

      }
      {switchToOutput ? "" : <InputTable
        setSwitchOutput={setSwitchOutput}
        setBasicIncome={setBasicIncome}

        setHRA={setHRA}
        HRA={HRA}
        // setDA={setDA}
        setTA={setTA}
        TA={TA}

        setOtherAllowance={setOtherAllowance}
        otherAllowance={otherAllowance}

        setNPSAllowance={setNPSAllowance}
        NPSAllowance={NPSAllowance}
      />}

      {!switchToOutput ? "" :
        <>
          <div className=" h-full w-full overflow-scroll">
            <OutPut1
              switchToOutput={switchToOutput}
              BasicIncome={BasicIncome}
              HRA={HRA}
              // DA={DA}
              TA={TA}
              otherAllowance={otherAllowance}
              NPSAllowance={NPSAllowance}
            />
          </div>
          <div className="h-14 p-1 bg-blue-900 px-8">
            <div role={"button"} onClick={() => { setSwitchOutput(false) }} className=" bg-red-500 rounded-full text-center h-full  justify-center flex flex-col flex-none hover:bg-cyan-400 font-bold text-xl">
              Back
            </div>
          </div>
        </>
      }
    </div>
  );
}

function InputTable(props){
  useEffect(() => {
    props.setHRA(9)
    props.setTA(1350)
    props.setOtherAllowance(0)
  },[])
  return (
    <div className=" h-full w-full bg-blue-900 rounded-sm flex flex-col">
      <div className=" h-5/6 w-full flex flex-col justify-evenly  items-center flex-grow ">
        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">मूळ पगार BASIC</div>
          <input onChange={(e) => { props.setBasicIncome(e.target.value) }} className=" w-2/5 text-center text-black rounded-sm outline-none " placeholder="Input" />
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex  ">
          <div className=" w-3/5 h-full p-2 ">घरभाडे % HRA <div className=" text-sm text-gray-300">येथे ९,१८,२७ यांपैकी आकडे टाका</div></div>
          <input onChange={(e) => { props.setHRA(e.target.value) }} value={props.HRA} className=" w-2/5 text-center text-black rounded-sm  outline-none" placeholder="Input" />
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">महागाई भत्ता % DA</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center font-bold">53%</div>
          {/* <input onChange={(e) => { props.setDA(e.target.value) }} className=" w-2/5 text-center text-black rounded-sm outline-none" placeholder="Input" /> */}
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">प्रवास भत्ता TA</div>
          <input onChange={(e) => { props.setTA(e.target.value) }} value={props.TA} className=" w-2/5 text-center text-black rounded-sm outline-none" placeholder="Input" />
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">इतर भत्ते</div>
          <input onChange={(e) => { props.setOtherAllowance(e.target.value) }} value={props.otherAllowance} className=" w-2/5 text-center text-black rounded-sm outline-none" placeholder="Input" />
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">NPS Allowance (14%)</div>
          {/* <input onChange={(e) => { props.NPSAllowance(e.target.value) }} className=" w-2/5 text-center text-black rounded-sm outline-none" placeholder="Input" /> */}
          <div role={"button"} onClick={() => {props.setNPSAllowance(!props.NPSAllowance)}} className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center font-bold">{props.NPSAllowance? "YES":"NO"}</div>
        </div>

      </div>
      <div className="h-14 p-1 bg-blue-900 px-8 flex flex-col flex-none justify-center items-center">
        <div role={"button"} onClick={() => { props.setSwitchOutput(true) }} className=" bg-red-500 rounded-full text-center h-full w-1/2  justify-center flex flex-col flex-none hover:bg-cyan-400 font-bold text-xl">
          Submit
        </div>
      </div>
    </div>
  )
}
function Line(){
  return (
    <div className="bg-white w-full border-b"></div>
  )
}


function OutPut1(props){
  const [juneBasicIncome, setJuneBasicIncome] = useState(0)
  const [juneHRA, setJuneHRA] = useState(0)
  const [juneDA, setJuneDA] = useState(0)
  const [juneTA, setJuneTA] = useState(0)
  const [juneotherAllowance, setJuneOtherAllowance] = useState(0)
  const [juneNPSAllowance, setJuneNPSAllowance] = useState(0)
  const [juneTotal, setJuneTotal] = useState(0)

  const [julyBasicIncome, setJulyBasicIncome] = useState(0)
  const [julyHRA, setJulyHRA] = useState(0)
  const [julyDA, setJulyDA] = useState(0)
  const [julyTA, setJulyTA] = useState(0)
  const [julyOtherAllowance, setJulyOtherAllowance] = useState(0)
  const [julyNPSAllowance, setJulyNPSAllowance] = useState(0)
  const [julyTotal, setJulyTotal] = useState(0)

  useEffect(() => {
    if(!props.switchToOutput){
      return
    }
    setJuneBasicIncome(props.BasicIncome)
    setJuneHRA(props.BasicIncome*props.HRA /100)
    setJuneDA(props.BasicIncome * 50 / 100)
    setJuneTA(props.TA)
    setJuneOtherAllowance(props.otherAllowance)
    if (props.NPSAllowance) {
      var npsAllow = Math.ceil((juneBasicIncome*1 + juneDA*1)*  14 / 100)
        setJuneNPSAllowance(npsAllow)
    } else {
        setJuneNPSAllowance(0)
    }

    // setJulyBasicIncome(Math.ceil(((props.BasicIncome * 3 / 100) + props.BasicIncome * 1 )/100)* 100)
    setJulyBasicIncome(props.BasicIncome)
    if(props.HRA == 9){
      setJulyHRA(julyBasicIncome * 9 / 100) 
    } else if (props.HRA == 18){
      setJulyHRA(julyBasicIncome * 18 / 100) 
    }else if (props.HRA == 27){
      setJulyHRA(julyBasicIncome * 27 / 100) 
    }else{
      setJulyHRA(0) 
      alert("Value can only be 9, 18, 27")
    }

    setJulyDA(julyBasicIncome * 53 /100)
    setJulyTA(props.TA)
    setJulyOtherAllowance(props.otherAllowance)
    if (props.NPSAllowance) {
      var npsAllow = Math.ceil((julyBasicIncome*1 + julyDA*1) * 14 / 100)
      console.log((julyBasicIncome*1 + julyDA*1) * 14 / 100)
      setJulyNPSAllowance(npsAllow)
    } else {
      setJulyNPSAllowance(0)
    }
  }, [props.switchToOutput, julyBasicIncome, julyDA])
  useEffect(() => {
    setJulyTotal(julyBasicIncome*1+julyHRA*1+julyDA*1+julyTA*1+julyOtherAllowance*1+julyNPSAllowance*1)
    console.log("h",julyBasicIncome*1)
    console.log("h",julyHRA*1)
    console.log("h",julyDA*1)
    console.log("h",julyTA*1)
    console.log("h",julyOtherAllowance*1)
    console.log("july nps : ",julyNPSAllowance)

    console.log("total july", julyBasicIncome*1+julyHRA*1+julyDA*1+julyTA*1+julyOtherAllowance*1+julyNPSAllowance*1)
  }, [julyDA, julyHRA, julyTA, julyBasicIncome, julyNPSAllowance])
  useEffect(() => {
    setJuneTotal(juneBasicIncome*1+juneHRA*1+juneDA*1+juneTA*1+juneotherAllowance*1+juneNPSAllowance*1) 
  }, [juneDA, juneHRA, juneotherAllowance, juneBasicIncome, juneTA, juneNPSAllowance])


  return(
    <div className=" h-full w-full bg-blue-900 rounded-sm flex flex-col">
      <div className=" h-5/6 w-full flex flex-col justify-evenly  items-center flex-grow ">
        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">मूळ पगार BASIC</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneBasicIncome}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyBasicIncome}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">घरभाडे % HRA</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneHRA}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyHRA}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">महागाई भत्ता % DA</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneDA}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyDA}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">प्रवास भत्ता TA</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneTA}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyTA}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">इतर भत्ते</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneotherAllowance}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyOtherAllowance}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">NPS Allowance</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneNPSAllowance}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyNPSAllowance}</div>
        </div>
        <Line />

        <div className=" w-full border-slate-200 flex p-2 ">
          <div className=" w-3/5 h-full p-2 ">Total</div>
          <div className="bg-white w-2/5 rounded-sm text-black mx-1 flex justify-center items-center">{juneTotal}</div>
          <div className="bg-white w-2/5 rounded-sm text-black flex justify-center items-center">{julyTotal}</div>
        </div>

      </div>
    </div>
  )

}

export default App;
