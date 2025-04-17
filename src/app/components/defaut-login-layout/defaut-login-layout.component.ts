import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaut-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defaut-login-layout.component.html',
  styleUrls: ['./defaut-login-layout.component.scss'] 
})

export class DefautLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';


}
