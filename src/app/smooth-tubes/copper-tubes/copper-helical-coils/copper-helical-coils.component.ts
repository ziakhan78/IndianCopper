import { Component, OnInit } from '@angular/core';
import{ Title, Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-copper-helical-coils',
  templateUrl: './copper-helical-coils.component.html',
  styleUrls: ['./copper-helical-coils.component.css']
})
export class CopperHelicalCoilsComponent implements OnInit {


  title = 'Copper Helical Coils - Copper Tubes - Smooth Tubes | Tube Tech Copper & Alloys';

  constructor(private titleService: Title, private metaService: Meta) { }

 ngOnInit(): void {

    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Copper Tubes, Copper Coils, PVC Coated Copper Tubes, Copper Helical Coils, Copper Fittings, Brass Tubes, Cupro Nickel Tubes, Heat Exchanger Tubes, Square Tubes, Bimetallic Tubes'},
      {name: 'description', content: 'Tube Tech is a Customer focused, innovative and value driven company which manufactures all types of Copper'},
      {name: 'robots', content: 'index, follow'}
    ]);

  }


}
