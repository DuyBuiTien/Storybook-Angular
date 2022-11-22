
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Dropdown } from '../model/dropdown.model';

@Component({
  selector: 'app-dropdown',
  template: `
  <div class="list-item {{ task?.state }}">
  <label
    [attr.aria-label]="'archiveTask-' + task.id"
    for="checked-{{ task?.id }}"
    class="checkbox"
  >
    <input
      type="checkbox"
      disabled="true"
      [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
      name="checked-{{ task?.id }}"
      id="checked-{{ task?.id }}"
    />
    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
  </label>
  <label
    [attr.aria-label]="task.title + ''"
    for="title-{{ task?.id }}"
    class="title"
  >
    <input
      type="text"
      [value]="task.title"
      readonly="true"
      id="title-{{ task?.id }}"
      name="title-{{ task?.id }}"
      placeholder="Input title"
    />
  </label>
  <button
    *ngIf="task?.state !== 'TASK_ARCHIVED'"
    class="pin-button"
    [attr.aria-label]="'pinTask-' + task.id"
    (click)="onPin(task.id)"
  >
    <span class="icon-star"></span>
  </button>
</div>
  `,
  styleUrls: ['./dropdown.css']
})
export class DropdownComponent {
  @Input() task: Dropdown;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}