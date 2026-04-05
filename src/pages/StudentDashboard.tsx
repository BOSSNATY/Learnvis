import React from "react";
import MainLayout from "../components/layout/MainLayout";
import {
  AttendanceChart,
  PerformanceChart,
  ExamResultChart,
} from "../components/dashboard/Charts";

const StudentDashboard: React.FC = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Student Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Student Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-8 d-flex">
          <div className="row flex-fill">
            {/* Profile Card */}
            <div className="col-xl-6 d-flex">
              <div className="flex-fill">
                <div className="card bg-dark position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center row-gap-3 mb-3">
                      <div className="avatar avatar-xxl rounded flex-shrink-0 me-3">
                        <img src="assets/img/students/student.jpg" alt="Img" />
                      </div>
                      <div className="d-block">
                        <span className="badge bg-transparent-primary text-primary mb-1">
                          #ST1234546
                        </span>
                        <h3 className="text-truncate text-white mb-1">
                          Melat Hailu
                        </h3>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 text-gray-2">
                          <span className="border-end me-2 pe-2">
                            Class : 10, C
                          </span>
                          <span>Roll No : 36545</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between profile-footer flex-wrap row-gap-3 pt-4">
                      <div className="d-flex align-items-center">
                        <h6 className="text-white">1st Quarterly</h6>
                        <span className="badge bg-success d-inline-flex align-items-center ms-2">
                          <i className="ti ti-circle-filled fs-5 me-1"></i>Pass
                        </span>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Edit Profile
                      </a>
                    </div>
                    <div className="student-card-bg">
                      <img src="assets/img/bg/circle-shape.png" alt="Bg" />
                      <img src="assets/img/bg/shape-02.png" alt="Bg" />
                      <img src="assets/img/bg/shape-04.png" alt="Bg" />
                      <img src="assets/img/bg/blue-polygon.png" alt="Bg" />
                    </div>
                  </div>
                </div>

                {/* Today's study */}
                <div className="card flex-fill">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4 className="card-title">Today's Study</h4>
                    <div className="d-inline-flex align-items-center class-datepick">
                      <span className="icon">
                        <i className="ti ti-chevron-left me-2"></i>
                      </span>
                      <span className="fw-medium">16 May 2024</span>
                      <span className="icon">
                        <i className="ti ti-chevron-right ms-2"></i>
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    {[
                      {
                        subject: "English",
                        time: "09:00 - 09:45 AM",
                        img: "assets/img/parents/parent-07.jpg",
                        status: "Completed",
                        statusClass: "badge-soft-success",
                        strikethrough: true,
                      },
                      {
                        subject: "Chemistry",
                        time: "10:45 - 11:30 AM",
                        img: "assets/img/parents/parent-02.jpg",
                        status: "Completed",
                        statusClass: "badge-soft-success",
                        strikethrough: true,
                      },
                      {
                        subject: "Physics",
                        time: "11:30 - 12:15 AM",
                        img: "assets/img/profiles/avatar-17.jpg",
                        status: "Inprogress",
                        statusClass: "badge-soft-warning",
                        strikethrough: false,
                      },
                    ].map((cls, i) => (
                      <div
                        className={`card ${i < 2 ? "mb-3" : "mb-0"}`}
                        key={i}
                      >
                        <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                          <div className="d-flex align-items-center flex-wrap mb-2">
                            <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                              {/* <img src={cls.img} alt="Profile" /> */}
                            </span>
                            <div>
                              <h6
                                className={`mb-1 ${cls.strikethrough ? "text-decoration-line-through" : ""}`}
                              >
                                {cls.subject}
                              </h6>
                              <span>
                                <i className="ti ti-clock me-2"></i>
                                {cls.time}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`badge ${cls.statusClass} shadow-none mb-2`}
                          >
                            <i className="ti ti-circle-filled fs-8 me-1"></i>
                            {cls.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Grade Distribution */}
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Grade Distribution</h4>
                </div>
                <div className="card-body">
                  <AttendanceChart />
                  <div className="row mt-3 text-center">
                    <div className="col-3">
                      <p className="mb-1">
                        <i className="ti ti-circle-filled text-primary me-1"></i>
                        A
                      </p>
                      <h5>75%</h5>
                    </div>
                    <div className="col-3">
                      <p className="mb-1">
                        <i className="ti ti-circle-filled text-danger me-1"></i>
                        B
                      </p>
                      <h5>10%</h5>
                    </div>
                    <div className="col-3">
                      <p className="mb-1">
                        <i className="ti ti-circle-filled text-warning me-1"></i>
                        C
                      </p>
                      <h5>5%</h5>
                    </div>
                    <div className="col-3">
                      <p className="mb-1">
                        <i className="ti ti-circle-filled text-info me-1"></i>D
                      </p>
                      <h5>10%</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exam & Schedules */}
        <div className="col-xxl-4 d-flex">
          <div className="row flex-fill">
            {/* Leave Requests */}
            {/* <div className="col-xxl-12 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Leave Request</h4>
                  <a href="#" className="link-primary fw-medium">
                    <i className="ti ti-square-plus me-1"></i>Add New
                  </a>
                </div>
                <div className="card-body py-1">
                  {[
                    {
                      type: "Medical Leave",
                      date: "05 May - 06 May",
                      status: "Approved",
                      statusClass: "badge-soft-success",
                    },
                    {
                      type: "Personal Leave",
                      date: "10 May - 11 May",
                      status: "Pending",
                      statusClass: "badge-soft-warning",
                    },
                    {
                      type: "Sick Leave",
                      date: "20 May",
                      status: "Declined",
                      statusClass: "badge-soft-danger",
                    },
                  ].map((leave, i) => (
                    <div
                      key={i}
                      className={`d-flex align-items-center justify-content-between py-3 ${i < 2 ? "border-bottom" : ""}`}
                    >
                      <div>
                        <h6 className="mb-1">{leave.type}</h6>
                        <p>
                          <i className="ti ti-calendar me-1"></i>
                          {leave.date}
                        </p>
                      </div>
                      <span className={`badge ${leave.statusClass}`}>
                        {leave.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Exam Schedules */}
            <div className="col-xxl-12 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Exam Schedules</h4>
                  <a href="#" className="link-primary fw-medium me-2">
                    <i className="ti ti-square-plus me-1"></i>Add New
                  </a>
                </div>
                <div className="card-body pb-0">
                  <h5 className="mb-3">Exams</h5>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">1st Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1"></i>19 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Mathematics</h6>
                        <p>
                          <i className="ti ti-clock me-1"></i>01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1"></i>06 May
                          2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">1st Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1"></i>19 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Chemistry</h6>
                        <p>
                          <i className="ti ti-clock me-1"></i>01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1"></i>06 May
                          2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">2nd Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1"></i>20 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Physics</h6>
                        <p>
                          <i className="ti ti-clock me-1"></i>01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1"></i>07 May
                          2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">2nd Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1"></i>20 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">English</h6>
                        <p>
                          <i className="ti ti-clock me-1"></i>01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1"></i>07 May
                          2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance & Homeworks Row */}
      <div className="row">
        <div className="col-xxl-8 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Performance</h4>
              <div className="dropdown">
                <span className="bg-white">
                  <i className="ti ti-calendar me-2"></i>2024 - 2025
                </span>
              </div>
            </div>
            <div className="card-body pb-0">
              <PerformanceChart />
            </div>
          </div>
        </div>

        {/* Todos */}
        <div className="col-xxl-4 col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Todo</h4>
              <a href="#" className="link-primary fw-medium">
                <i className="ti ti-square-plus me-1"></i>Add New
              </a>
            </div>
            <div className="card-body">
              {[
                {
                  task: "Complete Math Assignment",
                  due: "Due: 20 May 2024",
                  done: false,
                },
                {
                  task: "Study for Physics Exam",
                  due: "Due: 22 May 2024",
                  done: false,
                },
                {
                  task: "Submit Chemistry Lab Report",
                  due: "Due: 18 May 2024",
                  done: true,
                },
                {
                  task: "Read English Literature Ch.5",
                  due: "Due: 25 May 2024",
                  done: false,
                },
              ].map((todo, i) => (
                <div
                  key={i}
                  className={`d-flex align-items-center justify-content-between ${i < 3 ? "border-bottom mb-3 pb-3" : ""}`}
                >
                  <div className="d-flex align-items-center">
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={todo.done}
                      />
                    </div>
                    <div>
                      <h6
                        className={`mb-1 ${todo.done ? "text-decoration-line-through text-muted" : ""}`}
                      >
                        {todo.task}
                      </h6>
                      <p>{todo.due}</p>
                    </div>
                  </div>
                  <a href="#">
                    <i className="ti ti-trash text-danger"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Class Faculties */}
      {/* <div className="row">
        <div className="col-xl-12">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Class Faculties</h4>
            </div>
            <div className="card-body">
              <div className="row">
                {[
                  {
                    name: "Ms. Nithya",
                    subject: "English",
                    img: "assets/img/teachers/teacher-01.jpg",
                  },
                  {
                    name: "Mr. Francis",
                    subject: "Chemistry",
                    img: "assets/img/teachers/teacher-02.jpg",
                  },
                  {
                    name: "Mrs. Crystal",
                    subject: "Physics",
                    img: "assets/img/teachers/teacher-03.jpg",
                  },
                  {
                    name: "Mr. Morgan",
                    subject: "Maths",
                    img: "assets/img/teachers/teacher-04.jpg",
                  },
                  {
                    name: "Ms. Janet",
                    subject: "Biology",
                    img: "assets/img/teachers/teacher-05.jpg",
                  },
                  {
                    name: "Mr. Patrick",
                    subject: "Computer",
                    img: "assets/img/teachers/teacher-06.jpg",
                  },
                ].map((teacher, i) => (
                  <div
                    key={i}
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3"
                  >
                    <div className="border rounded text-center p-3">
                      <a href="#" className="avatar avatar-xl mb-3">
                        <img
                          src={teacher.img}
                          className="rounded-circle"
                          alt={teacher.name}
                        />
                      </a>
                      <h6 className="mb-1">
                        <a href="#">{teacher.name}</a>
                      </h6>
                      <p>{teacher.subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Exam Results & Fees Reminder */}
      <div className="row">
        <div className="col-xxl-8 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Exam Result</h4>
            </div>
            <div className="card-body pb-0">
              <div className="d-flex align-items-center flex-wrap">
                <span className="badge badge-soft-primary badge-md me-1 mb-3">
                  Mat : 100
                </span>
                <span className="badge badge-soft-success badge-md me-1 mb-3">
                  Phy: 92
                </span>
                <span className="badge badge-soft-warning badge-md me-1 mb-3">
                  Che : 90
                </span>
                <span className="badge badge-soft-danger badge-md mb-3">
                  Eng : 80
                </span>
              </div>
              <ExamResultChart />
            </div>
          </div>
        </div>
        {/* Notice Board */}
        <div className="col-xxl-4 col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Notice Board</h4>
              <a href="#" className="fw-medium">
                View All
              </a>
            </div>
            <div className="card-body">
              <div className="notice-widget">
                {[
                  {
                    title: "New Syllabus Instructions",
                    date: "11 Mar 2024",
                    icon: "ti-books",
                    bgClass: "bg-primary-transparent",
                  },
                  {
                    title: "World Environment Day Program.....!!!",
                    date: "21 Apr 2024",
                    icon: "ti-note",
                    bgClass: "bg-success-transparent",
                  },
                  {
                    title: "Exam Preparation Notification!",
                    date: "13 Mar 2024",
                    icon: "ti-bell-check",
                    bgClass: "bg-danger-transparent",
                  },
                  {
                    title: "Annual Day Program Celebration",
                    date: "05 May 2024",
                    icon: "ti-award",
                    bgClass: "bg-warning-transparent",
                  },
                ].map((notice, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center justify-content-between mb-4"
                  >
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span
                        className={`${notice.bgClass} avatar avatar-md me-2 rounded-circle flex-shrink-0`}
                      >
                        <i className={`ti ${notice.icon} fs-16`}></i>
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">{notice.title}</h6>
                        <p>
                          <i className="ti ti-calendar me-2"></i>Added on :{" "}
                          {notice.date}
                        </p>
                      </div>
                    </div>
                    <a href="#">
                      <i className="ti ti-chevron-right fs-16"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Fees Reminder */}
        {/* <div className="col-xxl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Fees Reminder</h4>
              <a href="#" className="link-primary fw-medium">
                View All
              </a>
            </div>
            <div className="card-body py-1">
              {[
                {
                  name: "Transport Fees",
                  amount: "$2500",
                  date: "25 May 2024",
                  icon: "ti-bus-stop",
                  bgClass: "bg-info-transparent",
                  due: false,
                },
                {
                  name: "Book Fees",
                  amount: "$2500",
                  date: "25 May 2024",
                  icon: "ti-books",
                  bgClass: "bg-success-transparent",
                  due: false,
                },
                {
                  name: "Exam Fees",
                  amount: "$2500",
                  date: "25 May 2024",
                  icon: "ti-report-money",
                  bgClass: "bg-info-transparent",
                  due: false,
                },
                {
                  name: "Mess Fees",
                  amount: "$2500 + $150",
                  date: "27 May 2024",
                  icon: "ti-meat",
                  bgClass: "bg-skyblue-transparent",
                  due: true,
                },
                {
                  name: "Hostel",
                  amount: "$2500",
                  date: "25 May 2024",
                  icon: "ti-report-money",
                  bgClass: "bg-danger-transparent",
                  due: false,
                },
              ].map((fee, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center justify-content-between py-3"
                >
                  <div className="d-flex align-items-center overflow-hidden me-2">
                    <span
                      className={`${fee.bgClass} avatar avatar-lg me-2 rounded-circle flex-shrink-0`}
                    >
                      <i className={`ti ${fee.icon} fs-16`}></i>
                    </span>
                    <div className="overflow-hidden">
                      <h6 className="text-truncate mb-1">
                        {fee.name}
                        {fee.due && (
                          <span className="d-inline-flex align-items-center badge badge-soft-danger ms-1">
                            <i className="ti ti-circle-filled me-1 fs-5"></i>Due
                          </span>
                        )}
                      </h6>
                      <p className={fee.due ? "text-danger" : ""}>
                        {fee.amount}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-1">Last Date</h6>
                    <p>{fee.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Footer */}
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2026 © Learnvis.</p>
        <p>Designed & Developed By : Blitz Team</p>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
