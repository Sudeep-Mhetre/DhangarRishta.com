import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/Services/navigation.service';
import intlTelInput from 'intl-tel-input';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Input() IsActive: boolean = false;
  @Output() $deActiveTab: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('phoneInput') phoneInput: ElementRef;

  registrDetails: FormGroup;

  constructor(private navService: NavigationService, private fb: FormBuilder) {
    this.registrDetails = this.fb.group({
      ProfileHolder: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
      fullName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      telNumber: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(15)]),
    })
  }

  ngOnInit(): void {
    this.IsActive = false;

  }

  ngAfterViewInit(): void {
    intlTelInput(this.phoneInput.nativeElement);
  }

  onlyNumbersValidator() {
    return (control) => {
      const isValid = /^\d+$/.test(control.value);
      return isValid ? null : { 'onlyNumbers': true };
    };
  }

  public AdminRegistrations() {
    localStorage.setItem('Admin', 'True');
    this.navService.onNotify("NewRegEnter");
  }

  public ActivateRout() {
    this.IsActive = true;
    this.$deActiveTab.emit(false)
  }

}
