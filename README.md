[![Build Status](https://travis-ci.org/advanced-rest-client/paper-masked-input.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/paper-masked-input)

## UiElements.PaperMaskedInput component
Tag: `<paper-masked-input>`

### Installation
Using bower:
```
bower install --save advanced-rest-client/paper-masked-input
```

Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-masked-input>` is a single-line password field with Material Design styling and option to unmask the value.

```html
<paper-masked-input label="Your password"></paper-masked-input>
```

It may include an optional error message.
```html
<paper-masked-input label="Your password" error-message="Invalid password!"></paper-masked-input>
```

The password input will rener two additional icon buttons: clear and visibility toggle.
When the user toggle visibility it will change to regular text field and back.

### Focus

To focus a `paper-masked-input`, you can call the native `focus()` method as long as the input has a tab index.

### Styling
See `Polymer.PaperInputContainer` for a list of custom properties used to style this element.

## API
### Component properties (attributes)

#### label
- Type: `string`
The label for this input.

#### value
- Type: `string`
The value for this input.

#### visible
- Type: `boolean`
- Default: `false`
Set to true to show the text in the input field.

#### type
- Type: `string`
- Default: `"text"`
Default input type if password is disabled.

#### errorMessage
- Type: `string`
The error message to display when the input is invalid.

#### invalid
- Type: `boolean`
Returns true if the value is invalid.
If `autoValidate` is true, the `invalid` attribute is managed automatically,
which can clobber attempts to manage it manually.

#### allowedPattern
- Type: `string`
Set this to specify alolowed pattern

#### validator
- Type: `string`
Name of the validator to use.

#### pattern
- Type: `string`
A pattern to validate the `input` with.

#### autocomplete
- Type: `string`
- Default: `"off"`
`<input>`'s autocomplete property

#### required
- Type: `boolean`
- Default: `false`
Set to true to mark the input as required.

#### autofocus
- Type: `boolean`
Binds to `<input>`'s `autofocus` property

#### inputmode
- Type: `string`
Binds to `<input>`'s `inputmode` property

#### minlength
- Type: `number`
The minimum length of the input value.

#### maxlength
- Type: `number`
The maximum length of the input value.

#### name
- Type: `string`
Binds to `<input>`'s `name` property

#### placeholder
- Type: `string`
- Default: `""`
A placeholder string in addition to the label. If this is set, the label will always float.

#### readonly
- Type: `boolean`
- Default: `false`
Binds to `<input>`'s `readonly` property

#### size
- Type: `number`
Binds to `<input>`'s `size` property

#### autocapitalize
- Type: `string`
- Default: `"none"`
Binds to `<input>`'s `autocapitalize` property

#### autocorrect
- Type: `string`
- Default: `"off"`
Binds to `<input>`'s `autocorrect` property

#### disabled
- Type: `boolean`
- Default: `false`
Set to true to disable this input.

#### noLabelFloat
- Type: `boolean`
- Default: `false`
Set to true to disable the floating label.

#### alwaysFloatLabel
- Type: `boolean`
- Default: `false`
Set to true to always float the label.

#### autoValidate
- Type: `boolean`
- Default: `false`
Set to true to auto-validate the input value.


### Component methods

#### connectedCallback
- Return type: `undefined`

#### toggle
- Return type: `undefined`
Toggles password visibility.
#### clear
- Return type: `undefined`
Clears the value of the field.
#### validate
- Return type: `undefined`


