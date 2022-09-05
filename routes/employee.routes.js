const express = require("express");
const router = express.Router();

const employeePostController = require("../controller/employee/employeePostController");
const employeeGetContrller = require("../controller/employee/employeeGetController");
const employeeGetByIdController = require("../controller/employee/employeeGetByIdController");
const employeePutController = require("../controller/employee/employeePutController");
const employeeDeleteController = require("../controller/employee/employeeDeleteController");

const { postEmployee } = employeePostController;
const { getallEmployees } = employeeGetContrller;
const { getallEmployeesById } = employeeGetByIdController;
const { putEmployee } = employeePutController;
const { deleteEmployeeById } = employeeDeleteController;

router.post("/post/employee", postEmployee);
router.get("/get/employee", getallEmployees);
router.get("/getSpecificId/:empId", getallEmployeesById);
router.put("/update/:empId", putEmployee);
router.delete("/delete/:empId", deleteEmployeeById);

module.exports = router;
