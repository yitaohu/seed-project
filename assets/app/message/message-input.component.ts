import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { MessageService } from './message.service';
import {Message} from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    
})

export class MessageInputComponent {
    constructor(private messageService: MessageService){};
    
    onSubmit(form: NgForm) {
        
        const message = new Message(form.value.content, "yitao");
        this.messageService.addMessage(message);
        form.resetForm();
    }
}