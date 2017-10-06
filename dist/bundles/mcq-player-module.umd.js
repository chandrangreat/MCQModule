(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('angular2-uuid'), require('@angular/forms'), require('@angular/platform-browser/animations'), require('@angular/material')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'angular2-uuid', '@angular/forms', '@angular/platform-browser/animations', '@angular/material'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['mcq-player'] = {}),global.ng.core,global.common,global.angular2Uuid,global.forms,global.animations,global.material));
}(this, (function (exports,core,common,angular2Uuid,forms,animations,material) { 'use strict';

var AssessmentItem = /** @class */ (function () {
    function AssessmentItem(defaultValue) {
        this._id = angular2Uuid.UUID.UUID();
        if (defaultValue) {
            this._value = defaultValue;
        }
    }
    Object.defineProperty(AssessmentItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssessmentItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return AssessmentItem;
}());
var MultipleChoiceQuestion = /** @class */ (function () {
    function MultipleChoiceQuestion() {
        this.options = [];
        this.problemStatement = new AssessmentItem();
    }
    return MultipleChoiceQuestion;
}());
var McqPlayerComponent = /** @class */ (function () {
    function McqPlayerComponent() {
        this.onQuestionPublished = new core.EventEmitter();
        this.onQuestionDrafted = new core.EventEmitter();
        this.mcq = new MultipleChoiceQuestion();
    }
    McqPlayerComponent.prototype.ngOnInit = function () {
    };
    McqPlayerComponent.prototype.onAnswerSelection = function (option) {
        this.mcq.answer = option;
    };
    McqPlayerComponent.prototype.addOption = function () {
        var option = new AssessmentItem('Option');
        this.mcq.options.push(option);
    };
    McqPlayerComponent.prototype.publishQuestion = function () {
        console.log(this.mcq);
        this.onQuestionPublished.emit(this.mcq);
    };
    McqPlayerComponent.prototype.saveAsDraft = function () {
        console.log(this.mcq);
        this.onQuestionDrafted.emit(this.mcq);
    };
    McqPlayerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-mcq-player',
                    templateUrl: './mcq-player.component.html',
                    styleUrls: ['./mcq-player.component.css']
                },] },
    ];
    /** @nocollapse */
    McqPlayerComponent.ctorParameters = function () { return []; };
    McqPlayerComponent.propDecorators = {
        'onQuestionPublished': [{ type: core.Output },],
        'onQuestionDrafted': [{ type: core.Output },],
    };
    return McqPlayerComponent;
}());

var McqPlayerModule = /** @class */ (function () {
    function McqPlayerModule() {
    }
    McqPlayerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        animations.BrowserAnimationsModule,
                        forms.FormsModule,
                        material.MdButtonModule,
                        material.MdCardModule,
                        material.MdInputModule,
                        material.MdRadioModule
                    ],
                    declarations: [McqPlayerComponent],
                    exports: [McqPlayerComponent]
                },] },
    ];
    /** @nocollapse */
    McqPlayerModule.ctorParameters = function () { return []; };
    return McqPlayerModule;
}());

exports.McqPlayerModule = McqPlayerModule;
exports.McqPlayerComponent = McqPlayerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
