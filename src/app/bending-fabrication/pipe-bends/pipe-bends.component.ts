import { Component, OnInit } from '@angular/core';
import{ Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-pipe-bends',
  templateUrl: './pipe-bends.component.html',
  styleUrls: ['./pipe-bends.component.css']
})
export class PipeBendsComponent implements OnInit {

  title = 'Pipe Bends - Bending & Fabrication - Tube Tech Copper & Alloys';

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
