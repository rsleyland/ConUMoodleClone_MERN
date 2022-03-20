import { useEffect } from "react";
import { useSelector } from "react-redux";

const HomeContainer = () => {
    const { user, courselist } = useSelector((state) => ({...state}));


    return (
        <div id="main-container">
            <div id="left-container">
                <div id="menu-items">
                    <a className="menu-item menu-item-active" href=""><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
                    {
                        user.data && (
                        <>
                            <a className="menu-item" href=""><i className="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></a>
                            <a className="menu-item" href=""><i className="fa fa-calendar" aria-hidden="true"></i><span>Calendar</span></a>
                            <a className="menu-item" href=""><i className="fa fa-file-o" aria-hidden="true"></i><span>Private Files</span></a>
                            <a className="menu-item" href=""><i className="fa fa-graduation-cap" aria-hidden="true"></i><span>Courses</span></a>
                        </>
                    )}
                    {courselist.data && 
                    <>
                    {courselist.data.map((course, i)=><a key={i} className="menu-item menu-item-course" href={"/course/"+course._id}><i className="fa fa-graduation-cap" 
                    aria-hidden="true"></i><span>{course.department}-{course.code}-2211-EC</span></a>)}
                    </>}
                    
                    
                </div>
            </div>
            <div id="right-container">
                <div id="header">
                    <h1>Concordia Course Web Sites</h1>
                </div>
                <div id="right-main-content">
                    <div id="main-content">
                        <div className="announcement">
                            <h1>Service Interruption: February 4 at 10:00 pm - February 5 at 2:00 am</h1>
                            <p className="bold">Moodle will be unavailable on Friday, February 4 from 10:00 pm until Saturday, February 5 at 2:00 am for scheduled electrical system service. During this time all access will be unavailable.</p>
                            <p>If you have any questions about the service interruption, contact the Service Desk at help@concordia.ca or call 514-848-2424, ext. 7613 to speak with a Service Desk agent between 8:00 a.m. and 11:00 p.m. on weekdays.</p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>PLEASE NOTE</h1>
                            <p>Although the Student Information System (SIS) may show a room number, all classNamees will take place via Zoom from January 6 to February 2. In-person classNamees are currently scheduled to resume on Thursday, February 3.</p>
                            <p>If you are a graduate student admitted to a research-based program, your department will let you know about any potential impacts on your planned research activities.</p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>Announcements for students</h1>
                            <p className="bold bigger">How to get a student identification card</p>
                            <p>Stop by the Card Services office to get your student ID. Visit our page for more details.</p>
                            <p className="bold bigger">COVID-19 Safety Training and Pledge</p>
                            <p><span className="bold">PLEASE NOTE:</span> It is compulsory for every student enrolled at the University to complete the COVID-19 Safety Training for Students and the COVID-19 Safety Pledge found on their <span className="bold">Student Hub &gt; My CU Account &gt; </span> COVID-19 Forms and Training page.</p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>Announcements for faculty</h1>
                            <p className="bold bigger">Summer term course material deadline</p>
                            <p>Make your coursepack submission with Print Services by the target date of April 11. For questions, contact us at coursepacks@concordia.ca or at 514-848-2424, ext. 3561.</p>
                            <p>Submit other course material orders through the Follett Discover Adoption tool. The target date for the summer term is March 15. For questions email Follett at 2959txt@follett.com.</p>
                            <p className="bold bigger">Moodle, YuJa, and Zoom Training Sessions</p>
                            <p>Please visit the following page to register: https://www.concordia.ca/it/training/course-availability.html</p>
                            <p>If you are unable to attend any of our trainings due to time conflict, please email moodle@lists.concordia.ca so we can try to schedule a different session.  </p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>PLEASE NOTE</h1>
                            <p>Although the Student Information System (SIS) may show a room number, all classNamees will take place via Zoom from January 6 to February 2. In-person classNamees are currently scheduled to resume on Thursday, February 3.</p>
                            <p>If you are a graduate student admitted to a research-based program, your department will let you know about any potential impacts on your planned research activities.</p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>Announcements for students</h1>
                            <p className="bold bigger">How to get a student identification card</p>
                            <p>Stop by the Card Services office to get your student ID. Visit our page for more details.</p>
                            <p className="bold bigger">COVID-19 Safety Training and Pledge</p>
                            <p><span className="bold">PLEASE NOTE:</span> It is compulsory for every student enrolled at the University to complete the COVID-19 Safety Training for Students and the COVID-19 Safety Pledge found on their <span className="bold">Student Hub &gt; My CU Account &gt; </span> COVID-19 Forms and Training page.</p>
                        </div>
                        <hr />
                        <div className="announcement">
                            <h1>Announcements for faculty</h1>
                            <p className="bold bigger">Summer term course material deadline</p>
                            <p>Make your coursepack submission with Print Services by the target date of April 11. For questions, contact us at coursepacks@concordia.ca or at 514-848-2424, ext. 3561.</p>
                            <p>Submit other course material orders through the Follett Discover Adoption tool. The target date for the summer term is March 15. For questions email Follett at 2959txt@follett.com.</p>
                            <p className="bold bigger">Moodle, YuJa, and Zoom Training Sessions</p>
                            <p>Please visit the following page to register: https://www.concordia.ca/it/training/course-availability.html</p>
                            <p>If you are unable to attend any of our trainings due to time conflict, please email moodle@lists.concordia.ca so we can try to schedule a different session.  </p>
                        </div>
                    </div>
                    <div id="right-sidebar">
                    {
                        user.data && <>
                        <div className="sidebar-tab">
                            <h3>Main Menu</h3>
                            <ul>
                                <li><a href=""><i className="fa fa-file-text" aria-hidden="true"></i><span>Help For Instructors</span></a></li>
                                <li><a href=""><i className="fa fa-file-text" aria-hidden="true"></i><span>Help For Students</span></a></li>
                            </ul>
                        </div>

                        <div className="sidebar-tab">
                            <h3>i&gt;clicker</h3>
                            <ul>
                                <li><a href=""><span>Student Registration</span></a></li>
                                <ul id="iclicker-list">
                                    <li>AF27AD3A</li>
                                </ul>
                            </ul>
                        </div>

                        <div className="sidebar-tab">
                            <h3>My Courses</h3>

                        {courselist.data && 
                        <ul>
                        {courselist.data.map((course, i)=><li key={i}><a href=""><i className="fa fa-graduation-cap" 
                        aria-hidden="true"></i><span>{course.department}-{course.code}-2211-EC</span></a></li>)}
                        <li><a href=""><span>All courses ...</span></a></li>
                        </ul>}

                        </div>


                        <div className="sidebar-tab">
                            <h3>Calendar</h3>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hmm</p>
                        </div>
                        </>}

                        <div className="sidebar-tab">
                            <h3 className="orange-tab-title">Copyright notice</h3>
                            <p className="notice-p">This tool enables you to upload course information and content, subject to the Copyright Act and the University's Policy on Copyright Compliance and Copyright Guidelines for Instructors. In particular, this tool allows for the upload and distribution of course notes, course outlines, lab manuals and other such materials of which you are the author and rightful copyright owner. You may not upload any content, in whole or in part, whose copyright you do not own absent the prior written permission of the rightful copyright owner.</p>
                            <p className="notice-p">Failure to comply with the Copyright Act is a violation of federal legislation. In addition to any action that may be taken by any rightful copyright owner, its licensing agent or the police authorities, the University reserves the right to take disciplinary or other action against a member with respect to any breaches of the University's Policy on Copyright Compliance.</p>
                        </div>


                    </div>
                </div>
                    
            </div>


        </div>
    )
}

export { HomeContainer };