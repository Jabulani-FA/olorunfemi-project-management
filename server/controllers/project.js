const Project = require("../model/project");

exports.fetchProject = async (req, res) => {
  //
  try {
    const project = await Project.find({}).exec();
    res.send(project);
  } catch (err) {
    res.status(401).send({ message: `Error occured: ${err}` });
  }
};
exports.postProject = async (req, res) => {
  //
  const newProject = req.body;
  const project = await new Project(newProject).save();
  if (project) {
    res.send("New Project has been added successfully");
  }
};
exports.findProject = async (req, res) => {
  //
  const id = req.params.id;
  try {
    const project = await Project.findOne({ _id: id }).exec();
    res.send(project);
  } catch (err) {
    res.status(401).send({ message: `Error occured: ${err}` });
  }
};
exports.updateProject = async (req, res) => {
  //
  const id = req.params.id;
  try {
    const project = await Project.findOneAndReplace({ _id: id }, req.body).exec();
    res.send(project);
  } catch (err) {
    res.status(401).send({ message: `Error occured: ${err}` });
  }
};
exports.deleteProject = async (req, res) => {
  //
  const id = req.params.id;
  try {
    const project = await Project.findOneAndDelete({ _id: id }).exec();
    res.send(project);
  } catch (err) {
    res.status(401).send({ message: `Error occured: ${err}` });
  }
};
