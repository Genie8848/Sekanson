import { url } from "inspector";
import { fetcher } from "../../utils/address";

export const getApplications = async (formData: any) => {
  // const { address } = formData;

  const api_url = `/api/applications/find-by-address`;
  try {
    const { applications } = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return applications;
  } catch (error) {}
};

export const getProjects = async (formData: any) => {
  // const { address } = formData;
  const api_url = `/api/projects/find-by-address`;
  try {
    const { projects } = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return projects;
  } catch (error) {}
};

export const getApplicationById = async (id: any) => {
  try {
    const { application } = await fetcher(`/api/applications/${id}`, {});
    return application;
  } catch (error) {}
};

export const createNewApplication = async (formData: any) => {
  try {
    const { application } = await fetch("/api/applications/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return application;
  } catch (error) {}
};

export const createNewProject = async (formData: any) => {
  try {
    const project = await fetch("/api/projects/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return project;
  } catch (error) {}
};

export const deleteApplication = async (id: any) => {
  let deletedApp = null;
  const api_url = `/api/applications/${id}/delete`;
  try {
    const { projects } = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return projects;
  } catch (error) {}
  return deletedApp;
};

export const deleteProject = async (id: any) => {
  const api_url = `/api/projects/${id}/delete`;
  try {
    const { projects } = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return projects;
  } catch (error) {}
};
