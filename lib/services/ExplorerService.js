class ExplorerService{
    static filterByMission(explorers, mission){
        if(Array.isArray(explorers) && explorers.length > 0){
            if (explorers.filter((explorer) => explorer.mission == mission).length > 0)
                return explorers.filter((explorer) => explorer.mission == mission);
            else
                return "No hay exploradores en la mision "+mission;
        }
        else
            return "No hay exploradores";
    }

    static getAmountOfExplorersByMission(explorers, mission){
        if(!Array.isArray(this.filterByMission(explorers,mission)))
            return 0;
        else
            return this.filterByMission(explorers,mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        if(!Array.isArray(this.filterByMission(explorers, mission)))
            return this.filterByMission(explorers, mission);
        else
            return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;