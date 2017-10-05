import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';

export class AssessmentItem {
  private _value: String;
  private _id = UUID.UUID();

  constructor(defaultValue?) {
    if (defaultValue) {
      this._value = defaultValue;
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get id() {
    return this._id;
  }
}

export class MultipleChoiceQuestion {

  public problemStatement: AssessmentItem;
  public answer: String;
  public instructions: String;
  public options: Array<any>;

  constructor() {
    this.options = [];
    this.problemStatement = new AssessmentItem();
  }

}

@Component({
  selector: 'app-mcq-player',
  templateUrl: './mcq-player.component.html',
  styleUrls: ['./mcq-player.component.css']
})

export class McqPlayerComponent implements OnInit {

  @Output() onQuestionPublished = new EventEmitter();
  @Output() onQuestionDrafted = new EventEmitter();

  public mcq: MultipleChoiceQuestion;

  constructor() {
    this.mcq = new MultipleChoiceQuestion();
  }

  ngOnInit() {

  }

  onAnswerSelection(option) {
    this.mcq.answer = option;
  }

  addOption() {
    const option = new AssessmentItem('Option');
    this.mcq.options.push(option);
  }

  publishQuestion() {
    console.log(this.mcq);
    this.onQuestionPublished.emit(this.mcq);
  }

  saveAsDraft() {
    console.log(this.mcq);
    this.onQuestionDrafted.emit(this.mcq);
  }
}
