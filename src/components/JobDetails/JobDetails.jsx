import React from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  // const [data, setData] = useState({});
  // const featuredJob = useLoaderData();
  // useEffect(() => {
  //   setData(featuredJob[id]);
  // }, [id]);
  // console.log(data.job_title);
  // ...........
  // const jobs = useLoaderData();
  //   const [jobs, setJobs] = useState([]);
  //   useEffect(() => {
  //     fetch("jobs.json")
  //       .then((res) => res.json())
  //       .then((data) => setJobs(data));
  //   }, []);
  //   console.log(data);

  //   const location = useLocation();
  //   const { jobs } = location.state || {};
  //   console.log(job.children);
  //   //   if (!job) {
  //     return <div className="details_cont">No Details found</div>;
  //   }

  return (
    <div>
      <div className="title ">
        <img className="img1" src="../../../assets/images/bg1.png" alt="" />
        <h2 className=" ">Job details for : {id}</h2>
        <img className="img2" src="../../../assets/images/bg2.png" alt="" />
      </div>

      <div className="details_cont md:w-4/6 mx-auto flex md:mt-14 mt-8">
        {/* {jobs.map((job) => (
            <h2 key={job.id}>{job.id}</h2>
          ))} */}

        <div className="details_left w-4/6 mr-4">
          <p>
            <span>Job Description : </span> A UI/UX (User Interface/User
            Experience) designer is responsible for designing and creating
            engaging and effective interfaces for software and web applications.
            This includes designing the layout, visual design, and interactivity
            of the user interface.
          </p>
          <p>
            <span>Job Responsibility : </span> Collaborating with
            cross-functional teams: UI/UX designers often work closely with
            other teams, including product management, engineering, and
            marketing, to ensure that the user interface is aligned with
            business and technical requirements. You will need to be able to
            effectively communicate your design ideas and gather feedback from
            other team members.
          </p>
          <p>
            <span className="block mb-3 mt-4">Educational Requirements : </span>{" "}
            Bachelor degree to complete any reputational university.
          </p>
          <p>
            <span className="block mb-3 mt-4">Experiences : </span> 2-3 Years in
            this field.
          </p>
        </div>
        <div className="details_right w-2/6">
          <div className="details_right_card mb-4 p-4">
            <p className="titles">Job Details</p>
            <hr />
            <div className="mb-1">
              <img src="../../../assets/icons/money.png" alt="" />
              <p>
                <span>Salary : </span> 100K - 150K (Per Month)
              </p>
            </div>
            <div>
              <img src="../../../assets/icons/money.png" alt="" />
              <p>
                <span>Job title : </span>Product Designer
              </p>
            </div>

            <p className="titles mt-5">Contact Information</p>
            <hr />
            <div className="mb-1">
              <img src="../../../assets/icons/phone.png" alt="" />
              <p>
                <span>Phone : </span> 01750-00 00 00
              </p>
            </div>
            <div>
              <img src="../../../assets/icons/email.png" alt="" />
              <p>
                <span>Email : </span> info@gmail.com
              </p>
            </div>
            <div className="">
              <img
                src="../../../assets/icons/location2.png"
                alt=""
                className="me-0"
              />
              <p>
                <span>Address :</span> Dhanmondi 32, Sukrabad Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <button className="btn btn-block">block</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
