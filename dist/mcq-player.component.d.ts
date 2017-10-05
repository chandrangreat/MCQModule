import { OnInit, EventEmitter } from '@angular/core';
export declare class AssessmentItem {
    private _value;
    private _id;
    constructor(defaultValue?: any);
    value: String;
    readonly id: string;
}
export declare class MultipleChoiceQuestion {
    problemStatement: AssessmentItem;
    answer: String;
    instructions: String;
    options: Array<any>;
    constructor();
}
export declare class McqPlayerComponent implements OnInit {
    onQuestionPublished: EventEmitter<{}>;
    onQuestionDrafted: EventEmitter<{}>;
    mcq: MultipleChoiceQuestion;
    constructor();
    ngOnInit(): void;
    onAnswerSelection(option: any): void;
    addOption(): void;
    publishQuestion(): void;
    saveAsDraft(): void;
}
