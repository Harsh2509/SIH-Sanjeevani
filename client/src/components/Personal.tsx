import "./Personal.css";
import profile from "../assets/profile.webp";

const Personal = () => {
  return (
    <>
      <div className="page1">
        <div className="navbar">
          <div>
            <h1>Track your child's progress report</h1>
          </div>
          <div>
            <button>Progress Report</button>
          </div>
        </div>
        <p>Child details</p>
        <div className="child_detail">
          <div className="setion1">
            <div className="image">
              <img src={profile} alt="" />
            </div>
          </div>
          <div className="setion3">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Sarah Denvers" required />
            <br />
            <span>Birthday</span>
            <br />
            <input type="date" placeholder="08 August 1998" required />
            <br />
          </div>
          <div className="setion2">
            <span>Gender</span>
            <br />
            <select name="gender" id="gender">
              <option value="">Female</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <button>Update medical records</button>
            <br />
            <input type="submit" id="submit" />
            <input type="button" value="Clear" id="submit" />
          </div>
        </div>
        <p>Guadian 1 details</p>
        <div className="parent1">
          <div className="setion1">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Sarah Denvers" required />
            <br />
            <span>Phone number</span>
            <br />
            <input type="number" placeholder="9889223456" required />
            <br />
            <span>Email Address</span>
            <br />
            <input type="email" placeholder="ms.sarah2046@gmail.com" required />
          </div>
          <div className="setion2">
            <span>Relation</span>
            <br />
            <select name="relation" id="relation">
              <option value="">Mother</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Father">Sister</option>
              <option value="Father">Brother</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <span>Birthday</span>
            <br />
            <input type="date" placeholder="08 August 1998" required />
            <br />
            <span>Location</span>
            <br />
            <input type="location" />
          </div>
        </div>
        <input type="submit" id="submit" />
        <input type="button" value="Clear" id="submit" />
        <p>Guadian 2 details</p>
        <div className="parent1">
          <div className="setion1">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Sarah Denvers" required />
            <br />
            <span>Phone number</span>
            <br />
            <input type="number" placeholder="9889223456" required />
          </div>
          <div className="setion2">
            <span>Relation</span>
            <br />
            <select name="relation" id="relation">
              <option value="">Mother</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Father">Sister</option>
              <option value="Father">Brother</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <span>Birthday</span>
            <br />
            <input type="date" placeholder="08 August 1998" required />
          </div>
        </div>
        <input type="submit" id="submit" />
        <input type="button" value="Clear" id="submit1" />
      </div>
    </>
  );
};

export default Personal;
