import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var intlTelInput: any;

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput: ElementRef;

  ngAfterViewInit(): void {
    intlTelInput(this.phoneInput.nativeElement);
  }
}

