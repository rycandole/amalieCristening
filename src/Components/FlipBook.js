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
                <span className='rsvpTxt ms-madi'>Please RSVP Here</span>
              </Link>
            </div></div>
          <div className='mapsLinks'>
            <div>
              <Link target="_blank" rel="noopener noreferrer" href="https://google.com/maps/place/Our+Lady+of+Mount+Carmel+Parish+-+Project+6+(Diocese+of+Cubao)/@14.6637505,121.0413698,17.25z/data=!4m6!3m5!1s0x3397b718ecd6d7c9:0x30b3057cbbbe0319!8m2!3d14.6624518!4d121.0414896!16s%2Fg%2F1tf6jr6g?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                <Image
                  src={church}
                  width={150}
                  height={150}
                  alt="envelope"
                  className="Test"
                />
              </Link>
            </div>
            <div>
              <Link target="_blank" rel="noopener noreferrer" href="https://google.com/maps/place/Ninoy+Aquino+Parks+and+Wildlife+Center/@14.6518021,121.044785,18.75z/data=!4m6!3m5!1s0x3397b7059eefe101:0x5271f95cbf47428a!8m2!3d14.6520871!4d121.0452732!16s%2Fm%2F05sxpms?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D">
                <Image
                  src={wildlife}
                  width={150}
                  height={150}
                  alt="envelope"
                  className="Test"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book
