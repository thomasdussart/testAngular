import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div
      class="box"
      nz-resizable
      [nzMaxWidth]="600"
      [nzMinWidth]="80"
      [nzMaxHeight]="200"
      [nzMinHeight]="80"
      [nzDisabled]="disabled"
      [style.height.px]="height"
      [style.width.px]="width"
      (nzResize)="onResize($event)"
    >
      <nz-resize-handles></nz-resize-handles>
      content
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 200px;
      }
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eee;
        border: 1px solid #ddd;
      }
    `,
  ],
})
export class AppComponent {
  isCollapsed = false;
}
