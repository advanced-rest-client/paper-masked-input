/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-masked-input.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

declare namespace UiElements {

  /**
   * Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)
   *
   * `<paper-masked-input>` is a single-line password field with Material Design styling and option to unmask the value.
   *
   * ```html
   * <paper-masked-input label="Your password"></paper-masked-input>
   * ```
   *
   * It may include an optional error message.
   * ```html
   * <paper-masked-input label="Your password" error-message="Invalid password!"></paper-masked-input>
   * ```
   *
   * The password input reners an icon button on a suffix position to toggle
   * password visibility.
   *
   * ### Focus
   *
   * To focus a `paper-masked-input`, you can call the native `focus()` method as long as the input has a tab index.
   *
   * ## New in version 2
   *
   * The element does not renders "clear" icon anymore. To produce similar effect
   * ass an item with `slot="suffix"`:
   *
   * ```html
   * <paper-masked-input label="Your password">
   *  <paper-icon-button slot="suffix" onclick="this.parentElement.clear()"></paper-icon-button>
   * </paper-masked-input>
   * ```
   *
   * The element support "prefix" slot to add a content before the input.
   *
   * ```html
   * <paper-masked-input label="xxx-xxx-xxxx">
   *  <span slot="prefix">SSN</span>
   * </paper-masked-input>
   * ```
   *
   * ### Styling
   * See `Polymer.PaperInputContainer` for a list of custom properties used to style this element.
   */
  class PaperMaskedInput extends PolymerElement {
    readonly inputElement: any;

    /**
     * The label for this input.
     */
    label: string|null|undefined;

    /**
     * The value for this input.
     */
    value: string|null|undefined;

    /**
     * Set to true to show the text in the input field.
     */
    visible: boolean|null|undefined;

    /**
     * Default input type if password is disabled.
     */
    type: string|null|undefined;

    /**
     * The error message to display when the input is invalid.
     */
    errorMessage: string|null|undefined;

    /**
     * Returns true if the value is invalid.
     * If `autoValidate` is true, the `invalid` attribute is managed automatically,
     * which can clobber attempts to manage it manually.
     */
    invalid: boolean|null|undefined;

    /**
     * Set this to specify alolowed pattern
     */
    allowedPattern: string|null|undefined;

    /**
     * Name of the validator to use.
     */
    validator: string|null|undefined;

    /**
     * A pattern to validate the `input` with.
     */
    pattern: string|null|undefined;

    /**
     * `<input>`'s autocomplete property
     */
    autocomplete: string|null|undefined;

    /**
     * Set to true to mark the input as required.
     */
    required: boolean|null|undefined;

    /**
     * Binds to `<input>`'s `autofocus` property
     */
    autofocus: boolean|null|undefined;

    /**
     * Binds to `<input>`'s `inputmode` property
     */
    inputmode: string|null|undefined;

    /**
     * The minimum length of the input value.
     */
    minlength: number|null|undefined;

    /**
     * The maximum length of the input value.
     */
    maxlength: number|null|undefined;

    /**
     * Binds to `<input>`'s `name` property
     */
    name: string|null|undefined;

    /**
     * A placeholder string in addition to the label. If this is set, the label will always float.
     */
    placeholder: string|null|undefined;

    /**
     * Binds to `<input>`'s `readonly` property
     */
    readonly: boolean|null|undefined;

    /**
     * Binds to `<input>`'s `size` property
     */
    size: number|null|undefined;

    /**
     * Binds to `<input>`'s `autocapitalize` property
     */
    autocapitalize: string|null|undefined;

    /**
     * Binds to `<input>`'s `autocorrect` property
     */
    autocorrect: string|null|undefined;

    /**
     * Set to true to disable this input.
     */
    disabled: boolean|null|undefined;

    /**
     * Set to true to disable the floating label.
     */
    noLabelFloat: boolean|null|undefined;

    /**
     * Set to true to always float the label.
     */
    alwaysFloatLabel: boolean|null|undefined;

    /**
     * Set to true to auto-validate the input value.
     */
    autoValidate: boolean|null|undefined;
    connectedCallback(): void;

    /**
     * Toggles password visibility.
     */
    toggle(): void;

    /**
     * Computes title for the toggle button.
     *
     * @param visible Current state of the `visible` property
     * @returns Title value for toggle button.
     */
    _computeToggleLabel(visible: Boolean|null): String|null;
    _computeToggleIcon(visible: any): any;
    _computeInputType(visible: any): any;

    /**
     * Clears the value of the field.
     */
    clear(): void;

    /**
     * Validated thre input.
     *
     * @returns True if the control is valid.
     */
    validate(): Boolean|null;
    _disabledChanged(state: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "paper-masked-input": UiElements.PaperMaskedInput;
  }
}
