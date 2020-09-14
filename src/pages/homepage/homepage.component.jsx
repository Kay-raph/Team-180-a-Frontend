import React from 'react';
import logo from './elogo';
import './styles.css';

const HomePage = () => {
  return (
    <div>
      <div class="nav">
        <div class="search">
          <form>
            <input type="search" placeholder="Search..." required />
</form>
            <a href=""><img src="../src/logos/prof.png" /></a>
              <a href=""><img src="../src/logos/noti.png" /></a>
                <a href=""><img src="../src/logos/sms.png" /></a>
    </div>
</div>
              <div className="sidenav">
                <img id="logos" src="../src/logos/elogo.png" />
                  <h1>E-Study</h1>
                  <img id="ds" src="../src/logos/dashboard.png" /><a href="">Dashboard</a>
                    <img id="ds" src="../src/logos/teachers.png" /><a href="">Teachers</a>
                      <img id="ds" src="../src/logos/student.png" /><a href="">Students</a>
                        <img id="ds" src="../src/logos/course.png" /><a href="">Courses</a>
                          <img id="ds" src="../src/logos/settings.png" /><a href="">Settings</a>
                            <div className="footer">
                              <p>&copy All Rights Reserved | E-Study | 2020</p>
</div>
</div>
                              <div class="ful">
                                <img id="full" src="../src/imgs/circle.png" />
                                  <img id="semi" src="../src/imgs/semi.png" />
                                    <img id="small" src="../src/imgs/circle.png" />
</div>
                                    <div id="snowflakeContainer">
                                      <span class="snowflake"></span>
                                    </div>
    </div>
  )
}

export default HomePage
