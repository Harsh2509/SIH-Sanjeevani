//import React from 'react'
import "./child_details.css";
//import { useNavigate } from "react-router-dom";
import Doc1 from "../assets/doc1.jpg";
import Doc2 from "../assets/doc 2.jpg";
import Doc3 from "../assets/doc 3.jpg";

export default function child_details() {
  return (
    <div>
      <Header/>
      <About_Doc/>
    </div>
  );
}

function Header(){
    return (
        <div className="bar">
            <div className="contain">
                <h2>Share your child's profile with your expert</h2>
                <p>Copy the code given on the right and share it with your doctor/clinician/instructor etc.</p>
            </div>
            <div className="idgen">
                <div className="input">
                    <h5>Sgr5633hw7hx6x8</h5>
                </div>
                <button>copy</button>
            </div>
        </div>
    );
}

function About_Doc() {
    return (
        <>
            <h3>Don't know an expert? We can help you!</h3>
            <div className="doc_1">
                <div className="box1">
                    <img src={Doc1} alt="" />
                </div>
                <div className="box2">
                    <h4>Dr. Sarah Mitchell</h4>
                    <li><b>Qualification:</b> MD, Child Psychiatry</li>
                    <li><b>Specialization:</b> Child and Adolescent Psychiatry</li>
                    <li><b>Experience:</b> 12 Years</li>
                    <li><b>Bio:</b> Dr. Mitchell is a board-certified Child Psychiatrist with extensive experience in treating neurodevelopmental disorders in children. She is dedicated to improving the cognitive well-being of young patients.</li>
                </div>
                <div className="box3">
                    <button>Connect</button>
                </div>
            </div>


            <div className="doc_1">
                <div className="box1">
                    <img src={Doc2} alt="" />
                </div>
                <div className="box2">
                    <h4>Prof. David Reynolds, PhD</h4>
                    <li><b>Qualification:</b> PhD in Neuropsychology</li>
                    <li><b>Specialization:</b> Neuropsychological Assessment</li>
                    <li><b>Experience:</b> 20 Years</li>
                    <li><b>Bio:</b> Reynolds is a renowned expert in neuropsychological assessment and cognitive rehabilitation. His research has contributed significantly to the field of cognitive development.</li>
                </div>
                <div className="box3">
                    <button>Connect</button>
                </div>
            </div>


            <div className="doc_1">
                <div className="box1">
                    <img src={Doc3} alt="" />
                </div>
                <div className="box2">
                    <h4>Dr. Emily Davis</h4>
                    <li><b>Qualification:</b> PhD in Clinical Psychology</li>
                    <li><b>Specialization:</b> Behavioral Therapy</li>
                    <li><b>Experience:</b> 15 Years</li>
                    <li><b>Bio:</b> Dr. Davis specializes in behavioral therapy for children with developmental disabilities. Her compassionate approach has helped numerous families navigate cognitive challenges.</li>
                </div>
                <div className="box3">
                    <button>Connect</button>
                </div>
            </div>
        </>
    );
}