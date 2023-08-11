import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import  './Slider.css'


function LandingPage() {
  return (
    <>
      <div className="herosection">
        <div className="left">
          <p className="appname">Smart Home App</p>
          <h1 className="heading">Created to make life much Easier</h1>
          <p className="description">Smart Control is helping the users to achieve the best and comfortable atmosphere for their
            home.</p>
          <div className="getStarted">
            <button>Find a Job</button>
          </div>
          <div className="applinks">
            <Link to="https://play.google.com/store" target="_blank" rel="noreferrer"><img width="150px" height="50px"
              src="https://engineering.purdue.edu/coursemirror/wp-content/uploads/2020/08/appstore.png"
              alt="App Store" /></Link>
            <Link to="https://play.google.com/store" target="_blank" rel="noreferrer"><img width="150px" height="50px"
              src="https://reefcentral.pt/wp-content/uploads/2019/04/get-on-google-play.png" alt="playstore" /></Link>
          </div>
          <div className="element1">
            <div className="element1-wrapper">
              <svg width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="21" width="58" height="17" fill="#4a39d0" />
                <rect x="21" y="58" width="58" height="17" transform="rotate(-90 21 58)" fill="#4a39d0" />
              </svg>
            </div>
          </div>
          <div className="element2">
            <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#4a39d0" />
            </svg>
          </div>
          <div className="element3">
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="17" stroke="#4A39D0" strokeWidth="8" />
            </svg>
          </div>
          <div className="element4">
            <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#4a39d0" />
            </svg>
          </div>
          <div className="element5">
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="17" stroke="#4A39D0" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="right">
          <div className="background">
            <img className='object-cover' src="https://www.techopedia.com/wp-content/uploads/2023/02/art-graphic-design-doodle-drawing-poster-brochure-flyer-paper-3.jpg" alt="bg" />
          </div>
          <Carousel className="carousel" autoPlay infiniteLoop emulateTouch showThumbs={false} showStatus={false} useKeyboardArrows>
            <div className="caurosel-img">
              <img className='object-cover' src="https://cdn-blog.novoresume.com/articles/stay-at-home-parent-jobs/bg.png" alt="" />
              <div className="legend">
                <h3>smart home 1</h3>
                <button className="carousel-btn">Try now</button>
              </div>
            </div>
            <div className="caurosel-img">
              {/* <img width="1000px" src="https://via.placeholder.com/1366x600.png?text=smart+home-2" alt="" /> */}
              <img className='object-cover' src="https://thehubbackend.com/media/8477-Fotolia_63949454_S.jpg" alt="" />
              <div className="legend">
                <h3>smart home 2</h3>
                <button className="carousel-btn">Try now</button>
              </div>
            </div>
            <div className="caurosel-img">
              {/* <img width="1000px" src="https://via.placeholder.com/1366x600.png?text=smart+home-3" alt="" /> */}
              <img className='object-cover' src="https://www.aihr.com/wp-content/uploads/job-rotation-background-and-featured-image.png" alt="" />
              <div className="legend">
                <h3>smart home 3</h3>
                <button className="carousel-btn">Try now</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div id="features" className="features">
        <h1>Features</h1>
        <p>Control your device from anywhere with the Android / Web App.</p>
        <div id='f-row1' className="feature-row">
          <div id="f-col1" className="feature-col">
            <svg viewBox="0 0 202 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5 12.5C19.2281 12.5 12.5 19.2281 12.5 27.5C12.5 28.8813 13.6187 30 15 30C16.3813 30 17.5 28.8813 17.5 27.5C17.5 21.9844 21.9875 17.5 27.5 17.5C28.8813 17.5 30 16.3813 30 15C30 13.6187 28.8813 12.5 27.5 12.5ZM15.0094 71.7453C15.0094 72.2375 15.1547 72.7172 15.4281 73.1266L19.2578 78.8828C19.7219 79.5797 20.5031 79.9984 21.3391 79.9984H33.6594C34.4969 79.9984 35.2781 79.5797 35.7406 78.8828L39.5703 73.1266C39.8422 72.7172 39.9875 72.2359 39.9891 71.7453L39.9969 64.9984H15.0031L15.0094 71.7453ZM27.5 0C11.5188 0 0 12.9641 0 27.5C0 34.4328 2.57031 40.7578 6.80625 45.5906C9.40625 48.5578 13.4844 54.7781 14.9969 59.9906V60H22.4969V59.9813C22.4953 59.2359 22.3844 58.4953 22.1609 57.7828C21.2875 55 18.5953 47.6625 12.4469 40.6469C9.2375 36.9859 7.52187 32.3422 7.50781 27.5C7.47656 15.9938 16.8313 7.5 27.5 7.5C38.5281 7.5 47.5 16.4719 47.5 27.5C47.5 32.3391 45.7438 37.0078 42.5547 40.6469C36.4438 47.6172 33.7391 54.9391 32.8516 57.75C32.6225 58.4727 32.5055 59.2262 32.5047 59.9844V60H40.0047V59.9922C41.5172 54.7781 45.5953 48.5578 48.1953 45.5922C52.4297 40.7578 55 34.4328 55 27.5C55 12.3125 42.6875 0 27.5 0Z" fill="#FBFAFF" />
              <g clipPath="url(#clip0)">
                <path d="M178.645 18.749C174.53 18.749 170.722 19.4111 167.357 20.6328L169.175 2.59909C169.333 1.0698 167.987 -0.173855 166.452 0.0180399C154.777 1.48288 145.749 11.372 145.749 23.353C145.749 27.4677 146.411 31.2763 147.633 34.6411L129.599 32.8232C128.07 32.665 126.826 34.0112 127.018 35.5464C128.483 47.2212 138.372 56.249 150.353 56.249C154.468 56.249 158.276 55.5869 161.641 54.3652L159.823 72.3989C159.669 73.9267 161.011 75.1718 162.546 74.98C174.221 73.5151 183.249 63.626 183.249 51.645C183.249 47.5302 182.587 43.7217 181.365 40.3569L199.399 42.1748C200.928 42.3286 202.172 40.9868 201.98 39.4516C200.515 27.7768 190.626 18.749 178.645 18.749V18.749ZM164.499 42.1865C163.572 42.1865 162.666 41.9116 161.895 41.3965C161.124 40.8814 160.523 40.1494 160.168 39.2928C159.813 38.4363 159.721 37.4938 159.902 36.5845C160.082 35.6752 160.529 34.84 161.184 34.1844C161.84 33.5289 162.675 33.0824 163.584 32.9016C164.494 32.7207 165.436 32.8135 166.293 33.1683C167.149 33.5231 167.881 34.1239 168.396 34.8948C168.912 35.6656 169.186 36.5719 169.186 37.499C169.186 38.7422 168.693 39.9345 167.814 40.8136C166.934 41.6926 165.742 42.1865 164.499 42.1865V42.1865Z" fill="#FBFAFF" />
              </g>
              <path d="M72.4167 120H6.58333C2.94878 120 0 122.939 0 126.562V170.312C0 173.936 2.94878 176.875 6.58333 176.875H32.9167L30.7222 183.438H20.8472C19.0231 183.438 17.5556 184.9 17.5556 186.719C17.5556 188.537 19.0231 190 20.8472 190H58.1528C59.9769 190 61.4444 188.537 61.4444 186.719C61.4444 184.9 59.9769 183.438 58.1528 183.438H48.2778L46.0833 176.875H72.4167C76.0512 176.875 79 173.936 79 170.312V126.562C79 122.939 76.0512 120 72.4167 120ZM70.2222 168.125H8.77778V128.75H70.2222V168.125Z" fill="#FBFAFF" />
              <g clipPath="url(#clip1)">
                <path d="M200.125 177.501H190.75V138.296C190.75 135.101 188.227 132.501 185.125 132.501H172V140.001H183.25V185.001H200.125C201.161 185.001 202 184.162 202 183.126V179.376C202 178.34 201.161 177.501 200.125 177.501ZM163.591 125.119L141.091 130.948C139.421 131.381 138.25 132.934 138.25 134.718V177.501H128.875C127.839 177.501 127 178.34 127 179.376V183.126C127 184.162 127.839 185.001 128.875 185.001H168.25V128.889C168.25 126.36 165.958 124.505 163.591 125.119V125.119ZM157.938 158.751C156.385 158.751 155.125 157.072 155.125 155.001C155.125 152.93 156.385 151.251 157.938 151.251C159.49 151.251 160.75 152.93 160.75 155.001C160.75 157.072 159.49 158.751 157.938 158.751Z" fill="#FBFAFF" />
              </g>
            </svg>
            <div className="f-col1-circle"></div>
          </div>
          <div id="f-col2" className="feature-col">
            <h2>Control Devices</h2>
            <p>You can control various devices using the ESP8266 module, including allmost every Electrical devices including the Guarrage door.</p>
          </div>
        </div>
        <div id='f-row2' className="feature-row">
          <div id="f-col3" className="feature-col">
            <h2>From Anywhere</h2>
            <p>You can Controll all of your devices from anywhere in the world allmost instantly.</p>
          </div>
          <div id="f-col4" className="feature-col">
            <svg width="155" height="186" viewBox="0 0 155 186" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M132.811 137.188C130.794 124.804 126.037 116.109 120.5 116.109C114.963 116.109 110.206 124.804 108.189 137.188H132.811ZM107.145 150.5C107.145 153.579 107.312 156.532 107.604 159.375H133.382C133.674 156.532 133.841 153.579 133.841 150.5C133.841 147.421 133.674 144.468 133.382 141.625H107.604C107.312 144.468 107.145 147.421 107.145 150.5ZM152.315 137.188C148.336 127.772 140.282 120.491 130.335 117.552C133.73 122.239 136.067 129.297 137.291 137.188H152.315ZM110.651 117.552C100.718 120.491 92.6496 127.772 88.6849 137.188H103.709C104.919 129.297 107.256 122.239 110.651 117.552V117.552ZM153.804 141.625H137.847C138.14 144.537 138.306 147.519 138.306 150.5C138.306 153.481 138.14 156.463 137.847 159.375H153.79C154.555 156.532 154.986 153.579 154.986 150.5C154.986 147.421 154.555 144.468 153.804 141.625ZM102.694 150.5C102.694 147.519 102.86 144.537 103.153 141.625H87.1964C86.4452 144.468 86 147.421 86 150.5C86 153.579 86.4452 156.532 87.1964 159.375H103.139C102.86 156.463 102.694 153.481 102.694 150.5V150.5ZM108.189 163.812C110.206 176.196 114.963 184.891 120.5 184.891C126.037 184.891 130.794 176.196 132.811 163.812H108.189ZM130.349 183.448C140.282 180.509 148.35 173.228 152.329 163.812H137.305C136.081 171.703 133.744 178.761 130.349 183.448ZM88.6849 163.812C92.6635 173.228 100.718 180.509 110.665 183.448C107.27 178.761 104.933 171.703 103.709 163.812H88.6849V163.812Z" fill="#FBFAFF" />
              <g clipPath="url(#clip0)">
                <path d="M44.1667 4.4375C44.1667 3.2606 43.7013 2.13191 42.8731 1.29971C42.0448 0.467521 40.9214 0 39.75 0C38.5786 0 37.4552 0.467521 36.6269 1.29971C35.7987 2.13191 35.3333 3.2606 35.3333 4.4375V17.75H44.1667V4.4375ZM50.7917 22.1875H2.20833C1.62265 22.1875 1.06095 22.4213 0.646806 22.8374C0.232663 23.2535 0 23.8178 0 24.4062L0 28.8438C0 29.4322 0.232663 29.9965 0.646806 30.4126C1.06095 30.8287 1.62265 31.0625 2.20833 31.0625H4.41667V35.5C4.41745 40.6144 6.17602 45.5717 9.39507 49.5336C12.6141 53.4955 17.0961 56.2191 22.0833 57.2437V71H30.9167V57.2437C35.9039 56.2191 40.3859 53.4955 43.6049 49.5336C46.824 45.5717 48.5826 40.6144 48.5833 35.5V31.0625H50.7917C51.3774 31.0625 51.9391 30.8287 52.3532 30.4126C52.7673 29.9965 53 29.4322 53 28.8438V24.4062C53 23.8178 52.7673 23.2535 52.3532 22.8374C51.9391 22.4213 51.3774 22.1875 50.7917 22.1875ZM17.6667 4.4375C17.6667 3.2606 17.2013 2.13191 16.3731 1.29971C15.5448 0.467521 14.4214 0 13.25 0C12.0786 0 10.9552 0.467521 10.1269 1.29971C9.29866 2.13191 8.83333 3.2606 8.83333 4.4375V17.75H17.6667V4.4375Z" fill="#FBFAFF" />
              </g>
            </svg>
            <div className="f-col4-circle"></div>
          </div>
        </div>
        <div className="fan">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512.001 512.001" >
            <path fill="currentColor" d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
              L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
              c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
              l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
              L284.286,256.002z"/>
          </svg>
        </div>
        <div className="anime-dot">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 31.955 31.955" xml="preserve">
            <path d="M27.25,4.655C20.996-1.571,10.88-1.546,4.656,4.706C-1.571,10.96-1.548,21.076,4.705,27.3
              c6.256,6.226,16.374,6.203,22.597-0.051C33.526,20.995,33.505,10.878,27.25,4.655z"/>
            <path d="M13.288,23.896l-1.768,5.207c2.567,0.829,5.331,0.886,7.926,0.17l-0.665-5.416
              C17.01,24.487,15.067,24.5,13.288,23.896z M8.12,13.122l-5.645-0.859c-0.741,2.666-0.666,5.514,0.225,8.143l5.491-1.375
              C7.452,17.138,7.426,15.029,8.12,13.122z M28.763,11.333l-4.965,1.675c0.798,2.106,0.716,4.468-0.247,6.522l5.351,0.672
              C29.827,17.319,29.78,14.193,28.763,11.333z M11.394,2.883l1.018,5.528c2.027-0.954,4.356-1.05,6.442-0.288l1.583-5.137
              C17.523,1.94,14.328,1.906,11.394,2.883z"/>
            <circle cx="15.979" cy="15.977" r="6.117" />
          </svg>
        </div>
        <div className="circle">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 341.333 341.333" xml="preserve">
            <path d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z
			 M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default LandingPage;