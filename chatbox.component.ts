import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
selector: 'app-chatbox',
templateUrl: './chatbox.component.html',
styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

constructor() { }

msgArr = [];
ngOnInit() {
}

send(form : NgForm) {

let msg = form.value.msg;
let date = new Date();
let dateString = `  ${date.getHours()} : ${date.getMinutes()}`;
if(msg && msg !== '') {
this.msgArr.push({msg: msg, time: dateString});
}

form.controls.msg.setValue('');
}

}
