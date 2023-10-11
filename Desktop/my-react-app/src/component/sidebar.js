import React from 'react';
import '../App.css'
import img1 from '../images/search2.png';
import img2 from '../images/download.png';
const Sidebar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src={img2} height={30} width={30} alt="" />
                <p class="small mt-3">Welcome back, Username</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <form class="form-inline me-4">
                    <input class="form-control" type="search" style={{marginLeft:"68px", width:"70vh"}} placeholder="Write here" aria-label="Search" />
                    <button class="btn btn-primary my-2 my-sm-0" type="submit" style={{}}>Search</button>
                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit" style={{marginLeft:"440px"}}>Search</button>
                </form>
            </nav>
            <div className='d-flex'>
                <div className="bg-primary fs-2 shadow p-3 mb-5" style={{ width: "30px", height: "100vh" }} id="msb">
                    <nav className="navbar navbar-default" role="navigation">
                        <div class="side-menu-container">
                            <img src="" alt="" />
                        </div>
                    </nav>
                </div>

                <div className="bg-light fs-2 shadow p-3 mb-5 bg-white rounded" style={{ width: "200px", height: "60vh" }} id="msb">
                    <nav className="navbar navbar-default" role="navigation">
                        <div class="side-menu-container">
                            <div class="">
                                <div><a href="#" class="text-decoration-none small text-dark">CONFLICT SEARCH</a></div>
                                <div className='box1'></div>
                                <div><a href="#" class="text-decoration-none small text-dark mt-3">CREATE NEW MATTER</a></div>
                                <div><a href="#" class="text-decoration-none small text-dark mt-5">QUICK/ADVANCE SEARCH</a></div>
                                <div><a href="#" class="text-decoration-none small text-dark">WORK STATION</a></div>
                                <div><a href="#" class="text-decoration-none small text-dark">RECENT FILES</a></div>
                                <div><a href="#" class="text-decoration-none small text-dark">BILLING</a></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Sidebar;
