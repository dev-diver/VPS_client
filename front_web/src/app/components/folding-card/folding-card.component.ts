import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folding-card',
  standalone: true,
  imports: [CommonModule, NzCardComponent, NzIconModule, NzGridModule],
  templateUrl: './folding-card.component.html',
  styleUrl: './folding-card.component.less'
})
export class FoldingCardComponent {
  @Input() nzBordered = true
  @Input() title :string = ''
  @Input() defaultFoldState : boolean = false;
  isContentVisible = true;

  ngOnInit() {
    this.isContentVisible = !this.defaultFoldState;
  }

  toggleContentVisibility(): void {
    this.isContentVisible = !this.isContentVisible
  }
}
