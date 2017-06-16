import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../service/api.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  initalQues: string = 'How can I help you today?';	
  ques: string;	
  resp;
  errorMessage: any;
  userMessage: string;
  botMessage: string;
  BodyInitt
  chats = [];
  fixedChatInput: boolean = false;
  showQuestion: boolean = false;
  userName: string;
  password: string;
  showLogin: boolean = false;
  fulfillmentArray = [];
  isClassVisible: boolean = false;

  constructor(private apiService: ApiService) { }

  sendInput(userInput: NgForm){
  	this.showQuestion = true;
  	this.ques = userInput.value.ques;
  	this.apiService.get(this.ques).subscribe(
        response => {
          this.resp = response.result.resolvedQuery;
          //console.log(this.resp);
          this.userMessage = response.result.resolvedQuery;
          this.botMessage = response.result.fulfillment.speech;
          this.fulfillmentArray = response.result.fulfillment.messages;

          if(this.botMessage == ""){
            this.botMessage = 'Sorry, there has been a break in our connection. I will try to re-connect.';
          }

          const chatObject = {
          	user: this.userMessage,
          	bot: this.botMessage
          }
          const newMessages = chatObject;
          const flag = _.map(this.fulfillmentArray, function(message){
          	return message.type == 4;     
          })

          const arrLength = flag.length;
          if(flag.indexOf(true) > -1){
          	this.showLogin = true;
          }
          this.chats.push(newMessages);
          this.ques = '';
          this.showQuestion = false;
        }, error => this.errorMessage = <any>error);
  	//console.log(userInput.value.ques);
  	this.fixedChatInput = true;
  	userInput.resetForm();
  }

  sendInputFooter(userInputFooter: NgForm){
  	this.showQuestion = true;
  	this.ques = userInputFooter.value.ques;
  	this.apiService.get(this.ques).subscribe(
        response => {
          this.resp = response.result.resolvedQuery;
          //console.log(this.resp);
          this.userMessage = response.result.resolvedQuery;
          this.botMessage = response.result.fulfillment.speech;
          this.fulfillmentArray = response.result.fulfillment.messages;
          if(this.botMessage == ""){
            this.botMessage = 'Sorry, there has been a break in our connection. I will try to re-connect.';
          }
          const chatObject = {
          	user: this.userMessage,
          	bot: this.botMessage
          }
          const newMessages = chatObject;
          const flag = _.map(this.fulfillmentArray, function(message){
          	return message.type == 4;     
          })

          const arrLength = flag.length;
       
          if(flag.indexOf(true) > -1){
          	this.showLogin = true;
          }

          this.chats.push(newMessages);
          this.ques = '';
          this.showQuestion = false;
          if(this.chats.length > 2) {
		    this.isClassVisible = true;
		  }
        }, error => this.errorMessage = <any>error);
  	//console.log(userInput.value.ques);
  	userInputFooter.resetForm();
  }

  userLogin(user: NgForm){
  	this.userName = user.value.username;
  	this.password = user.value.pass;
 	this.showLogin = false;
  }

  getStyle() {
  }

  ngOnInit() {
  	this.scrollToBottom();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
