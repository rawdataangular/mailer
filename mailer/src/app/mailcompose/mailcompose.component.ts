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
var emailAddress:String=this.email_address.nativeElement.value
var emailSubject:String=this.email_subject.nativeElement.value
var emailMessage:String=this.email_message.nativeElement.value



   
    if(emailSubject==null||emailSubject===" "||emailSubject==""){
      emailSubject="Wishes"
    }
    if(emailMessage==null||emailMessage===" "||emailMessage==""){
      emailMessage="Good wishes from team RawData"
    }
  
    if(emailSubject==null||emailSubject===" "||emailSubject==""){
     
    }else{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "indu@rawdatatech.com",
        Password : "6A22260680F50D0E36C024E77F11A5B8EFC2",
        To : emailAddress,
        From : "indu@rawdatatech.com",
        Subject : emailSubject,
        Body :  emailMessage
    }).then(
      message => alert(message)
    )

    }
      
      
  }

}
