import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

class MockElementRef implements ElementRef {
  nativeElement: any; // You can specify the appropriate type for the native element

  constructor() {
    this.nativeElement = {}; // Provide a mock native element
  }
}

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
