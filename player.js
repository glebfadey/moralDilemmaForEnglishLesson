window.ScenarioPlayerSolid = class {
    constructor() {
        console.log("Scenario Player loaded");
        this.render();
    }
    render() {
        document.body.innerHTML += '<p style="color:white;">System Ready</p>';
    }
};