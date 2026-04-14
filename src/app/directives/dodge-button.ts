import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';

@Directive({
  selector: '[dodgeButton]',
  exportAs: 'dodgeButton',
})
export class DodgeButtonDirective {
  readonly dodgesAllowed = input<number>(4);

  private readonly el = inject(ElementRef);
  readonly dodgeCount = signal(0);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.dodgeCount() >= this.dodgesAllowed()) return;

    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 200;

    this.el.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    this.el.nativeElement.style.transition = 'transform 0.25s cubic-bezier(0.68,-0.55,0.27,1.55)';
    this.dodgeCount.update(c => c + 1);
  }
}