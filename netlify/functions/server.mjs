import server from "../../dist/server/server.js";

export default async (request, context) => {
  return await server.fetch(request, process.env, context);
};
