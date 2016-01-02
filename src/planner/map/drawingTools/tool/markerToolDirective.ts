namespace planner.tools.tool {
    class MarkerToolDirective implements angular.IDirective {
        public template = `
            <style>
                .marker-tool {
                    height: 50px;
                    width: 50px;
                    border-bottom: 1px solid black;
                    padding: 5px;
                    box-sizing: border-box;
                }
                .marker-tool img{
                    height: 40px;
                    width: 40px;
                }
            </style>
            <div class='marker-tool'>
                <img id='draggable' src='/resources/images/location.svg'>
            </div>
        `;
        public link = () => {
            let draggable: JQuery = $('#draggable');
            draggable.draggable({helper: 'clone',
                stop: function(event: JQueryEventObject) {
                        let point = new google.maps.Point(event.pageX, event.pageY);
                        let position: google.maps.LatLng = maps.Main.getOverlay().getProjection().fromContainerPixelToLatLng(point);
                        let marker = maps.Main.addMarker(position);
                    }
                });
        };
    }

    angular.module('planner').directive('markerTool', () => new MarkerToolDirective());
}
