const express = require("express")
const router = express.Router()

const { fetchProject, postProject, updateProject, findProject, deleteProject } = require("../controllers/project")

router.get("/", fetchProject)
router.post("/", postProject)
router.put("/:id", updateProject)
router.post("/:id", findProject)
router.delete("/:id", deleteProject)

module.exports = router