export function getAllJobList() {
  let allJobList;
  const jobList = localStorage.getItem("jobList");
  if (typeof jobList === "string") {
    allJobList = JSON.parse(jobList);
  } else {
    allJobList = [];
  }
  return allJobList;
}

export function saveJob(data: object) {
  const jobList = getAllJobList();
  jobList.push(data);
  localStorage.setItem("jobList", JSON.stringify(jobList));
}

export function updateJob(name: string, priority: string) {
  const jobList = getAllJobList();
  let filteredArray = jobList.map((item: any) =>
    item.name === name ? { ...item, priority } : item
  );
  localStorage.setItem("jobList", JSON.stringify(filteredArray));
}

export function removeJob(value: string) {
  const jobList = getAllJobList();
  let filteredArray = jobList.filter((item: any) => item.name !== value);
  localStorage.setItem("jobList", JSON.stringify(filteredArray));
}
