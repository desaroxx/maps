namespace planner.tools {
    class DrawingToolsDirective implements angular.IDirective {
        public template = `
            <style>
                .drawing-tools {
                    position: fixed;
                    top: 50px;
                    left: 10px;
                    height: 200px;
                    width: 50px;
                    border: 1px solid black;
                    background-color: white;
                	z-index: 1000;
                }
            </style>
            <div class="drawing-tools">
                <marker-tool></marker-tool>
            </div>
        `;
    }

    angular.module("planner").directive("drawingTools", () => new DrawingToolsDirective());
}
