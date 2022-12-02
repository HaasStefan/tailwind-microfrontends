import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tailwind-microfrontends-proxy',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProxyComponent {}
