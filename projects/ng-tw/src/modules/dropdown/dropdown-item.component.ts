import { FocusableOption } from '@angular/cdk/a11y';
import { Component, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

/**
 * IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

@Component({
    selector: 'tw-dropdown-item, [tw-dropdown-item]',
    templateUrl: './dropdown-item.component.html',
    styleUrls: ['./dropdown-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id',
        '[attr.tabindex]': '_getTabIndex()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.disabled]': 'disabled || null',
        '[attr.role]': 'menuitem',
        '[class]': 'itemClass + " " + (selected === true ? activeClass : inactiveClass)',
    },
})
export class DropdownItemComponent implements FocusableOption {
    @Input() public disabled: boolean = false;
    @Input() public id: string = `tw-dropdown-item-${_uniqueIdCounter++}`;

    public active: boolean = false;
    public selected: boolean = false;

    public itemClass: string = 'w-full block px-4 py-2 text-sm text-gray-700 text-left focus:bg-gray-100 focus:text-gray-900';
    public activeClass: string = ''; //'bg-gray-100 text-gray-900';
    public inactiveClass: string = ''; //'text-gray-700';

    constructor(private readonly element: ElementRef<HTMLElement>) {}

    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string {
        return this.element.nativeElement.textContent ? this.element.nativeElement.textContent : '';
    }

    /** Used to set the `tabindex`. */
    _getTabIndex(): string {
        return this.disabled ? '-1' : '0';
    }

    focus() {
        this.element.nativeElement.focus();
    }
}
