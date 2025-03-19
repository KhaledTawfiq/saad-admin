import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name: string | undefined = '';
  @Input() width: string | undefined = '24';
  @Input() height: string | undefined = '24';
  @Input() fill: string | undefined = '';
  @Input() stroke: string | undefined = '';
  @Input() color: string | undefined = '';
  @Input() vertical_align: string = 'middle';
}
