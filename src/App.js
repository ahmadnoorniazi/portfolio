/* eslint-disable */

import React, { Component, lazy, Suspense } from 'react';
import ReactGA from 'react-ga';
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
import Tabs from './Components/Tabs/index'
import {Helmet} from "react-helmet";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      loading: false
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData = async () => {
    this.setState({
      loading: true
     })
    const res = await fetch('/resumeData.json',{
      headers: {
        'Content-Type': 'application/json'
      },
     }).then(val => val.json())

    this.setState({
      resumeData: res
     })
     this.setState({
      loading: false
     })

  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {

    if (this.state.loading){
      return (
        <div style={{textAlign: "center"}}>
      <img alt="loader" style={{ position: "absolute", top: "50%"}} src='/images/loader.gif' /></div>
      )
    }
    return (
      <Suspense fallback={
      <div style={{textAlign: "center"}}>
      <img alt="loader" style={{ position: "absolute", top: "50%"}} src='/images/loader.gif' /></div>}>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Ahmad Noor Portfolio | Software Engineer at mobileLive</title>
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
            content="data:image/jpeg;base64,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"
          />
          <meta property="og:url" content="www.ahmadnoor.tech" /> 
          <meta name="keywords" content="ahmad noor, javascript, mobileLive, software engneer, frontend developer" />
          </Helmet>
      <ThemeProvider theme={theme}>
        <div className="App">
        <Headers>
          <Tabs tabsList={[
            {
              label: "Home",
              key: "home"
            },
            {
              label: "About",
              key: "about"
            },
            {
              label: "Experience",
              key: "experience"
            },
            {
              label: "Works",
              key: "works"
            },
            {
              label: "Blog",
              key: "blog"
            },
            {
              label: "Contact",
              key: "contact"
            },
          ]} />
      </Headers>
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Testimonials data={this.state.resumeData.testimonials}/>
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
        </div>
        </ThemeProvider>
    </Suspense>
    );
  }
}

export default App;
