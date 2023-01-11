import fs from "fs";
import path from "path";

export const getApplications = () => {
  const dir = path.join("data/applications.json");
  const applicationData = fs.readFileSync(dir, { encoding: "utf-8" });
  let data = [];
  data = JSON.parse(applicationData);
  return data;
};

export const updateApplications = (data: any) => {
  const dir = path.join("data/applications.json");

  fs.writeFile(dir, JSON.stringify(data, null, 4), (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    }
  });
};

export const getProjects = () => {
  const dir = path.join("data/projects.json");
  const applicationData = fs.readFileSync(dir, { encoding: "utf-8" });
  let data = [];
  data = JSON.parse(applicationData);
  return data;
};

export const updateProjects = (data: any) => {
  const dir = path.join("data/projects.json");
  fs.writeFile(dir, JSON.stringify(data, null, 4), (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    }
  });
};
