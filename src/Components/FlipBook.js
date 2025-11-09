"use client"
import Image from 'next/image';
import Link from "next/link";
import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import Enveloped from "@/Utilities/Images/EnvelopedEdit.jpg"
import invited from "@/Utilities/Images/invited.jpg"
import pleaseJoin from "@/Utilities/Images/pleaseJoin.jpg"
import reminders from "@/Utilities/Images/reminders.jpg"
import godparents from "@/Utilities/Images/godparents.jpg"
import eventdetails from "@/Utilities/Images/eventdetails.jpg"
import giftguide from "@/Utilities/Images/giftguide.jpg"
import rsvp from "@/Utilities/Images/rsvp.jpg"
import dresscode from "@/Utilities/Images/dresscode.jpg"
import church from "@/Utilities/Images/church.png"
import wildlife from "@/Utilities/Images/wildlife.png"
import PromptBox from './PromptBox';

function Book() {

  const pages = [
    invited,
    pleaseJoin,
    godparents,
    eventdetails,
    dresscode,
    reminders,
    giftguide,
    rsvp
  ];

  return (
    <HTMLFlipBook
      width={370}
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <div>
            <PromptBox />
          </div>
          <Image src={Enveloped}
            alt="envelope"
            width={370}
            height={500}
            className='enveImg' />
        </div>
      </div>

      {pages.map((page, index) => (
        <div className="page" key={index}>
          <div className="page-content">
            <Image src={page}
              width={370}
              height={500} alt="envelope" className='enveImg pokemon-logo' />
          </div>
        </div>
      ))}
      <div className="page" >
        <div className="page-content page-content--last">
          {/* <button onClick={() => alert("Envelope Clicked")}>CLick</button> */}
          <div className='rsvpPage'>
            <div className='rsvpWrap'>
              <Link className='rsvpLink ' target="_blank" rel="noopener noreferrer" href="https://forms.gle/rJ8zohpkrAjBQDo5A" >
                <span className='rsvpTxt yellowTail'>Click here for RSVP </span>
              </Link>
              <div className="circle"></div>

            </div>
          </div>
          <div className='mapsLinks'>
            <div className='mapLinkWrap'>
              <div className='yellowTail mapTitle'>
                Our lady of Mt. Carmel Parish, Project 6
              </div>
              <div className='mapLinkImg'>
                <Image

                  src={church}
                  width={150}
                  height={150}
                  alt="envelope"
                  className="mapImg"
                />
              </div>
              <Link className='mapBtnLink' target="_blank" rel="noopener noreferrer" href="https://google.com/maps/place/Our+Lady+of+Mount+Carmel+Parish+-+Project+6+(Diocese+of+Cubao)/@14.6637505,121.0413698,17.25z/data=!4m6!3m5!1s0x3397b718ecd6d7c9:0x30b3057cbbbe0319!8m2!3d14.6624518!4d121.0414896!16s%2Fg%2F1tf6jr6g?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                <button className='mapBtn spectral'>Pin location here</button>

              </Link>
            </div>
            <div className='mapLinkWrap'>
              <div className='yellowTail mapTitle'>
                Ninoy Aquino Parks and Wildlife Center <br /> (BMB training center bldg)
              </div>
              <div className='mapLinkImg'>
                <Image
                  src={wildlife}
                  width={150}
                  height={150}
                  alt="envelope"
                  className="mapImg"
                />
              </div>
              <Link className='mapBtnLink' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/BMB+Training+Center/@14.6520089,121.042314,17.25z/data=!4m14!1m7!3m6!1s0x3397b7059eefe101:0x5271f95cbf47428a!2sNinoy+Aquino+Parks+and+Wildlife+Center!8m2!3d14.6520871!4d121.0452732!16s%2Fm%2F05sxpms!3m5!1s0x3397b724344d2c11:0x3741eb207d250da1!8m2!3d14.6525804!4d121.0422841!16s%2Fg%2F11f6rb0fsq?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                <button className='mapBtn spectral'>Pin location here</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book
