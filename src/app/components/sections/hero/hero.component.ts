import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  public fullText: string = 'Desenvolvedor Full Stack';
  public text: string = '';

  public ngOnInit(): void {
    this.typeWriter();
  }
  
  public typeWriter(): void {
    let i = 0;
    const speed = 40;
    const typing = () => {
      if (i < this.fullText.length) {
        this.text += this.fullText.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    };
    typing();
  }
}
