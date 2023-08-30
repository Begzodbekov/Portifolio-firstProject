import React from 'react'
import './Sefeatures.scss';
import sefeatures1 from "../../img/sefeatures.1.svg";
import sefeatures2 from "../../img/sefeatures.2.svg";
import sefeatures3 from "../../img/sefeatures.3.png";

function Sefeatures() {
  return (
    <div className="Sefeatures">
      <div className="container">
        <div className="sefeatures-part1">
          <div className="Sefeatures__img">
            <img src={sefeatures1} alt="" />
          </div>
          <div className="sefeatures__list">
            <h1 className="list__1">Assessments,</h1>
            <h1 className="list__2"> Quizzes,</h1>
            <h1 className="list__1">Tests</h1>
            <p>

              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
        <div className="sefeatures-part2">
          <div className="sefeatures__list2">
            <h1 className="text">Class Management </h1>
            <h1 className="text2">Tools for Educators</h1>
            <p>
              Class provides tools to help run and manage the class such as Class Roster,
              Attendance, and more. With the Gradebook, teachers can review and grade tests and
              quizzes in real-time.</p>
          </div>
          <div className="Sefeatures__img2">
            <img src={sefeatures2} alt="" />
          </div>
        </div>

        <div className="sefeatures-part3">
          <div className="sefeatures__img3">
            <img src={sefeatures3} alt="" />
          </div>
          <div className="sefeatures__list3">
            <h1 className="list1">One-on-One</h1>
            <h1 className="list2"> Discussions</h1>
            <p className="list3">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
          </div>
        </div>
        <button className="button">See more features</button>
      </div>
    </div>

  );

}

export default Sefeatures;