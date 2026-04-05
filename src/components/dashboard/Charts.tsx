import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

// Attendance Chart
export const AttendanceChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      height: 260,
      type: "donut",
      toolbar: { show: false },
    },
    labels: ["Present", "Absent", "Half Day", "Late"],
    colors: ["#3D5EE1", "#E82646", "#EAB300", "#6FCCD8"],
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  const series = [75, 10, 5, 10];

  return <Chart options={options} series={series} type="donut" height={260} />;
};

// Performance Chart
export const PerformanceChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      height: 340,
      type: "line",
      toolbar: { show: false },
      fontFamily: "Poppins, sans-serif",
    },
    colors: ["#3D5EE1", "#6FCCD8"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  const series = [
    {
      name: "This Year",
      data: [45, 60, 75, 52, 68, 80, 72, 90, 85, 78, 92, 88],
    },
    {
      name: "Last Year",
      data: [35, 50, 55, 45, 60, 65, 58, 75, 70, 65, 80, 75],
    },
  ];

  return <Chart options={options} series={series} type="line" height={340} />;
};

// Exam Result Chart
export const ExamResultChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      height: 340,
      type: "bar",
      toolbar: { show: false },
      fontFamily: "Poppins, sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8", "#EAB300", "#E82646"],
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["1st Quarterly", "Half Yearly", "2nd Quarterly", "Annual"],
    },
    yaxis: {
      title: { text: "Marks" },
    },
    fill: { opacity: 1 },
    legend: {
      position: "top",
    },
  };

  const series = [
    { name: "Maths", data: [100, 90, 85, 95] },
    { name: "Physics", data: [92, 85, 78, 88] },
    { name: "Chemistry", data: [90, 88, 75, 82] },
    { name: "English", data: [80, 75, 70, 85] },
  ];

  return <Chart options={options} series={series} type="bar" height={340} />;
};
