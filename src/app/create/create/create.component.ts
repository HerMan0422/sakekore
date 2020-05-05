import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  osakeIds = [...Array(4)].map((_, i) => i + 1);

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true
    },
    centeredSlides: true,
    slidesPerView: 3
  };

  selectedOsakeId: 0;

  form = this.fb.group({

    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]]

  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
    console.log(this.selectedOsakeId);
  }
}
