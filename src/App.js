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
              content="https://cdn.searchenginejournal.com/wp-content/uploads/2018/07/SEO-and-JavaScript-6-Things-You-Need-to-Know-1520x800.png"
            />
            <meta property="og:url" content="https://www.ahmadnoor.tech" /> 
            <meta property="og:type" content="website" /> 
            <meta name="keywords" content="ahmadnoor, javascript developer,reactjs developer mobileLive, software engneer, frontend developer, ahmadnoor.tech, ahmadnoor potfolio"     data-react-helmet="true" />
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
              label: "Skills",
              key: "skills"
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
          <Portfolio data={this.state.resumeData.resume}/>
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
