const DBCollection = {
  TASK: "Task",
  USER: "User",
};

const TaskStatus = {
  DOING: "doing",
  COMPLETE: "complete",
};

const DEFAULT_TASK = {
  title: null,
  status: null,
  isAdminCreated: null,
  isDeleted: null,
};

const LogInfoType = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};

module.exports = { DBCollection, TaskStatus, DEFAULT_TASK, LogInfoType };
