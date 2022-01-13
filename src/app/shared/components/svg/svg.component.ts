import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: '[appSvg]',
	templateUrl: './svg.component.html',
	styleUrls: ['./svg.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent implements OnInit {
	@Input() name: string | undefined;
	@Input() iconGroup: string | undefined;

	constructor() {}

	ngOnInit() {}

	get filePath(): string {
		// return `assets/images/svgs/icons/${
		// 	this.iconGroup ? this.iconGroup : this.name
		// }.svg#${this.name}`;

		return `assets/images/svgs/svg-definitions.svg#${this.name}`;
	}
}
