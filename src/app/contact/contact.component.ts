import { Component, OnInit } from '@angular/core';
import{ Title, Meta} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  title = 'Contact - Tube Tech Copper & Alloys';
  Name:string;
  Mobile:string;
  Email:string;
  Message:string;
  msg: string;
  constructor(private http:HttpClient, private titleService: Title, private metaService: Meta) { }
  
 ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Copper Tubes, Copper Coils, PVC Coated Copper Tubes, Copper Helical Coils, Copper Fittings, Brass Tubes, Cupro Nickel Tubes, Heat Exchanger Tubes, Square Tubes, Bimetallic Tubes'},
      {name: 'description', content: 'Tube Tech is a Customer focused, innovative and value driven company which manufactures all types of Copper'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
  
 submitData(){
    var val={
      Name:this.Name,
     Mobile:this.Mobile,
       Email:this.Email,
       Message:this.Message
     }

     console.log(val);
     /* let url="http://localhost:56287/api/contact";
     this.http.post(url, val).toPromise().then((data:any)=>{
       console.log(val);
       this.msg="Message submitted successfully!";
      
     }) */
   } 

}
