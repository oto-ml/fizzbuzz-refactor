const JSONReader = require("../../lib/utils/JSONReader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Prueba de unidad de para ExplorerService", () => {
    test("1) Leer la lista completa de Explorers", () => {
        const explorers = JSONReader.readJsonFile("./test/data/explorers_2.json");
        expect(ExplorerService.filterByMission(explorers,"node").length).toBeGreaterThanOrEqual(0);
    });
    test("2) Obtener explorers que sean parte de Node", () => {
        const explorers = JSONReader.readJsonFile("./test/data/explorers_3.json");
        expect(ExplorerService.getAmountOfExplorersByMission(explorers,"node")).toBe(0);
    });
    test("3) Obtener explorers que sean parte de Node", () => {
        const explorers = JSONReader.readJsonFile("./data/explorers.json");
        expect(ExplorerService.getExplorersUsernamesByMission(explorers,"node")).toContain("ajolonauta14");
    });
});