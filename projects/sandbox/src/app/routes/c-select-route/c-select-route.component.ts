import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-c-select-route',
    templateUrl: './c-select-route.component.html',
    styleUrls: ['./c-select-route.component.scss'],
})
export class CSelectRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
        last: null,
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwSelectModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwSelectModule],
        });
        \`\`\`
    `;

    public options: any[] = [
        { label: 'One', value: 'value-1' },
        { label: 'Two', value: 'value-2' },
        { label: 'Three', value: 'value-3' },
        { label: 'Four', value: 'value-4' },
        { label: 'Five', value: 'value-5' },
        { label: 'Six', value: 'value-6' },
        { label: 'Seven', value: 'value-7' },
        { label: 'Eight', value: 'value-8' },
        { label: 'Nine', value: 'value-9' },
        { label: 'Ten', value: 'value-10' },
        { label: 'Eleven', value: 'value-11' },
        { label: 'Twelve', value: 'value-12' },
        { label: 'Thirteen', value: 'value-13' },
        { label: 'Fourteen', value: 'value-14' },
        { label: 'Fifteen', value: 'value-15' },
        { label: 'Sixteen', value: 'value-16' },
        { label: 'Seventeen', value: 'value-17' },
        { label: 'Eighteen', value: 'value-18' },
        { label: 'Nineteen', value: 'value-19' },
        { label: 'Twenty', value: 'value-20' },
    ];

    public selectControl: FormControl = new FormControl({ value: 'value-1', disabled: false });
    public selectCompareWithControl: FormControl = new FormControl({ value: null, disabled: false });
    public selectCompareWithInitialValueControl: FormControl = new FormControl({ value: null, disabled: false });

    constructor() {}

    ngOnInit(): void {}

    compareWith(option: any, value: any): boolean {
        return option?.value && value?.value ? option.value === value.value : option === value;
    }
}
