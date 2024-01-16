import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  originalHTML = '';
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['highlightText']?.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes['highlightText'];
    if (currentValue) {
      const regex = new RegExp(currentValue, 'gi');
      this.el.nativeElement.innerHTML = this.originalHTML.replace(
        regex,
        `<span style="background-color:${this.highlightColor}">${currentValue}</span>`,
      );
    } else {
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
    console.log(currentValue);
  }
}
