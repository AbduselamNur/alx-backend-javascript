import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * Binds the routes to the appropriate handler in the
 * given Express app.
 * @param {Express} app The Express application.
 * @author Abduselam <https://github.com/B3zaleel>
 */
const mapRoutes = (app) => {
  app.get("/", AppController.getHomepage);
  app.get("/students", StudentsController.getAllStudents);
  app.get("/students/:major", StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
