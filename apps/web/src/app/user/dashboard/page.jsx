'use client'
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { lineChartData, barChartData, pieChartData } from '../../../utils/chartData';
import Layout from '../../../components/Layout'
import styles from './styles.css'
import {useState,useEffect} from 'react'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const fetchData = async (endpoint) => {
//     const response = await fetch(endpoint);
//     return response.json();
//   };

function Dashboard() {
    // const [lineChartData, setLineChartData] = useState([]);
    // const [barChartData, setBarChartData] = useState([]);
    // const [pieChartData, setPieChartData] = useState([]);
  
    // useEffect(() => {
    //   async function loadData() {
    //     const registrationsData = await fetchData('/api/registrations');
    //     const eventsData = await fetchData('/api/events');
    //     const statusData = await fetchData('/api/status');
  
    //     setLineChartData(registrationsData);
    //     setBarChartData(eventsData);
    //     setPieChartData(statusData);
    //   }
  
    //   loadData();
    // }, []);
  return (
    <Layout>
         <div className={styles.dashboard}pt-100px>
      <h1>Event Dashboard</h1>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <h2>Attendee Registrations & Transactions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <Line type="monotone" dataKey="registrations" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="transactions" stroke="#82ca9d" strokeWidth={2} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chart}>
          <h2>Event Attendees & Tickets Sold</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendees" fill="#8884d8" />
              <Bar dataKey="ticketsSold" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chart}>
          <h2>Event Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>   
    </Layout>
   
  );
}

export default Dashboard;
