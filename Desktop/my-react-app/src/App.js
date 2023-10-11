import React from 'react'
import './App.css'
import Sidebar from './component/sidebar'
import './Sidebar.css'

const App = () => {
    return (
        <div>
            <Sidebar />
            <div class="box-container">

                <div class="box box2">
                    <h6 className='stat'>STATISTICS</h6>
                    <p className='process'>Processes</p>
                    <div class="text">
                        <div className="pie-chart"></div>
                        <p class="text-warning txt1">25%</p>
                        <p class="topic">Back End</p>
                        <div className='one'>Overdue</div>

                    </div>

                    <div class="text1">
                        <div className="pie-chart1"></div>
                        <p class="text-primary txt1">50%</p>
                        <p class="topic">Front End</p>
                        <div className='two'>Delayed</div>
                    </div>

                    <div class="text2">
                        <div className="pie-chart2"></div>
                        <p class="text-success txt1">62%</p>
                        <p class="topic">Design</p>
                        <div className='three'>On track</div>
                    </div>

                    <div class="text3">
                        <div className="pie-chart3"></div>
                        <p class="text-success txt1">75%</p>
                        <p class="topic">Copyrightning</p>
                        <div className='four'>Ontrack</div>
                    </div>

                    <div class="box box3">
                        <p className='fs-5 point'>. . .</p>
                        <p className='para'>Deadlines</p>
                        <input type="range" className='rang' />

                    </div>
                    <div class="box box4">
                        <p className='month'>MONTHLY GOAL</p>
                        <p className='jan'>January</p>
                        <p className='doll'>$</p>
                        <h4 className='num'>1.000.000</h4>
                        <select className='radio'>
                            <option>Monthly</option>
                        </select>
                    </div>
                    <div class="box box9">
                        <p className='points'>. . .</p>
                        <p className='project'>Projection</p>
                        <p className='mth'>January 4th</p>
                        <svg width="927" height="896" viewBox="0 0 427 396" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4244 394C6.4244 372.262 2.84683 351.476 2.84683 329.537C2.84683 312.972 -2.04281 279.916 11.9895 267.127C18.3302 261.348 27.4535 252.035 30.6724 243.723C35.6293 230.923 49.4139 230.967 59.2929 221.14C71.5913 208.908 84.298 214.794 97.2549 208.617C110.442 202.331 104.806 195.198 122.497 201.843C142.947 209.524 167.012 227.71 188.88 227.71C201.531 227.71 208.533 233.988 221.079 235.922C249.019 240.229 287.885 246.073 314.89 237.975C347.455 228.209 387.825 201.021 394.591 164.684C397.721 147.867 405.573 130.336 412.677 114.797C417.918 103.333 414.267 84.8472 414.267 72.5057C414.267 47.175 419.234 26.1182 425 2.29425" stroke="#371D81" stroke-width="3" stroke-linecap="round"/>
<line y1="-0.5" x2="391.451" y2="-0.5" transform="matrix(-0.00272712 0.999996 -0.999996 -0.00290962 424.742 2)" stroke="black"/>
<line y1="-0.5" x2="405.9" y2="-0.5" transform="matrix(-0.999988 0.00480824 -0.00450666 -0.99999 423.791 385.306)" stroke="black"/>
</svg>

                         
                        <p className='doller'>$</p>
                        <h4 className='number'>1.000.000</h4>

                    </div>
                    <div className="box box5">
                        <div className="box box6">
                            <p className='fw'>2</p>
                            <p>TOTAL CLOSINGS</p>
                            <p>. . .</p>
                        </div>
                        <p className='mb-5'>All</p>
                        <p className='mb-5'>Sample</p>
                        <p className='mb-5'>Sample</p>
                    </div>
                    <div className='sub'></div>

                    <div className="box box7">
                        <div className="box box8">
                            <p className='fw'>2</p>
                            <p>TODAY REQUISITION</p>
                            <p>. . .</p>
                        </div>
                        <p className='mb-5'>All</p>
                        <p className='mb-5'>Sample</p>
                        <p className='mb-5'>Sample</p>
                    </div>
                    <div className='subs1'></div>

                </div>
            </div>

            <div className='boxcal calen'>

                <div className='calendar-container'>
                    <p className='calendar-header'>January 2023</p>
                    <table className=''>

                        <thead>
                            <tr className='headcal'>
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>sat</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default App
