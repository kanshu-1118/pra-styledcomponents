import React, { useState } from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
    color: ${props => (props.active ? "blue" : "red")};
    background-color: ${(props) => props.bgc};
    display: ${(props) => props.dis};
    align-items: center;
    justify-content: center;
    width:300px;
    height:200px;
    position: absolute;
    transition: 1s ease;
    animation: ${(props) => props.ani};
    transform: translateX(-50%) translateY(-50%);
    @keyframes open {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes close {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`;
const StyleModal = styled.div`
    width: 200px;
    height: 100px;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const modalWindow = (props) => {
    const [active,setActive] = useState(true)

    // const colorToggle =  () => {
    //     setActive(!active);
    // }
    return (
        <div>
            <StyledDiv
                active={active}
                bgc={props.back}
                dis={props.display}
                ani={props.animation}
            >
                <StyleModal>
                    <h1>helloworld</h1>
                </StyleModal>
            </StyledDiv>
            {/* <button onClick={colorToggle}>色を変える</button> */}
        </div>
    )
}

export default modalWindow