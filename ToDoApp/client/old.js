// projectList = array [project,...]
// project : nameProject(string) + taskList (array) + member(array)
// nameProject: khác nhau
// task: nameTask(string) + status(true = finished / false = unfinished) + isDelete (true = khong hien / false = hien)
// member: chứa username của các thành viên


const ProjectERROR = {
    ALREADY__EXISTED: "This project has been already existed!",
  }
  
  const TaskERROR = {
    ALREADY__EXISTED: "This task has been already existed!",
  
  }
  
  //---------------------------------------------------------------------
  // Trợ năng------------------------------------------------------------
  function logout() {
    window.localStorage.setItem("isLogin", JSON.stringify(false));
    window.localStorage.setItem("isRemember", JSON.stringify(false));
    window.localStorage.removeItem('currentAccount');
    window.location.href = "/index.html";
  }
  
  function stayLogin() {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (!isLogin) {
      window.location.href = "/index.html";
    }
  }
  
  function returnPage() {
    window.location.href = "/admin/"
  }
  
  
  function createButton(elementHTML, type, value, textColor = "#333") {
    let button = document.createElement(elementHTML);
    button.type = type;
    button.value = value;
    button.style.color = textColor;
    return button;
  }
  
  function project__isAlreadyExist(newProjectName) {
    let dataProjectList = JSON.parse(window.localStorage.getItem('data__projectList'));
    if (Array.isArray(dataProjectList)) {
      return dataProjectList.some(project => project.isDeleted == false && project.nameProject === newProjectName);
    }
    return false;
  }
  
  function task__isAlreadyExist(newTaskName, taskList) {
    if (Array.isArray(taskList)) {
      return taskList.some(task => task.isDeleted == false && task.nameTask === newTaskName);
    }
    return false;
  }
  
  //---------------------------------------------------------------------
  // Project------------------------------------------------------------
  function Project(nameProject = "#", taskList = [], memberList = [], isDeleted = false) {
    this.nameProject = nameProject;
    this.taskList = taskList;
    this.members = memberList;
    this.isDeleted = isDeleted;
  }
  
  let projectListHTML = document.getElementById('projectList');
  
  document.getElementById("addProject__addButton").addEventListener("click", () => {
    createProject();
  });
  
  document.getElementById("addProject__cancelButton").addEventListener('click', () => { document.getElementById('addProject__field').value = "" });
  
  function addTaskList__project(projectHTML, project) {
    let taskList = document.createElement('div');
    taskList.className = "detailTaskList";
  
    let taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.placeholder = "Enter your task..."
    taskInput.className = "taskInput";
  
    let addButton = createButton('input', 'button', "Add", '#333');
  
    let cancelButton = createButton('input', 'button', "Cancel", "red");
  
    let taskListElement = document.createElement('ul');
  
    addButton.addEventListener('click', () => {
      createTask(projectHTML, project);
      let oldNameProject = project.nameProject;
      updateProjectListStorage(project, oldNameProject);
    })
  
    cancelButton.addEventListener('click', () => {
      taskInput.value = "";
    })
  
    taskList.appendChild(taskInput);
    taskList.appendChild(addButton);
    taskList.appendChild(cancelButton);
    taskList.appendChild(taskListElement);
    return taskList;
  }
  
  function addMemberList__project(project) {
    let memberList = document.createElement('div');
    memberList.className = 'detailMemberList';
  
    //memeber
    let member__board = document.createElement('div');
    member__board.className = 'memberBoard';
  
  
    // not-member
    let outsider__board = addOutsider(project);
  
    // add button
    let addMemberButton = createButton('input', 'button', 'Add');
  
    addMemberButton.addEventListener('click', () => {
      debugger;
      let userSelected = outsider__board.value;
      if (userSelected) {
        let newMember = addMember(userSelected, member__board, project, memberList);
        member__board.appendChild(newMember);
        project.members.push(userSelected);
        let outSider = memberList.getElementsByTagName('select')[0];
        memberList.removeChild(outSider);
        outsider__board = addOutsider(project);
        memberList.appendChild(outsider__board);
      }
      updateProjectListStorage(project, project.nameProject);
  
    })
  
  
    memberList.appendChild(member__board);
    memberList.appendChild(addMemberButton);
    memberList.appendChild(outsider__board);
    return memberList;
  }
  /////////////////////////////////
  function addDetailBoard__project(projectHTML, project, isExpand = 'none') {
    let detailProject = document.createElement('div');
    detailProject.className = "detailProject";
  
    let detail__TaskList = addTaskList__project(projectHTML, project);
    let detail__MemberList = addMemberList__project(project)
  
    detailProject.appendChild(detail__TaskList);
    detailProject.appendChild(detail__MemberList);
    detailProject.style.display = isExpand;
    return detailProject;
  }
  ////////////////////////////////////////////
  function addProjectItem(projectName, projectStorage = null) {
    //storage
    if (projectStorage == null) projectStorage = new Project(projectName);
  
    // html
    let projectHTML = document.createElement('div');
    projectHTML.className = "project";
  
    let expandButton = createButton('input', "button", "Expand");
    let removeButton = createButton('input', 'button', "Remove", "#AE6F54");
    let nameField = createButton('input', 'text', projectName);
    nameField.className = "nameProject";
    let detailBoard = addDetailBoard__project(projectHTML, projectStorage);
  
    expandButton.addEventListener('click', () => {
      if (expandButton.value == 'Expand') {
        detailBoard.style.display = 'inline-block';
        expandButton.value = "Shrink";
      }
      else {
        detailBoard.style.display = 'none';
        expandButton.value = "Expand";
      }
    })
  
    removeButton.addEventListener('click', () => {
      projectHTML.style.display = 'none';
      projectStorage.isDeleted = true;
      updateProjectListStorage(projectStorage, projectStorage.nameProject)
    })
  
    nameField.addEventListener('change', () => {
      let oldNameProject = projectName;
      projectStorage.nameProject = nameField.value;
      updateProjectListStorage(projectStorage, oldNameProject);
  
    })
  
    projectHTML.appendChild(nameField);
    projectHTML.appendChild(expandButton);
    projectHTML.appendChild(removeButton);
    projectHTML.appendChild(detailBoard);
  
  
    return [projectHTML, projectStorage];
  }
  
  function createProject() {
    let addProject_nameField = document.getElementById("addProject__field");
    let newProjectValue = addProject_nameField.value;
    let newProject = addProjectItem(newProjectValue);
  
    if (newProjectValue) {
      if (!project__isAlreadyExist(newProjectValue)) {
        projectListHTML.appendChild(newProject[0]);
        uploadProjectListStorage(newProject[1]);
      }
      else {
        alert(ProjectERROR.ALREADY__EXISTED);
      }
      addProject_nameField.value = "";
  
    }
  }
  
  function editProject(project, oldNameTask, newTask) {
  }
  
  //------------------------------------------------------------------
  // Task------------------------------------------------------------
  function Task(nameTask = "#", status = false, isDeleted = false) {
    this.nameTask = nameTask;
    this.status = status;
    this.isDeleted = isDeleted;
  }
  
  function addNameField__task(nameTask, status = false) {
    let nameField = document.createElement("input");
    nameField.value = nameTask;
    nameField.style.border = "2px solid #333";
    if (status) nameField.style.textDecoration = "line-through";
    return nameField;
  }
  
  function addCheckBox__task(status = false) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.width = "20px";
    checkbox.style.height = "20px";
    if (status) checkbox.checked = true;
    return checkbox;
  }
  
  function addTask(nameTask, status = false, project) {
    //Storage
    let taskStorage = new Task(nameTask, status, false);
  
    //HTML
    let taskHTML = document.createElement('li');
    taskHTML.className = "task";
    let tasknameField = addNameField__task(nameTask, status);
    let taskCheckbox = addCheckBox__task(status);
    let taskDeleteButton = createButton("input", "button", "Delete", "red");
  
    tasknameField.addEventListener('change', () => {
      let oldNameTask = taskStorage.nameTask;
      taskStorage.nameTask = tasknameField.value;
      project.taskList = project.taskList.filter(task => task.nameTask !== oldNameTask);
      project.taskList.push(taskStorage);
      updateProjectListStorage(project, project.nameProject);
    })
  
    taskCheckbox.addEventListener('click', () => {
      let isfinished = false;
      if (taskCheckbox.checked) {
        isfinished = true;
        tasknameField.style.textDecoration = "line-through";
      }
      else {
        tasknameField.style.textDecoration = "none";
      };
      taskStorage.status = isfinished;
      project.taskList = project.taskList.filter(task => task.nameTask !== taskStorage.nameTask);
      project.taskList.push(taskStorage);
      updateProjectListStorage(project, project.nameProject);
  
    });
  
    taskDeleteButton.addEventListener('click', () => {
      taskHTML.style.display = "none";
      taskStorage.isDeleted = true;
      project.taskList = project.taskList.filter(task => task.nameTask !== taskStorage.nameTask);
      project.taskList.push(taskStorage);
      updateProjectListStorage(project, project.nameProject);
    })
  
    taskHTML.appendChild(taskCheckbox);
    taskHTML.appendChild(tasknameField);
    taskHTML.appendChild(taskDeleteButton);
  
    return [taskHTML, taskStorage];
  }
  
  function createTask(projectHTML, project) {
    let newTaskValue = projectHTML.getElementsByClassName('taskInput')[0];
    let listtaskHTML = projectHTML.getElementsByTagName('ul')[0];
  
    if (newTaskValue.value) {
      if (!task__isAlreadyExist(newTaskValue.value, project.taskList)) {
        let newtask = addTask(newTaskValue.value, false, project);
        // HTML
        listtaskHTML.appendChild(newtask[0]);
  
        // STORAGE
        if (project != null) {
          project.taskList.push(newtask[1]);
        }
      }
      else {
        alert(TaskERROR.ALREADY__EXISTED);
      }
      projectHTML.getElementsByClassName('taskInput')[0].value = '';
  
    }
  }
  
  function updateTask(task, newNameTask, newStatus, newIsDelete) {
    let oldNameTask = task.nameTask;
    task.nameTask = newNameTask;
    task.status = newStatus;
    task.isDeleted = newIsDelete;
  }
  
  //-----------------------------------------------------------------
  // Member---------------------------------------------------------
  
  
  function addOutsider(project) {
    let outsider__board = document.createElement('select');
    outsider__board.className = "outsider__select";
    let dataProjectList = JSON.parse(window.localStorage.getItem('data__projectList'));
    let usernameList = JSON.parse(window.localStorage.getItem('accountList'));
    for (let i = 0; i < usernameList.length; i++) {
      let user = usernameList[i].username;
      let role = usernameList[i].role;
      if (project.members.every(member => member !== user) && role !== 'admin') {
        let userOption = document.createElement('option');
        userOption.className = 'optionUser';
        userOption.text = user;
        outsider__board.appendChild(userOption);
      }
    }
    return outsider__board;
  }
  
  function addMember(memberName, memberBoard, project, memberListHTML, outsider__board) {
    let memberElement = document.createElement('div');
  
    let memberField = document.createElement('input');
    memberField.className = "memberName";
    memberField.type = 'text';
    memberField.disabled = true;
    memberField.value = memberName;
  
    let deleteButton = createButton('input', 'button', 'Delete', "#CE2E54");
    deleteButton.addEventListener('click', () => {
      memberBoard.removeChild(memberElement);
      project.members = project.members.filter(member => member !== memberName);
      let outSider = memberListHTML.getElementsByTagName('select')[0];
      memberListHTML.removeChild(outSider);
      outSider = addOutsider(project);
      memberListHTML.appendChild(outSider);
      updateProjectListStorage(project, project.nameProject);
    })
  
    memberElement.appendChild(memberField);
    memberElement.appendChild(deleteButton);
    return memberElement;
  }
  
  
  //------------------------------------------------------------------
  // Storage---------------------------------------------------------
  
  function uploadProjectListStorage(project) {
    let dataProjectList = JSON.parse(window.localStorage.getItem('data__projectList'));
    if (!Array.isArray(dataProjectList)) {
      dataProjectList = [];
      dataProjectList.push(project);
    }
    else {
      dataProjectList.push(project);
    }
    window.localStorage.setItem('data__projectList', JSON.stringify(dataProjectList));
  }
  
  function updateProjectListStorage(project, oldNameProject) {
    let dataProjectList = JSON.parse(window.localStorage.getItem('data__projectList'));
    if (Array.isArray(dataProjectList)) {
      let other__Projects = dataProjectList.filter(project => project.nameProject !== oldNameProject);
      other__Projects.push(project);
      dataProjectList = other__Projects;
    }
  
    window.localStorage.setItem('data__projectList', JSON.stringify(dataProjectList));
  }
  
  function cloneStorage() {
  }
  
  //------------------------------------------------------------------
  // HTML------------------------------------------------------------
  function showProjectHTML() {
    let dataProjectList = JSON.parse(window.localStorage.getItem('data__projectList'));
    // projectListHTML
    if (Array.isArray(dataProjectList)) {
      for (let i = 0; i < dataProjectList.length; i++) {
        let __project = dataProjectList[i];
        if (!__project.isDeleted) {
          let newProject = addProjectItem(__project.nameProject, __project);
          projectListHTML.appendChild(newProject[0]);
          let detailProject = newProject[0].getElementsByClassName('detailProject')[0];
          let detail__task = detailProject.getElementsByClassName('detailTaskList')[0];
          let detail__member = detailProject.getElementsByClassName('detailMemberList')[0];
          
          let detail__task__list = detail__task.getElementsByTagName('ul')[0];
          let detail__member__list = detail__member.getElementsByClassName('memberBoard')[0];
          showTaskHTML(__project,detail__task__list);
          showMemberHTML(__project, detail__member, detail__member__list)
        }
      }
    }
  }
  
  function showTaskHTML(__project, detail__task__list) {
    for (let j = 0; j < __project.taskList.length; j++) {
      let __task = __project.taskList[j];
      if (!__task.isDeleted) {
        let newTask = addTask(__task.nameTask, __task.status, __project);
        detail__task__list.appendChild(newTask[0]);
      }
    }
  }
  
  function showMemberHTML(__project, detail__memeber, detail__member__list){
    for (let i = 0; i < __project.members.length; i++){
      let member = addMember(__project.members[i], detail__member__list, __project, detail__memeber);
      detail__member__list.appendChild(member);
    }
  }
  
  
  