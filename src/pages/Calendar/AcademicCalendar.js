import React, { Component } from "react";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import Footer from "../../shared/components/Footer/Footer";
import "./AcademicCalendar.css";
import { SEMESTERS } from "./values";
export default class AcademicCalendar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero
          title="Academic Calendar"
          subtitle="African Leadership University"
        />

        <PageTitle title="ACADEMIC CALENDAR" />

        <div className="col-md-8 offset-md-2">
          {SEMESTERS.map((card, index) => (
            <div className="academic-card" key={index.toString()}>
              <div
                className="academic-header"
                style={{ background: card.color }}
              >
                <span>{card.name}</span>
              </div>
              <div className="academic-body">
                <div className="calendar-row">
                  <div className="row-left">
                    <h5>DETAILS</h5>
                  </div>

                  <div className="row-right">
                    <h5>DATES</h5>
                  </div>
                </div>
                {card.dates.map((list, ind) => (
                  <>
                    <p
                      key={ind.toString()}
                      style={{
                        color: "maroon",
                        fontWeight: "bold",
                        marginTop: 20,
                      }}
                    >
                      {list.title}
                    </p>

                    {list.timeline.map((data, i) => (
                      <div
                        className="calendar-row"
                        style={{ minHeight: 35 }}
                        key={i.toString()}
                      >
                        <div className="row-left">
                          <p>{data.item}</p>
                        </div>

                        <div className="row-right">
                          <p>{data.date}</p>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
