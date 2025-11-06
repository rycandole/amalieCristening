"use client"
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import EnvelopeClose from "@/Utilities/Images/EnvelopeClose.png"
import EnvelopeOpen from "@/Utilities/Images/Envelope.png"
import Amalie1 from "@/Utilities/Images/amalie_11.jpg"
import Amalie2 from "@/Utilities/Images/amalie_22.jpg"
import invited from "@/Utilities/Images/invited.jpg"
import pleaseJoin from "@/Utilities/Images/pleaseJoin.jpg"
import reminders from "@/Utilities/Images/reminders.jpg"
import godparents from "@/Utilities/Images/godparents.jpg"
import eventdetails from "@/Utilities/Images/eventdetails.jpg"
import giftguide from "@/Utilities/Images/giftguide.jpg"
import rsvp from "@/Utilities/Images/rsvp.jpg"
import dresscode from "@/Utilities/Images/dresscode.jpg"



const page = () => {



  const handleCLick = () => {
    alert("Envelope Clicked")
  }




  return (
    // <MainWrapper>
    //   <section className='hero'>
    //     <div className='heroWrap'>
    //       <div className='name ms-madi'>Amalie Avielarose</div>
    //       <div className='date'>12.14.2025</div>
    //       <div className='imgEnvWrap' onClick={handleCLick}>
    //         <Image src={EnvelopeClose} alt="envelope" className='imgEnv' />
    //         <div className="circle"></div>
    //       </div>
    //     </div>
    //   </section>
    // </MainWrapper>



    // <DetailsWrapper>
    //   <section className='sectionWrap'>
    //     <div className='enveWrap'>
    //       <div className='enveImgWrap' onClick={handleCLick}>
    //         <div className='enveTxt ms-madi'>{`You're invited!`}</div>
    //         <Image src={EnvelopeOpen} alt="envelope" className='enveImg' />
    //       </div>
    //     </div>
    //     <div className='details'></div>
    //     <div className='rsvp'>
    //       <div className='rsvpWrap'>
    //         <span>Kindly RSVP here</span>
    //       </div>
    //     </div>
    //     <div className='amalie'>
    //       <div className='amalieWrap'>
    //         <div className='amalieImgWrap' onClick={handleCLick}>
    //           <Image src={Amalie1} alt="envelope" className='amalieImg' />
    //         </div>
    //         <div className='amalieTxt ms-madi'>{`Amalie "Ali" Avielarose`}</div>

    //       </div>
    //     </div>
    //   </section>
    // </DetailsWrapper>

    <MainWrap>
      <section className='sectionWrap'>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={invited} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={pleaseJoin} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={dresscode} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={rsvp} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={giftguide} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={eventdetails} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={godparents} alt="envelope" className='enveImg' />
          </div>
        </div>
        <div className='enveWrap'>
          <div className='enveImgWrap' onClick={handleCLick}>
            <Image src={reminders} alt="envelope" className='enveImg' />
          </div>
        </div>
        update
      </section>

    </MainWrap>
  )
}

const MainWrapper = styled.div`
  background-color: #F5D9D5;

  .hero {
    font-family: {var(--font-sour-gummy)}
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    // max-height: 100vh;
    padding: 48px 24px;
  }

  .heroWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    
  }

  .name {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0 0 18px 0px;
  }

  .date {
    font-size: 1rem;
    text-align: center;
    // margin-bottom: 2rem;
  }

  .imgEnvWrap {
    width: 100%;
    height: 400px;
    // border: 1px solid black;
    position: relative;
    cursor: pointer;
  }

  .imgEnv {
    object-fit: contain;
    width: 100%;
    height: 99%;
    // bacgkground-color: #F5D9D5;
  }

.circle{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 100px;
    background-color: #F5D9D5;
    opacity: 0.2;
    color: white;
    text-align: center;
    line-height: 100px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border-radius: 50%;
    font-size: 1.3rem;
    &:hover{
        cursor: pointer;
    }
    &::after,&::before{
        content: "";
        display: block;
        position: absolute;
        top:0;
        left:0;
        width: 100px;
        height: 100px;
        background: rgba(255, 95, 122,1);
        border-radius: 50%;
        z-index: -1;
        animation: grow 1s ease-in-out infinite;
    }
    &::after{
        background: rgba(255, 95, 122,0.4);
        &::before{
        content: "";
        display: block;
        position: absolute;
        top:0;
        left:0;
        width: 100px;
        height: 100px;
        background: rgb(95, 132, 255);
        border-radius: 50%;
        z-index: -1;
        animation: grow 1s ease-in-out infinite;
        }
    }
    &::before{
        background: rgba(255, 95, 122,.6);
        animation-delay: -0.5s;
    }
}
@keyframes grow{
    0%{
        transform: scale(1,1);
        opacity: 1;
    }
    100%{
        transform: scale(1.8,1.8);
        opacity: 0;
    }
}

`

const DetailsWrapper = styled.div`
  background-color: #F5D9D5;

  .sectionWrap {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 18px;
    height: 100vh;
  }

  .enveWrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .enveTxt {
    position: absolute;
    top: 66px;
    left: 65px;
    transform: rotate(-11deg);
    font-size: 1.8rem;
  }

  .enveImgWrap {
    text-align: center;
    width: 240px;
    height: 240px;
    position: relative;
  }

  .enveImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .rsvp {
    position: relative;
  }

  .rsvpWrap {
    width: 100px;
    height: 120px;
    border: 1px dotted #F5D9D5;
    background: #aad9d4;
    color: #FFF;
    padding: 18px;
    font-size: 1.6rem;
    line-height: 28px;
    position: absolute;
    top: -50px;
    left: 80px;
  }

  .amalie {
    position: relative;
  }

  .amalieWrap {
    width: 100px;
    height: 140px;
    background: #FFF;
    position: absolute;
    top: -90px;
    left: 213px;
  }

  .amalieImgWrap {
    text-align: center;
    width: 100%;
    // height: 100px;
    position: relative;
    border-bottom: 1px solid black;
  }

  .amalieImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const MainWrap = styled.div` 
  background-color: #F5D9D5;

  .sectionWrap {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 18px;
    height: 100vh;
  }
  
  .enveWrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .enveImgWrap {
    text-align: center;
    width: 100%;
    // height: 240px;
    position: relative;
  }

  .enveImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export default page
