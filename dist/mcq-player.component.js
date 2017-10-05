"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_uuid_1 = require("angular2-uuid");
var AssessmentItem = /** @class */ (function () {
    function AssessmentItem(defaultValue) {
        this._id = angular2_uuid_1.UUID.UUID();
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
exports.AssessmentItem = AssessmentItem;
var MultipleChoiceQuestion = /** @class */ (function () {
    function MultipleChoiceQuestion() {
        this.options = [];
        this.problemStatement = new AssessmentItem();
    }
    return MultipleChoiceQuestion;
}());
exports.MultipleChoiceQuestion = MultipleChoiceQuestion;
var McqPlayerComponent = /** @class */ (function () {
    function McqPlayerComponent() {
        this.onQuestionPublished = new core_1.EventEmitter();
        this.onQuestionDrafted = new core_1.EventEmitter();
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
        { type: core_1.Component, args: [{
                    selector: 'app-mcq-player',
                    templateUrl: './mcq-player.component.html',
                    styleUrls: ['./mcq-player.component.css']
                },] },
    ];
    /** @nocollapse */
    McqPlayerComponent.ctorParameters = function () { return []; };
    McqPlayerComponent.propDecorators = {
        'onQuestionPublished': [{ type: core_1.Output },],
        'onQuestionDrafted': [{ type: core_1.Output },],
    };
    return McqPlayerComponent;
}());
exports.McqPlayerComponent = McqPlayerComponent;
//# sourceMappingURL=mcq-player.component.js.map