import { useEffect, useState } from "react"
import Modal from "../components/modal/modalWindow";
import "../css/modal.css"
import styled from "styled-components";

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  `;


const App = () =>  {
  // const [animationDelay,setAnimationDelay] = useState(2)
  // delayは0.1秒刻み
  const animationDelay = 2
  // State
  const [modal,setModal] = useState(false);
  const [animation,setAnimation] = useState(false);
  const [overlay,setOverlay] = useState("none")
  // animation
  const animations = () => {
    if(modal === true) {
      setAnimation(true)
      setTimeout(() => {
        setModal(false);
        setOverlay("none")
      },animationDelay*100)
    }else if(modal === false){
      setModal(true)
      setAnimation(false)
      setOverlay("flex")
    }
  }
  useEffect(() =>{
  })
  return (
    <>
      <StyledOverlay display={overlay} onClick={animations}>
        <Modal
          back={"rgba(0,0,0,0.3)"}
          display={modal ? "flex":"none"}
          animation={animation ? `close 0.${animationDelay}s ease` : `open 0.${animationDelay}s ease`}
        />
      </StyledOverlay>
      <div className="wrap">
        <button className="btn" onClick={animations}>もーだるウィンドウ表示</button>
      </div>
    </>
  )
}


export default App