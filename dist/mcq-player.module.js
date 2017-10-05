"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var mcq_player_component_1 = require("./mcq-player.component");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var McqPlayerModule = /** @class */ (function () {
    function McqPlayerModule() {
    }
    McqPlayerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        animations_1.BrowserAnimationsModule,
                        forms_1.FormsModule,
                        material_1.MdButtonModule,
                        material_1.MdCardModule,
                        material_1.MdInputModule,
                        material_1.MdRadioModule
                    ],
                    declarations: [mcq_player_component_1.McqPlayerComponent],
                    exports: [mcq_player_component_1.McqPlayerComponent]
                },] },
    ];
    /** @nocollapse */
    McqPlayerModule.ctorParameters = function () { return []; };
    return McqPlayerModule;
}());
exports.McqPlayerModule = McqPlayerModule;
//# sourceMappingURL=mcq-player.module.js.map