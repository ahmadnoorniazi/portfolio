/* eslint-disable */

import React, { useEffect, useState, useContext, lazy, Suspense } from 'react';
import './App.css';
const  Header = lazy(() => import('./Components/Header'));
const Footer = lazy(() => import('./Components/Footer'));
const About = lazy(() => import('./Components/About'));
const Resume = lazy(() => import('./Components/Resume'));
const Contact = lazy(() => import( './Components/Contact'));
const Testimonials = lazy(() => import('./Components/Testimonials'));
const Portfolio = lazy(() => import('./Components/Portfolio'));
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { Flex, Box, Text} from 'rebass'
import Headers from './Components/Headers'
import {Helmet} from "react-helmet";
import Projects from "./Components/Projects";
import { Provider, MyContext } from './globalState';
import SideBar from './Components/SideBar';
import RenderTabs from './Components/RenderTabs';

function App(){
const [loading, setIsLoading] = useState(false)
const [resumeData, setResumeData] = useState([])
const [isOpen, onClickSideBar] = useState(false)
const { isOpenSideBar  } = useContext(MyContext)

useEffect(() => {
  const getResumeData = async () => {
    setIsLoading(true)
    const res = await fetch('/resumeData.json',{
      headers: {
        'Content-Type': 'application/json'
      },
     }).then(val => val.json())
    setResumeData(res)
    setIsLoading(false)
  } 
  getResumeData();
}, [])

    if (loading){
      return (
        <div style={{textAlign: "center"}}>
      <img alt="loader" style={{ position: "absolute", top: "50%"}} src='/images/loader.gif' /></div>
      )
    }
    return (
      <Provider value={{
        isOpenSideBar: isOpen,
        onClickSideBar
      }}>
      <Suspense fallback={
      <div style={{textAlign: "center"}}>
      <img alt="loader" style={{ position: "absolute", top: "50%"}} src='/images/loader.gif' /></div>}>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Ahmad Noor Personal Portfolio | Software Engineer at mobileLive</title>
            <link rel="canonical" href="https://www.ahmadnoor.tech" />
              <meta
              name="description"
              content="Software Engineer at mobileLive"
              />
            <meta
              id="og_description"
              property="og:description"
              content="Software Engineer at mobileLive"
            />
            <meta
              id="og_title"
              property="og:title"
              content="Software Engineer at mobileLive"
            />
            <meta
              id="og_title"
              property="og:image"
              content="https://cdn.searchenginejournal.com/wp-content/uploads/2018/07/SEO-and-JavaScript-6-Things-You-Need-to-Know-1520x800.png"
            />
            <meta property="og:url" content="https://www.ahmadnoor.tech" /> 
            <meta property="og:type" content="website" /> 
            <meta name="keywords" content="ahmadnoor, javascript developer,reactjs developer mobileLive, software engneer, frontend developer, ahmadnoor.tech, ahmad noor potfolio"     data-react-helmet="true" />
            </Helmet>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Headers>
            <RenderTabs />
          </Headers>
          <Header data={resumeData.main}/>

          <SideBar />
          <About data={resumeData.main}/>
          <Resume data={resumeData.resume}/>
          <Portfolio data={resumeData.resume}/>
          <Projects />
          <Testimonials data={resumeData.testimonials}/>
          <Contact data={resumeData.main}/>
          <Footer data={resumeData.main}/>
        </div>
        </ThemeProvider>
    </Suspense>
    </Provider>
  )
  }

export default App;
