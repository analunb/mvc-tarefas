var express = require("express");
var router = express.Router();

const tarefasController = require("../controllers/tarefasController");

router.get("/", tarefasController.listar);

router.get("/nova-tarefa", tarefasController.novaTarefa);

router.post("/manter-tarefa", tarefasController.manterTarefa);

router.get("/editar", tarefasController.editar);

router.get("/excluir", tarefasController.excluir);

router.get("/mostrar-excluidas", tarefasController.mostrarExcluidas);

router.get("/restaurar", tarefasController.restaurar);

module.exports = router;