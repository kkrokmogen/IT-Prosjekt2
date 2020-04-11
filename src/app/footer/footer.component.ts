import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  name = 'Optipharma AS';
  adress = 'Hestehagen 2, 1448 Drøbak';
  tlf = '997 41 300 / 997 41 301';

  copyright = 'Kopibeskyttet @ 2020 iht. Åndsverkloven. Alt innhold tilhører Optipharma AS og kan ikke kopieres eller benyttes i noen sammenhenger uten eksplisitt samtykke fra rettighetshaveren.';

}
