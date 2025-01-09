
import Group from "../assets/Group.png";
import Card from "../assets/card.jpg"; // The background image for the "Our Mission" section
import feature from "../assets/feature.png";
import ball from "../assets/ball.png";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import Groupp from "../assets/Groupp.png";
import phone from "../assets/phone.png";
import trophy from "../assets/trophy.jpeg";
import OBJECT from "../assets/OBJECT.png";
import play from "../assets/play.jpg";
import React, { useState, useRef } from 'react';

import Slider from 'react-slick';

function Home() {
 
  // JavaScript to handle the carousel swipe control
const carousel = document.getElementById('carousel');
const lines = document.querySelectorAll('.absolute .h-1'); // Get the control lines

// Function to move the carousel to a specific index (0 for Bronze, 1 for Gold, 2 for Silver)
function slideTo(index) {
  const slideWidth = carousel.children[0].offsetWidth + 12; // Width of each slide including the gap
  carousel.scrollLeft = slideWidth * index;
  
  // Highlight the active line
  lines.forEach((line, i) => {
    if (i === index) {
      line.style.backgroundColor = 'yellow'; // Change to active color
    } else {
      line.style.backgroundColor = 'white'; // Reset inactive lines
    }
  });
}

// Optional: Add scroll event to highlight the active line based on scroll position

  // Highlight the active line based on the carousel's scroll position
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  
  return (
    <div className="min-h-screen font-montserrat bg-[rgb(29,30,31)] flex-grow flex flex-col overflow-x-hidden sm:px-6 md:px-0 lg:px-0 text-white items-center px-0">
  {/* Hero Section */}
  
  <div className="fixed bottom-5 right-5 z-30">
  <button className="flex items-center justify-center bg-green-700 text-white py-1 px-2 rounded-xl text-sm font-semibold shadow-lg transition duration-300 hover:bg-green-700">
    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-l-lg transition-colors duration-300">
      Eng
    </span>

    {/* Small line divider */}
    <span className="border-l-2 border-white h-6 mx-2"></span>

    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-r-lg transition-colors duration-300">
      عَرَبِيّ
    </span>
  </button>
</div>

  
  <div className="absolute w-full h-full z-1 shadow-lg  border-collapse clip-parallelogram-mirror"></div>

  <div className="flex flex-col lg:flex-row mt-12 px-6 lg:px-11 lg:pr-8 items-center justify-center w-full relative">
  {/* Left Side: Text and Button */}
  <div className="flex-1 max-w-lg text-center lg:text-left mt-0 lg:mt-4 lg:mb-16 mb-11 lg:pl-8">
    {/* Main Heading */}
    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-4">
      Be Ready{" "}
      <span className="text-white">
        To Experience The Ultimate Football Fantasy Platform.
      </span>
    </h1>

    {/* Image/Icon after Heading (for Mobile) */}
    <div className="flex justify-center lg:hidden mt-8 mb-10">
      <img
        src={Group}
        alt="Group Icons"
        className="w-64 sm:w-64 h-64 sm:h-64 object-contain"
      />
    </div>

    {/* Subheading */}
    <h3 className="text-xl sm:text-2xl text-gray-300 font-semibold mb-4">
      From Fantasy To Victory.
    </h3>
    <p className="text-gray-100 mb-6 mt-6 leading-relaxed">
      From fantasy to victory — join leagues, build teams, and dominate the pitch with Fantasy Arena. Your dream team awaits!
    </p>

    {/* Button */}
    <button className="mt-6 flex mx-auto lg:mx-0 items-center px-4 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      Sign up for our beta
      <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
        ➙
      </span>
    </button>
  </div>

  {/* Right Side: Image (Visible for Desktop) */}
  <div className="hidden lg:flex flex-1 justify-center items-center relative mt-6 lg:mt-0">
    <img
      src={Group}
      alt="Group"
      className="w-1/2 h-auto object-contain z-10"
    />
  </div>
</div>





 {/* "Our Mission" Section with Background Image */}
<div id="about" className="w-full flex justify-center my-7 px-4 z-10">
  <div className="w-full flex justify-center">
    <div
      className="w-full max-w-4xl bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${Card})` }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl py-6 md:py-9 mt-6 md:mt-11 font-bold">
          About Us
        </h2>
        <p className="text-sm sm:text-base md:text-md mt-0 px-4 sm:px-8 md:px-11 py-3 md:py-4 leading-6 sm:leading-7">
          Fantasy Arena is proud to be a Saudi-born fantasy sports platform. Our mission is to bring football fans in the region closer to the game they love, by providing a fantasy experience tailored for our community. We combine intuitive gameplay with in-depth analytics to keep you engaged and excited all season long.
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-md py-3 md:py-4 px-4 sm:px-8 md:px-11 mb-6 md:mb-10 leading-6 sm:leading-7">
        Join us as we build a fan-driven platform, made for fans and proudly based in the Kingdom of Saudi Arabia.
        </p>
      </div>
    </div>
  </div>
</div>



      
<div id="feature" className="flex my-2 lg:mt-2 sm:mt-0 items-center w-full">
  <div className="relative w-full px-6 my-2 lg:mt-2 sm:mt-0 lg:mb-10 mb-12 lg:px-11">
    {/* Green Shape Background */}
   {/* Desktop View */}
<div
  className="hidden lg:block absolute clip-parallelogram-mirror"
  style={{
    top: "0%",
    right: "0%",
    width: "60%",
    height: "120%",
  }}
></div>

{/* Mobile View */}
<div
  className="block lg:hidden absolute clip-parallelogram-mirror w-full"
  style={{
    top: "-2%",
    right: "0%",
    width: "150%",
    height: "120%",
    transform: "rotate(5deg)",
  }}
></div>


    {/* Feature Section */}
<div className="relative flex flex-col lg:flex-row mt-2 items-center w-full z-10">
  <h1 className="text-4xl sm:text-4xl lg:hidden font-extrabold text-white mb-4">
    Features
  </h1>
  
  {/* Left: Images */}
  <div className="relative flex-1 flex items-center justify-center lg:justify-center lg:items-center lg:left-2 mt-8">
    {/* First Image */}
    <img
      src={phone}
      alt="Phone Feature"
      className="w-56 lg:w-72 h-auto object-contain relative z-10 transform lg:translate-x-[-40px] translate-x-0"
    />
    {/* Second Image */}
    <img
      src={feature}
      alt="Feature"
      className="w-64 sm:w-84 lg:w-3/4 h-auto object-contain absolute z-20 transform lg:translate-x-[20px] translate-x-[40px]"
    />
  </div>

  {/* Right: Text */}
  <div className="flex-1 max-w-lg text-center lg:text-left mt-6 lg:mt-0">
    <h1 className="text-3xl hidden lg:flex font-extrabold text-white mb-4">
      Features
    </h1>
    <h3 className="text-lg font-bold text-gray-200 mb-4">
      BE READY TO EXPERIENCE THE ULTIMATE SOCCER FANTASY PLATFORM
    </h3>

    {/* Features List */}
    <div className="space-y-4 text-sm">
      <div>
        <h2 className="text-md font-bold">• Diverse scoring systems</h2>
        <p>
          Choose from various pre-set leagues with unique scoring systems—focus on goals, assists, or defensive stats to match your style.
        </p>
      </div>
      <div>
        <h2 className="text-md font-bold">• Public and Private leagues</h2>
        <p>
          Join public leagues to compete with the community or create private leagues to challenge friends and colleagues.
        </p>
      </div>
      <div>
        <h2 className="text-md font-bold">• Match insights and analytics</h2>
        <p>
          Stay ahead with real-time stats, player insights, and performance updates to fine-tune your lineup throughout the season.
        </p>
      </div>
    </div>

    {/* Button */}
    <button className="mt-6 flex mx-auto lg:mx-0 items-center px-4 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      Sign up for our beta
      <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
        ➙
      </span>
    </button>
  </div>
</div>
</div>
</div>




<div className="relative w-full mt-0 mb-6 px-6 lg:px-11 items-center">
  {/* Background parallelogram */}
  <div
    className="absolute hidden lg:block clip-parallelogram-mirror z-0"
    style={{
      left: "0%",
      width: "55%",
      height: "90%",
      clipPath: "polygon(0% 0%, 75% 0%, 100% 85%, 0% 100%)",
    }}
  ></div>
{/* Mobile View */}
<div
  className="block lg:hidden absolute clip-parallelogram-mirror w-full"
  style={{
    top: "-5%",
    right: "0%",
    width: "130%",
    height: "120%",
    
  }}
></div>
  {/* Desktop and Tablet Layout */}
  <div className="relative hidden lg:flex items-center w-full z-10">
    {/* Left Side: Text */}
    <div className="flex-1 pl-11 max-w-lg text-left">
      <h1 className="text-4xl font-bold text-white mb-4">Our Mobile App</h1>
      <p className="text-gray-400 mb-6 mt-8 leading-relaxed">
        At Fantasy Arena, we are proud to be pioneers in bringing you the best
        experience as a soccer fan. With a dedicated and easy-to-use app, you
        can stay connected to the games you love, manage your team with ease,
        and enjoy all the thrills of the fantasy season.
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={Groupp}
        alt="Groupp"
        className="w-80 h-full object-contain"
      />
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="lg:hidden flex flex-col items-center text-center w-full z-10 relative">
    <h1 className="text-3xl font-bold text-white mb-4">Our Mobile App</h1>
    <img
      src={Groupp}
      alt="Groupp"
      className="w-48 sm:w-60 mb-4 h-auto object-contain"
    />
    <p className="text-gray-400 leading-relaxed">
      At Fantasy Arena, we are proud to be pioneers in bringing you the best
      experience as a soccer fan. With a dedicated and easy-to-use app, you
      can stay connected to the games you love, manage your team with ease,
      and enjoy all the thrills of the fantasy season.
    </p>
  </div>
</div>



<div className="my-5 px-6 lg:px-11">
  {/* Title Section */}
  <div className="flex px-7 items-center text-center justify-center text-green-500 mr-2 text-4xl font-bold">
    Fantasy Arena Scoring Systems
  </div>

  {/* Description Section */}
  <p className="items-center flex justify-center mt-6 px-10 text-md text-center lg:text-center">
    Welcome to Fantasy Arena, where strategy meets passion! We offer unique scoring systems tailored to different playing styles. Whether you're a fan of traditional scoring, love the thrill of assists, or value defensive excellence, our leagues have something for everyone. Explore the details below and pick the league type that suits you best.
  </p>
</div>

{/* Stay Updated Button */}
<button className="mt-2 flex items-center mx-auto lg:mx-0 px-6 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
  Stay Updated
  <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
    ➙
  </span>
</button>

{/* Outer Container for Padding */}
<div className="p-8 lg:p-0">
  {/* Scoring System Section */}
  <div className="flex flex-col lg:flex-row mt-11 w-full max-w-4xl bg-transparent overflow-hidden shadow-lg space-y-4 lg:space-y-0 lg:space-x-4">
    {/* Right Side: Image with Overlay Text */}
    <div className="flex-1 relative order-1 lg:order-2">
      <div className="relative h-full">
        <img
          src={trophy}
          alt="Action Points Illustration"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center", height: "100%" }}
        />
        {/* Button at Top Left */}
        <div className="absolute top-4 left-4">
          <button className="px-4 py-2 bg-transparent border-2 border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-black transition duration-300">
            Sign up for our beta
          </button>
        </div>
        {/* Date and League Info at Bottom Left */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xl mb-10 font-bold">Assist League Scoring</p>
        </div>
      </div>
    </div>

    {/* Left Side: Text */}
    <div className="flex-1 p-8 order-2 lg:order-1 bg-[rgb(7,7,7)]">
      {/* Flex for mobile and desktop */}
      <div className="flex flex-wrap gap-0 text-gray-300">
        {/* Left Column: Action */}
        <h1 className="text-white font-bold  text-lg">Actions <span className="lg:ml-48 ml-28"/> Points</h1>
        <div className=" lg:w-1/2 mt-2 w-full">
        

          <ul className="space-y-2">
          
            <li className="text-sm">Goal (Any Position)</li>
            <li className="text-sm">Assist</li>
            <li className="text-sm">Key Pass (Leads to Shot)</li>
            <li className="text-sm">Clean Sheet (Defender)</li>
            <li className="text-sm">Clean Sheet (Goalkeeper)</li>
            <li className="text-sm">Save (Goalkeeper)</li>
            <li className="text-sm">Yellow Card</li>
            <li className="text-sm">Red Card</li>
            <li className="text-sm">Penalty Missed</li>
            <li className="text-sm">Penalty Saved (Goalkeeper)</li>
            <li className="text-sm">Own Goal</li>
          </ul>
        </div>

        {/* Right Column: Points */}
        <div className="w-0 lg:w-1/2 mt-2 text-center">
          <ul className="space-y-2">
        
            <li className="text-white text-sm font-semibold">3</li>
            <li className="text-white text-sm font-semibold">6</li>
            <li className="text-white text-sm font-semibold">2</li>
            <li className="text-white text-sm font-semibold">3</li>
            <li className="text-white text-sm font-semibold">4</li>
            <li className="text-white text-sm font-semibold">1</li>
            <li className="text-red-500 text-sm font-semibold">-1</li>
            <li className="text-red-500 text-sm font-semibold">-3</li>
            <li className="text-red-500 text-sm font-semibold">-2</li>
            <li className="text-white text-sm font-semibold">4</li>
            <li className="text-red-500 text-sm font-semibold">-2</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




<div id="subscription" className="flex flex-col items-center text-center w-full my-10">
  <section className="flex flex-col items-center px-11 w-full">
    <h1 className="text-green-700 text-4xl font-bold mt-8 mb-8">
      Subscription <span className="text-white">Benefits</span>
    </h1>

    {/* Desktop View: Regular Tier Cards */}
    <div className="hidden lg:flex gap-8 justify-center w-full">
      {/* Bronze Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={bronze} alt="Bronze Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-orange-500 text-xl font-bold mb-2">Bronze Tier</h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          Join up to 2 leagues per month. Basic player stats: access essential player details such as goals, assists, and match appearances...more.
        </p>
      </div>

      {/* Gold Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-80 h-80 flex-shrink-0">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={ball} alt="Gold Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-yellow-500 text-xl font-bold mb-2">Gold Tier</h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          Join 6 leagues per month. Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more.
        </p>
      </div>

      {/* Silver Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={silver} alt="Silver Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-gray-500 text-xl font-bold mb-2">Silver Tier</h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          Join up to 4 leagues per month. Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form.
        </p>
      </div>
    </div>

    {/* Mobile View: Swipeable Carousel */}
    <div className="lg:hidden overflow-x-auto w-full px-0">
      <div className="flex gap-12" id="carousel">
        {/* Silver Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
            <img src={silver} alt="Silver Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-gray-500 text-xl font-bold mb-2">Silver Tier</h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            Join up to 4 leagues per month. Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form.
          </p>
        </div>

        {/* Gold Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
            <img src={ball} alt="Gold Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-yellow-500 text-xl font-bold mb-2">Gold Tier</h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            Join 6 leagues per month. Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more.
          </p>
        </div>

        {/* Bronze Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
            <img src={bronze} alt="Bronze Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-orange-500 text-xl font-bold mb-2">Bronze Tier</h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            Join up to 2 leagues per month. Basic player stats: access essential player details such as goals, assists, and match appearances...more.
          </p>
        </div>
      </div>

   
      
    </div>
  </section>
</div>






<div className="flex py-1 px-11 items-center w-full">
  {/* Left Side: Text and Button (Desktop View) */}
  <div className="flex-[2] pl-11 mb-11 max-w-lg text-left hidden lg:block">
    <h1 className="text-4xl font-bold text-green-600 mb-4">
      Referral <span className="text-white">Benefits</span>
    </h1>
    <h3 className="text-lg font-extrabold text-gray-100 mb-4">
      Earn Free Tier Upgrades and Exciting Rewards.
    </h3>
    <button className="mt-4 flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      Sign up for our beta
      <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
        ➙
      </span>
    </button>

    <h1 className="text-green-700 font-extrabold text-md mt-8">
      INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">3 Friends: Bronze Tier for 1 Month.</li>
      <li className="text-white mb-1">5 Friends: Silver Tier for 1 Month.</li>
      <li className="text-white mb-1">10 Friends: Gold Tier for 1 Month.</li>
    </ul>

    <h1 className="text-green-700 font-extrabold text-md mt-4">
      PLUS, STAND A CHANCE TO WIN
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">Gift Vouchers (e.g., Nike Store).</li>
      <li className="text-white mb-1">HungerStation Credits.</li>
      <li className="text-white mb-1">Luxury Hotel Staycations.</li>
      <li className="text-white mb-1">Exclusive Discounts on Future Features.</li>
    </ul>
  </div>

  {/* Right Side: Image (Desktop View) */}
  <div className="flex-[1]  px-1 justify-center hidden lg:block">
    <img
      src={OBJECT}
      alt="Group"
      className="w-6/7 h-auto object-contain"
    />
  </div>
</div>

{/* Mobile View Adjustments */}
<div className="lg:hidden flex flex-col items-center mt-0 mb-12 px-6">
  {/* 1. Referral Benefits Heading */}
  <h1 className="text-green-700 text-4xl font-bold mb-8 text-center">
    Referral <span className="text-white">Benefits</span>
  </h1>

  {/* 2. Earn Free Tier Upgrades Text */}
  <h3 className="text-lg font-extrabold text-gray-100 mb-4 text-center">
    Earn Free Tier Upgrades and Exciting Rewards.
  </h3>
  {/* 5. Image (Appears after text on mobile view) */}
  <div className="flex justify-center mt-8">
    <img
      src={OBJECT}
      alt="Group"
      className="w-5/6 h-auto object-contain" // Adjusted image size for mobile
    />
  </div>

  {/* 3. Invite Friends Section */}
  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">3 Friends: Bronze Tier for 1 Month.</li>
      <li className="text-white mb-1">5 Friends: Silver Tier for 1 Month.</li>
      <li className="text-white mb-1">10 Friends: Gold Tier for 1 Month.</li>
    </ul>
  </div>

  {/* 4. Plus, Stand a Chance to Win */}
  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      PLUS, STAND A CHANCE TO WIN
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">Gift Vouchers (e.g., Nike Store).</li>
      <li className="text-white mb-1">HungerStation Credits.</li>
      <li className="text-white mb-1">Luxury Hotel Staycations.</li>
      <li className="text-white mb-1">Exclusive Discounts on Future Features.</li>
    </ul>
  </div>

  

  {/* Button at the End */}
  <div className="flex justify-center mt-8">
    <button className="mt-4 flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      Sign up for our beta
      <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
        ➙
      </span>
    </button>
  </div>
</div>


    

     
      <div className="bg-black max-w-full w-full text-center text-green-700 lg:text-4xl sm:text-2xl font-extrabold py-6">Sign up
 <span className=" text-white font-extrabold"> and Stay Updated</span> 
</div>



<div className="w-full flex justify-center my-12 px-4 py-4">
  <div
    className="w-full max-w-4xl bg-cover bg-center bg-gradient-to-br from-gray-950 via-green-900 to-green-700 rounded-3xl overflow-hidden flex p-4 relative"
    style={{ height: "450px" }}
  >
    {/* Left Side for Form */}
    <div className="w-full md:w-2/5 flex flex-col bg-[rgb(125,125,126)] rounded-3xl items-center justify-center px-6 py-6 absolute top-3 lg:left-6 left-0 z-10">
      <form className="w-full max-w-sm">
        <div className="mb-6 mt-9">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="name"
            type="text"
            placeholder="Name"
            aria-label="Name"
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="birthday"
            type="date"
            placeholder="Birthday"
            aria-label="Birthday"
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="gender"
            type="text"
            placeholder="Male / Female"
            aria-label="Male / Female"
            required
          />
        </div>

        {/* Checklist Option */}
        <div className="mb-10 flex items-center">
          <input
            className="form-checkbox h-5 w-5 text-green-500 bg-[rgb(29,30,31)] border-gray-400 rounded focus:ring-2 focus:ring-green-500"
            id="receiveEmails"
            type="checkbox"
          />
          <label
            htmlFor="receiveEmails"
            className="ml-3 text-gray-100 text-sm leading-tight"
          >
            I would like to receive newsletters.
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-white hover:bg-green-700 text-black font-bold py-2 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    {/* Right Side for Image */}
    <div className="hidden md:flex w-2/3 items-end ml-auto">
      <img
        src={play}
        alt="Description of the image"
        className="w-full h-full pl-6 object-cover rounded-3xl shadow-lg"
      />
    </div>
  </div>
</div>



       
   
   
   
    </div>




    
  );
}

export default Home;
