import { Component, EventEmitter, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';
var AssessmentItem = /** @class */ (function () {
    function AssessmentItem(defaultValue) {
        this._id = UUID.UUID();
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
export { AssessmentItem };
var MultipleChoiceQuestion = /** @class */ (function () {
    function MultipleChoiceQuestion() {
        this.options = [];
        this.problemStatement = new AssessmentItem();
    }
    return MultipleChoiceQuestion;
}());
export { MultipleChoiceQuestion };
var McqPlayerComponent = /** @class */ (function () {
    function McqPlayerComponent() {
        this.onQuestionPublished = new EventEmitter();
        this.onQuestionDrafted = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'app-mcq-player',
                    templateUrl: './mcq-player.component.html',
                    styleUrls: ['./mcq-player.component.css']
                },] },
    ];
    /** @nocollapse */
    McqPlayerComponent.ctorParameters = function () { return []; };
    McqPlayerComponent.propDecorators = {
        'onQuestionPublished': [{ type: Output },],
        'onQuestionDrafted': [{ type: Output },],
    };
    return McqPlayerComponent;
}());
export { McqPlayerComponent };
//# sourceMappingURL=mcq-player.component.js.map