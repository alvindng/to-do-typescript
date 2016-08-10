var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
<<<<<<< HEAD
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
=======
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
>>>>>>> b72a4cbc3bcbcfda8c8b9d00a514d394e25f946a
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
<<<<<<< HEAD
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
=======
    function HomeTask() {
        _super.apply(this, arguments);
>>>>>>> b72a4cbc3bcbcfda8c8b9d00a514d394e25f946a
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
<<<<<<< HEAD
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
=======
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
>>>>>>> b72a4cbc3bcbcfda8c8b9d00a514d394e25f946a
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
<<<<<<< HEAD
var diane = {
    name: "Diane D",
    email: "diane@epicodus.com"
};
var thor = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
};
var loki = {
    name: "God of mischief",
    email: "loki@geocities.com"
};
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low", diane));
=======
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
>>>>>>> b72a4cbc3bcbcfda8c8b9d00a514d394e25f946a
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();
tasks.push(new HobbyTask("Practice oragami."));
tasks.push(new HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);
<<<<<<< HEAD
tasks.push(new WorkTask(today, "Update website.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));
=======
tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));
>>>>>>> b72a4cbc3bcbcfda8c8b9d00a514d394e25f946a
console.log(tasks);
