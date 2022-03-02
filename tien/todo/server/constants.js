const DBCollection = {
    TASK: "Task",
    USER: "User",
  };
  
  const TaskStatus = {
    INPROGRESS: "inprogress",
    COMPLETED: "completed",
  };
  
  const DEFAULT_TASK = {
    title: null,
    status: null,
    isCreatedByAdmin: null,
    isDeleted: null,
  };
  
  module.exports = { DBCollection, TaskStatus, DEFAULT_TASK };
  