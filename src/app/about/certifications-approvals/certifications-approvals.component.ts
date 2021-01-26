import { Component, OnInit } from '@angular/core';
import{ Title, Meta} from '@angular/platform-browser';




@Component({
  selector: 'app-certifications-approvals',
  templateUrl: './certifications-approvals.component.html',
  styleUrls: ['./certifications-approvals.component.css']
})
export class CertificationsApprovalsComponent implements OnInit {

  title = 'Certifications & Approvals  - Tube Tech Copper & Alloys';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Copper Tubes, Copper Coils, PVC Coated Copper Tubes, Copper Helical Coils, Copper Fittings, Brass Tubes, Cupro Nickel Tubes, Heat Exchanger Tubes, Square Tubes, Bimetallic Tubes'},
      {name: 'description', content: 'Tube Tech is a Customer focused, innovative and value driven company which manufactures all types of Copper'},
      {name: 'robots', content: 'index, follow'}
    ]);

  }


  certifications: {title: string, subtitle: string, content: string, url: string}[] = [

    {title: 'ISO Certify', subtitle: '', content: 'Logo',  url: './assets/images/Certifications-ISO.jpg'},
    {title: 'NSIC Certify', subtitle: '', content: 'Logo',  url: './assets/images/Certifications-NSIC.jpg'},
    {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/Certifications-CE.jpg'},
    
    ];

      approvals: {title: string, subtitle: string, content: string, url: string}[] = [

        {title: 'ISO Certify', subtitle: '', content: 'Logo',  url: './assets/images/Bureau-Veritas.jpg'},
        {title: 'NSIC Certify', subtitle: '', content: 'Logo',  url: './assets/images/DNV.jpg'},
        {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/ICS.jpg'},
        {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/JRS.jpg'},
        {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/SGS.jpg'},
        {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/TUVNord.jpg'},
        {title: 'CE Certify', subtitle: '', content: 'Logo',  url: './assets/images/TUV-SUD.jpg'},

          ];
    


}
