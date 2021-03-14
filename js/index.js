"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var employess_controller_1 = require("./employess/employess-controller");
var EmployeeRestServer = /** @class */ (function () {
    function EmployeeRestServer() {
        this.activate();
    }
    EmployeeRestServer.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new employess_controller_1.EmployeesController().router);
        this.app.listen(3000, function () { return console.log("listen on port 3000"); });
    };
    return EmployeeRestServer;
}());
exports.default = EmployeeRestServer;
new EmployeeRestServer();
