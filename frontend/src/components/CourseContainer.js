import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCourse } from "../actions/getCourse.action";


const CourseContainer = () => {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { user, courselist, course } = useSelector((state) => ({...state}));
    const navigate = useNavigate();

    useEffect(async () => {
        if (user.data) getCourse(cid, dispatch);
        else navigate("/login")
    }, []);


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
                    <h1>{course.department}-{course.code}</h1>
                </div>
                <div id="right-main-content">
                    <div id="main-content">
                        <div className="announcement">
                            <h1>Service Interruption: February 4 at 10:00 pm - February 5 at 2:00 am</h1>
                            <p className="bold">Moodle will be unavailable on Friday, February 4 from 10:00 pm until Saturday, February 5 at 2:00 am for scheduled electrical system service. During this time all access will be unavailable.</p>
                            <p>If you have any questions about the service interruption, contact the Service Desk at help@concordia.ca or call 514-848-2424, ext. 7613 to speak with a Service Desk agent between 8:00 a.m. and 11:00 p.m. on weekdays.</p>
                        </div>
                        <hr />
                    </div>
                    <div id="right-sidebar">
                    {
                        user.data && <>
                                


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

export { CourseContainer };