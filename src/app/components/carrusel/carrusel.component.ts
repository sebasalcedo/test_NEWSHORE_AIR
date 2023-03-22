import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {


  dataImg = [

    {
      description:'image extraida de  unsplash ',
      url :'../../../assets/img/chen-mizrach-jL6PTWI7h18-unsplash.jpg'
    },
    {
      description:'image extraida de  unsplash ',
      url :'../../../assets/img/dahee-son-tMffGE7u1bI-unsplash.jpg'
    },
    {
      description:'image extraida de  unsplash ',
      url :'../../../assets/img/tron-le-JsuBKjHGDMM-unsplash.jpg'
    }


]

}
