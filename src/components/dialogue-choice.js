import * as React from "react"
import styled from 'styled-components';

const DialogueBox = styled.div`
  font-family: "VT323", serif;
  color: #CEBFE4;
  font-size: 24px;

  background: #2506D1;
  width: 350px;
  border: 10px solid #CEBFE4;
  padding: 1rem;
`

const DialogueOptions = styled.div`
  > input {
    display: none;
  }

  > label {
    margin-right: 20px;
  }

  > label::before {
    content: "";
    display: inline-block;
    border-top: 10px solid transparent;
    border-left: 10px solid;
    border-bottom:10px solid transparent;
    opacity: 0;
    position: relative;
    right: 5px;
  }

  > input:checked + label::before {
    animation: .5s steps(1,end) infinite blink-animation;
  }

  @keyframes blink-animation {
      50% { opacity: 1; }
  }
`

const DialogueChoice = () => (
  <DialogueBox>
    <div>
      Will you rest a while?
    </div>
    <DialogueOptions>
      <input type="radio" name="choice" id="rest" class="choiceradio" checked/>
      <label for="rest" class="choice">REST</label>

      <input type="radio" name="choice" id="continue" class="choiceradio"/>
      <label for="continue" class="choice">CONTINUE</label>
    </DialogueOptions>
  </DialogueBox>
);

export default DialogueChoice;