import { Component, OnInit, Input } from '@angular/core';

type Colors = 'primary' | 'secondary' | 'green' | 'red';
type Fill = 'outline' | 'clear';
type Type = 'button' | 'submit' | 'reset';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	@Input() classes: string | undefined;
	@Input() type: Type = 'button';
	@Input() disabled: boolean = false;
	@Input() loading: boolean = false;
	@Input() color: Colors = 'primary';
	@Input() fill: Fill | undefined;
	@Input() expand!: 'block';

	constructor() {}

	ngOnInit(): void {}
}
