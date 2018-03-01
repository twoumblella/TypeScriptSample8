"use strict";
var App;
(function (App) {
    var Talk = /** @class */ (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            var h = now.getHours();
            if (h < 5) {
                return "Welcome back!";
            }
            else {
                return "Welcome!";
            }
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App || (App = {}));
//# sourceMappingURL=app-talk.js.map