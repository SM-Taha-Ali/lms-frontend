import '../Stylesheets/Dashboard.css'
import React, { useContext, useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import Footer from "../../Footer"

const Dashboard = () => {
    const trafficData = [
        {
            month: "Jan",
            visitors: 150,
            name: "lol"
        },
        {
            month: "Feb",
            visitors: 400,
            name: "lol"
        },
        {
            month: "Mar",
            visitors: 855,
            name: "lol"
        },
        {
            month: "Apr",
            visitors: 1100,
            name: "lol"
        },
        {
            month: "May",
            visitors: 1800,
            name: "lol"
        },
        {
            month: "Jun",
            visitors: 2000,
            name: "lol"
        },
        {
            month: "Jul",
            visitors: 2400,
            name: "lol"
        },
        {
            month: "Aug",
            visitors: 3000,
            name: "lol"
        },
        {
            month: "Sep",
            visitors: 2100,
            name: "lol"
        },
        {
            month: "Oct",
            visitors: 1850,
            name: "lol"
        },
        {
            month: "Nov",
            visitors: 2400,
            name: "lol"
        },
        {
            month: "Dec",
            visitors: 2200,
            name: "lol"
        }
    ]

    const openNav = () => {
        var body = document.getElementsByTagName("BODY")[0];
        let width = body.offsetWidth
        if (width <= 640) {
            document.getElementById("mySidenav").style.width = "100vw";
            document.getElementById("main").style.marginLeft = "auto";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }

    return (
        <>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
                <ul className='domain_nav ms-5'>
                </ul>
            </div>
            <div className='container pb-5'>
                <h1 className="text-Red text-center pt-2 pb-4">DASHBOARD</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="icon-big text-center">
                                            <i className="teal fas fa-shopping-cart" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="detail">
                                            <p className="detail-subtitle">New Orders</p>
                                            <span className="number">234</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="fas fa-calendar" /> For this Week
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="icon-big text-center">
                                            <i className="olive fas fa-money-bill-alt" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="detail">
                                            <p className="detail-subtitle">Revenue</p>
                                            <span className="number">$180,900</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="fas fa-calendar" /> For this Month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="icon-big text-center">
                                            <i className="violet fas fa-eye" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="detail">
                                            <p className="detail-subtitle">Page views</p>
                                            <span className="number">28,210</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="fas fa-stopwatch" /> For this Month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="icon-big text-center">
                                            <i className="orange fas fa-envelope" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="detail">
                                            <p className="detail-subtitle">Support Request</p>
                                            <span className="number">75</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="fas fa-envelope-open-text" /> For this week
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="content">
                                        <div className="head">
                                            <h5 className="mb-0">Traffic Overview</h5>
                                            <p className="text-muted">Current year website visitor data</p>
                                        </div>
                                        <div className="canvas-wrapper">
                                            <ResponsiveContainer width="100%" height={300}>
                                                <LineChart data={trafficData}>
                                                    <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
                                                    <CartesianGrid stroke="#ccc" />
                                                    <XAxis dataKey="month" interval={'preserveStartEnd'} />
                                                    <YAxis interval={'preserveStartEnd'} values='double' />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="content">
                                        <div className="head">
                                            <h5 className="mb-0">Sales Overview</h5>
                                            <p className="text-muted">Current year sales data</p>
                                        </div>
                                        <div className="canvas-wrapper">
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={trafficData}>
                                                    <Bar type="monotone" dataKey="visitors" barSize={30} fill="#8884d8" />
                                                    <CartesianGrid stroke="#ccc" />
                                                    <XAxis dataKey="month" interval={'preserveStartEnd'} />
                                                    <YAxis interval={'preserveStartEnd'} values='double' />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="dfd text-center">
                                        <i className="blue large-icon mb-2 fas fa-thumbs-up" />
                                        <h4 className="mb-0">+21,900</h4>
                                        <p className="text-muted">FACEBOOK PAGE LIKES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="dfd text-center">
                                        <i className="orange large-icon mb-2 fas fa-reply-all" />
                                        <h4 className="mb-0">+22,566</h4>
                                        <p className="text-muted">INSTAGRAM FOLLOWERS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="dfd text-center">
                                        <i className="grey large-icon mb-2 fas fa-envelope" />
                                        <h4 className="mb-0">+15,566</h4>
                                        <p className="text-muted">E-MAIL SUBSCRIBERS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="dfd text-center">
                                        <i className="olive large-icon mb-2 fas fa-dollar-sign" />
                                        <h4 className="mb-0">+98,601</h4>
                                        <p className="text-muted">TOTAL SALES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
