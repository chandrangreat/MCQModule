import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqPlayerComponent } from './mcq-player.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule, MdRadioModule } from '@angular/material';
var McqPlayerModule = /** @class */ (function () {
    function McqPlayerModule() {
    }
    McqPlayerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule,
                        FormsModule,
                        MdButtonModule,
                        MdCardModule,
                        MdInputModule,
                        MdRadioModule
                    ],
                    declarations: [McqPlayerComponent],
                    exports: [McqPlayerComponent]
                },] },
    ];
    /** @nocollapse */
    McqPlayerModule.ctorParameters = function () { return []; };
    return McqPlayerModule;
}());
export { McqPlayerModule };
//# sourceMappingURL=mcq-player.module.js.map