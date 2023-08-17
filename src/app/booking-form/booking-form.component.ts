import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['../app.component.css']
})
export class BookingFormComponent {
  reservationForm: FormGroup;
  displayResultMessage: boolean = false;
  resultMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });

    this.reservationForm.valueChanges.subscribe(() => {
      if (this.reservationForm.valid) {
        this.resultMessage = '';
        this.displayResultMessage = false;
      }
    });
  }

  submitForm() {
    console.log(this.reservationForm);
    if (!this.reservationForm.valid) {
      this.resultMessage = 'Por favor, completa todos los campos.';
      this.displayResultMessage = true;
    } else {
      // Perform form submission logic here
      this.resultMessage = 'Gracias por reservar. Nos pondremos en contacto contigo pronto.';
      this.displayResultMessage = true;
      this.reservationForm.reset();
    }
  }
}
