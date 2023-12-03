import React from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  // const jobs = useLoaderData();
  //   const [jobs, setJobs] = useState([]);
  //   useEffect(() => {
  //     fetch("jobs.json")
  //       .then((res) => res.json())
  //       .then((data) => setJobs(data));
  //   }, []);
  //   console.log(data);
  const { id } = useParams();
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

        <div className="details_cont">
          {/* {jobs.map((job) => (
            <h2 key={job.id}>{job.id}</h2>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
