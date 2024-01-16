import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
// export class VcLogsComponent implements OnInit, OnChanges {
export class VcLogsComponent implements OnInit {
  @Input()
  get vName(): any {
    return this._vName;
  }
  set vName(value: any) {
    const currValue = value;
    if (!this._vName) {
      this.logs.push(`Initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`Version changed to ${currValue.trim()}`);
    }
    this._vName = value;
  }
  private _vName: any;
  logs: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  /*
  @Input() vName: any;
  logs: string[] = [];
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes['vName'].currentValue;
    if (changes['vName'].isFirstChange()) {
      this.logs.push(`Initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`Version changed to ${currValue.trim()}`);
    }
  }
  */
}
