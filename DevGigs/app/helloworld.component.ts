import { Component } from '@angular/core'

@Component({
    selector: 'hello', // <-- das ist der Tag '<hello></hello>' der in der Seite gesucht und mit dem Template ersetzt wird
    template: '<strong>{{getMessage()}}</strong>' // <-- das ist was aus <hello>...</hello> gemacht wird, wenn der Tag "<hello>" gefunden wird
})
export class HelloWorldComponent {
    getMessage(): string {
        return "My First Message. Hello!";
    }
}