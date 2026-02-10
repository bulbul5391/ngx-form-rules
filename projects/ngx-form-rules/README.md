# ngx-form-rules

<p align="center"><img src="https://bdprescription.com/npm-package/ng-package.png" height="200px" align="center" alt="JS Beautifier"></p>

<p align="center"><a href="#">
    <img alt="Join the chat" src="https://bdprescription.com/npm-package/JoinChat.svg"></a>
    <a href="https://www.linkedin.com/in/bulbulsarker/" target="_blank">
    <img alt="Linkedin Follow" src="https://bdprescription.com/npm-package/linkedins.svg">
  </a>
</p>

## Form Design
Easily enable and disable Angular reactive form fields using simple rules

<p align="center"><a href="#" target="_blank"><img alt="NPM stats" src="https://bdprescription.com/npm-package/ng-package-bg.png"></a></p>


## Description
A lightweight Angular library that makes it easy to enable, disable, and control reactive form fields using simple, declarative rules. Built for Angular Reactive Forms with zero dependencies.


### ngx-reactive-form-rules

Easily enable and disable Angular reactive form fields using simple rules.

`ngx-reactive-form-rules` helps you control form behavior (enable, disable, clear values) based on other field values—without writing repetitive subscription logic.

✔ Works with Angular Reactive Forms  
✔ Lightweight and simple  
✔ No external dependencies  
✔ Perfect for dynamic forms


## Installation

```
npm i ngx-form-rules
```

## Uninstall

```
npm uninstall ngx-form-rules
```

## 💞 How to Use 💞

### Create a file `checking-rules.config.ts` or `checking-rules.ts`

```ts
import { FormRule } from 'ngx-form-rules';

export const RULES: FormRule[] = [
    { 
      trigger: 'valueA', 
      onValue: true, 
      disable: ['valueC'],
      enable: ['valueB'] 
    },
    { 
      trigger: 'valueA', 
      onValue: false, 
      disable: ['valueB'], 
      enable: [] 
    }    
];
```

### In ts file `app.component.ts`

```ts
	import { NgxFormRulesService } from 'ngx-form-rules';
	import { RULES } from './checking-rules.config';

	@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
	})
	export class AppComponent implements OnInit{
	
	form: FormGroup;
	private readonly FORM_RULES = RULES;

	constructor(
		private fb: FormBuilder,
		private ruleEngine: NgxFormRulesService) {  
		}

	ngOnInit(): void {
		this.form = this.fb.group({     
		valueA: [''],
		valueB: [''],
		valueC: ['']
		});

		this.ruleEngine.applyRules(this.form, this.FORM_RULES); // Apply rules to the form    
		// this.onLoadData();
	}
	/*
	onLoadData(): void {
		this.partThreeService.getPartThreeByUuId(this.id).subscribe(
			(res) => {
			if (res && res.id) {
				this.form.patchValue(res);
				this.ruleEngine.syncRulesWithCurrentValues(this.form, this.FORM_RULES);
			}
			this.isDataLoaded = true;},
			(error) => { this.isDataLoaded = true; }
		);
	}
	*/
	}
```
### In html file `app.component.html`

```html
<form
    [formGroup]="form"
    name="formGroup"
    novalidate style="margin-top: 20px; display: flex; justify-content: center; align-items: center; ">
    <div style="width: 50%;">
        <div class="font-bold mb-4">
            Availability, Quantity, Category of Land: Is the availability, the quantity, and the category of the land clearly stated?
        </div><br>        
		<app-radio-field [control]="form.get('valueA')"
			[label]="'a) Check the availability of information'"
			[option1]="{ label: 'Information is available', value: true }"
			[option2]="{ label: 'Information is not available (skip b and go to c)', value: false }">
		</app-radio-field>
        <br />     
		<app-radio-field [control]="form.get('valueB')"
			[label]="'b) Check the quality of information'"
			[option1]="{ label: 'Appropriate as indicated', value: true }"
			[option2]="{ label: 'Needs amendment', value: false }">
		</app-radio-field>
		<br />
		<app-textarea-field
			[label]="'c) Remarks and suggestions'"
			[control]="form.get('valueC')">
		</app-textarea-field>         
    </div>    
</form>
```
