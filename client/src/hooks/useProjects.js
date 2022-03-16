import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useProjects(user, skill) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsIds = user?.jobs.map((e) => e.id);
    if (jobsIds) {
      Promise.all(
        jobsIds?.map(async (id, i) => {
          return await axios
            .get(`/torreco/api/genome/bios/${user?.person.publicId}/jobs/${id}`)
            .then((e) => {
              return e.data;
              // setJobs(jobs?.length ? [...jobs, e.data] : [e.data]);
            });
        })
      ).then((e) => setJobs(e));
    }
  }, [user, skill]);

  return jobs.filter((e) =>
    e.strengths.some((s) => {
      return s.name == skill;
    })
  );
}
