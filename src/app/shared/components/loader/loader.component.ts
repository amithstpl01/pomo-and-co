import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
	@Input() isLoading: boolean | undefined;
	constructor() {}

	ngOnInit(): void {}
}
