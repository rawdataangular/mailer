import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { empty } from 'rxjs';
declare const Email: any;

@Component({
  selector: 'app-mailcompose',
  templateUrl: './mailcompose.component.html',
  styleUrls: ['./mailcompose.component.scss']
})
export class MailComposeComponent implements OnInit {

  @ViewChild('email_address',{static: true}) email_address: ElementRef;
  @ViewChild('email_subject',{static: true}) email_subject: ElementRef;
  @ViewChild('email_message',{static: true}) email_message: ElementRef;

  
  Email: any
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    if(this.email_message.nativeElement.value===empty){
      this.email_message.nativeElement.value="Good wishes from team RawData"
    }
    if(this.email_subject.nativeElement.value===empty){
      this.email_subject.nativeElement.value="Wishes"
    }
 
      
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "indu@rawdatatech.com",
        Password : "6A22260680F50D0E36C024E77F11A5B8EFC2",
        To : "binush@rawdatatech.com",
        From : "indu@rawdatatech.com",
        Subject : "this is subject",
        Body : "this is message"
    }).then(
      message => alert(message)
    )
    
  }

}
