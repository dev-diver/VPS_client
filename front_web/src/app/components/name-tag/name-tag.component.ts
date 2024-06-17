import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  standalone: true,
  imports: [],
  templateUrl: './name-tag.component.html',
  styleUrl: './name-tag.component.less'
})
export class NameTagComponent {
  @Input() name: string = ''
}
