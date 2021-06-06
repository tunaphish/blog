import * as React from "react"
import styled from 'styled-components';

const Logo = styled.svg`
    height: var(--fontSize-6);
    margin-left: var(--spacing-3);
    margin-top: -var(--spacing-1);

    > * {
        transition: all 0.8s;
    }
    > *:hover {
        fill: white;
        transition: all 0.1s;
    }
`;

const PrimaryColor = styled.polygon`
    fill: #0392D9;
`;

const SecondaryColor = styled.path`
    fill: #1DBCD6;
`;

const TertiaryColor = styled.path`
    fill: #035CD9;
`;

const Phish = () => (
  <Logo className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
    <PrimaryColor className="topbody" points="127.5,256.5 431.5,128.5 191.5,128.5 " />
    <PrimaryColor className="bottombody" points="431.5,383.5 191.5,383.5 127.5,256.5 " />
    <SecondaryColor className="mainbody" d="M493.3,252l-61.8-123.5l-304,128l304,127L493.2,261C494.7,258.2,494.7,254.8,493.3,252z" />
    <TertiaryColor className="topfin" d="M191.5,20.2v108.3h240l-235.7-111C193.8,16.6,191.5,18,191.5,20.2z" />
    <TertiaryColor className="bottomfin" d="M191.5,383.5v107.3c0,2.2,2.3,3.6,4.3,2.7l235.7-110H191.5z" />
    <SecondaryColor className="tailfin" d="M127,257L21.3,134.1c-1.8-2.1-5.3-0.8-5.3,2V376c0,2.8,3.4,4.1,5.3,2l106.2-121.5" />
  </Logo>
);

export default Phish;