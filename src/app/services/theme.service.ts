import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDark: boolean = false;
  constructor() { 
    this.loadTheme();
  }

  public toggleTheme(): void {
    const html = document.documentElement;
    this.isDark = !this.isDark;
    html.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  public loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme === 'dark';
    document.documentElement.classList.toggle('dark', this.isDark);
  }
}
