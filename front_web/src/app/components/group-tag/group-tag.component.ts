import { Component, Input } from '@angular/core';
import { Group } from '../../interfaces/group';

@Component({
  selector: 'app-group-tag',
  standalone: true,
  imports: [],
  templateUrl: './group-tag.component.html',
  styleUrl: './group-tag.component.less'
})
export class GroupTagComponent {
  @Input() group: Group = { color : '', name: '', member:[]}
}
