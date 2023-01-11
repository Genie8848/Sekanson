import type { NextApiRequest, NextApiResponse } from "next";
import { getProjects, updateProjects } from "../../../libs/api/mock_api";
import { getRandomString } from "../../../utils/numberUtils";
import { project } from "../hello";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projects: any[] = getProjects();

  switch (req.method) {
    case "GET": {
      let { page = "1", limit = "10000" }: any = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      try {
        return res.status(200).json({
          page,
        });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }
    case "POST": {
      try {
        const newProject = {
          ...project,
          uid: getRandomString(),
        };
        projects.push(newProject);
        updateProjects(projects);
        return res.status(201).json({ data: newProject });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
        break;
      }
    }

    default: {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
