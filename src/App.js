import React, { Component, lazy, Suspense } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
const  Header = lazy(() => import('./Components/Header'));
const Footer = lazy(() => import('./Components/Footer'));
const About = lazy(() => import('./Components/About'));
const Resume = lazy(() => import('./Components/Resume'));
const Contact = lazy(() => import( './Components/Contact'));
const Testimonials = lazy(() => import('./Components/Testimonials'));
const Portfolio = lazy(() => import('./Components/Portfolio'));

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <Suspense fallback={<div style={{textAlign: "center", position: "absolute", top: "50%"}}>
      <img src='/images/loader.gif' /></div>}>
        <div className="App">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Testimonials data={this.state.resumeData.testimonials}/>
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
        </div>
    </Suspense>
    );
  }
}

export default App;
