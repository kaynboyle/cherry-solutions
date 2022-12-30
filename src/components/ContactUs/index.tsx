import React from "react";
import { useEffect, useState } from "react";
import { useMousePosition, MousePosition } from "../../scripts/mousePosition";
import "./style.css";

class Line {
  x: number;
  y: number;
  offset: number;
  radians: number;
  velocity: number;

  constructor(x: number, y: number, offset: number) {
    this.x = x;
    this.y = y;
    this.offset = offset;
    this.radians = 0;
    this.velocity = 0.01;
  }

  draw = (c: CanvasRenderingContext2D, mouse: MousePosition) => {
    c.strokeStyle = "rgba(255, 255, 255, 0.5)";
    c.fillStyle = "rgba(255, 255, 255, 0.3)";
    const drawLinePath = (width = 6, color: any) => {
      c.beginPath();
      c.moveTo(this.x - width / 2, this.y + width / 2);
      c.lineTo(this.x - width / 2 + 300, this.y - width / 2 - 1000);
      c.lineTo(this.x + width / 2 + 300, this.y - width / 2 - 1000);
      c.lineTo(this.x + width / 2, this.y - width / 2);
      c.closePath();
      if (c.isPointInPath(mouse.x, mouse.y) && color) {
        c.strokeStyle = color;
      }
    };
    drawLinePath(150, "#baf2ef");
    drawLinePath(50, "#dcf3ff");
    c.beginPath();
    c.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
    c.fill();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + 300, this.y - 1000);
    c.stroke();
    c.closePath();

    this.update();
  };

  update = () => {
    this.radians += this.velocity;
    this.y = this.y + Math.cos(this.radians + this.offset);
  };
}

function ContactUs() {
  const mouse = useMousePosition();

  React.useEffect(() => {
    const lineArray: Array<Line> = [];

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    for (let i = 0; i < 100; i++) {
      const start = { x: -250, y: 1000 };
      const random = Math.random() - 0.5;
      const unit = 25;

      lineArray.push(
        new Line(
          start.x + (unit + random) * i,
          start.y + (i + random) * -3 + Math.sin(i) * unit,
          0.1 + 1 * i
        )
      );
    }

    const cvs = document.getElementById("myCanvas") as HTMLCanvasElement | null;
    const card = document.getElementById("card") as HTMLCanvasElement | null;
    if (cvs !== null) {
      const c = cvs.getContext("2d");
      cvs.width = window.innerWidth;
      window.addEventListener("resize", function () {
        cvs.width = window.innerWidth;
      });
    //   if (card !== null) {
    //     card.width = window.innerWidth;
    //     window.addEventListener("resize", function () {
    //         card.width = window.innerWidth;
    //     });
    //   }

      if (c !== null) {
        const animate = () => {
          requestAnimationFrame(animate);
          c.clearRect(0, 0, window.innerWidth, 1500);
          lineArray.forEach((line: Line) => {
            line.draw(c, mouse);
          });
        };

        animate();
      }
    }
  }, []);

  return (
    <div className="App">
      <canvas id="myCanvas" height="1000"></canvas>
      <div className="flex1">
        <div className="card">
          <div className="card-body">
            <section className="mb-4">
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of hours to
                help you.
              </p>

              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    action="mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <label htmlFor="name" className="">
                            Your name
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <label htmlFor="email" className="">
                            Your email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                          />
                          <label htmlFor="subject" className="">
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            id="message"
                            name="message"
                            rows={2}
                            className="form-control md-textarea"
                          ></textarea>
                          <label htmlFor="message">Your message</label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="text-center text-md-left">
                    <a
                      id="contact-submit"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        const form = document.getElementById(
                          "contact-form"
                        ) as HTMLFormElement | null;
                        form?.submit();
                      }}
                    >
                      Send
                    </a>
                  </div>
                  <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                      <p>Where the office is, USA</p>
                    </li>

                    <li>
                      <i className="fas fa-phone mt-4 fa-2x"></i>
                      <p></p>
                    </li>

                    <li>
                      <i className="fas fa-envelope mt-4 fa-2x"></i>
                      <p>US@cherry-solutions.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <div className="right-card">
                      <img src={gif} alt="cherry logo"/>
                </div> */}
      </div>
      <div id="page-extension"></div>
    </div>
  );
}

export default ContactUs;
