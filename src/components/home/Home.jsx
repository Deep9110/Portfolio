import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Nav from "./nav/Nav"
import Social from './social/Social';
import Social2 from './social/Social2';
const Home = () => {
  return (
    <Wrapper>
       
       <Spline className='spline' scene="https://prod.spline.design/M6uKSsW-b82Y8bNj/scene.splinecode">
       
       </Spline>
        
        
       <Nav/>
        <Content>

            <span>Hi, i am </span>
            <h1>Deepsundar Rout</h1> 
            <span>Frontend Developer</span>
            <p>I have a Master's degree on Computer Application. Currently focused on learning Javascript 
                Fullstack Web development. I am Open for Work, Collaboration & Job Opportunity</p>
            <a href="/"><button>Resume</button></a>
            <Social2/>
        </Content>
        <Social/>


        
        
        
    </Wrapper>
    
    
  )
}

const Wrapper = styled.div`
font-family: 'Spline Sans', sans-serif;
font-size: 16px;
color:white;
position:relative;
height:100vh;
width:100%;
z-index:0;


    .spline{
        position:absolute;
        margin:0;
        top:0;
        right:0;
    }

    @media (max-width: 768px){
        height:100vh;
        .spline{
            visibility:hidden;
        }

    }
`
const Content = styled.div`
    color:white;
    // z-index:1;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:start;
    // width:100%;
    justify-content:center;
    gap:10px;
    height:auto;
    max-width:400px;
    background:transparent;

    h1{
        font-family: 'Spline Sans Mono', monospace;
        font-weight:bold;
        font-size:65px;
        margin:0;
        
        
    }
    span{
        font-weight:normal;
        line-height:150%;
        max-width:380px;
        font-size:25px;
    }

    p{
        font-size: 1rem;
        max-width: 400px;
        text-align:start;
        line-height:1.8;
        padding-bottom: 1.5rem;
        letter-spacing: 2px;
    }
    

    button{
        position:relative;
        padding: 10px 30px;
        margin: 45px 0;
        color:#fff;
        font-weight:bold;
        text-decoration:none;
        font-size:18px;
        text-transform: uppercase;
        transition: 0.5s;
        width:180px;
        background:transparent;
        border:none;
        letter-spacing: 4px;
    }
    h1, p, span, button{
        margin: 0 30px 0 48px;
    }
    button::before{
        content: " ";
        position:absolute;
        top:-1px;
        left: -1px;
        width:10px;
        height:10px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        transition: 0.5s;
        transition-delay: 0.5s;
    }
    button::after{
        content:" ";
        position:absolute;
        bottom:-1px;
        right: -1px;
        width:10px;
        height:10px;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        transition: 0.5s;
        transition-delay: 0.8s;
    }
    button:hover::before,
    button:hover::after{
        width:100%;
        height:100%;
        transition-delay: 0s;
    }
    button:hover{
        background: #320BC4;
        color:#fff;
        border-radius: 5px;
        box-shadow: 0 0 20px #320BC4;
        transition-delay:0.5s;
    }

    @media (max-width: 768px){
        align-items:start;
        
        h1{
            font-size:60px;
        }
        span{
            color:#e3c29e;
        }
        h1, p, span, button{
            margin: 0 30px 0 40px;
        }
    }
    @media (max-width: 420px){
        align-items:start;
        
        h1{
            font-size:45px;
        }
        h1, p, span, button{
            margin: 0 30px 0 32px;
        }
    }
`
export default Home