import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { OsakeService } from 'src/app/services/osake.service';
import { AuthService } from 'src/app/services/auth.service';

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

  selectedOsakeId: 1;

  form = this.fb.group({

    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]]

  });

  constructor(
    private fb: FormBuilder,
    private osakeService: OsakeService,
    private authServie: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.selectedOsakeId);
    this.osakeService.createOsake({
      osakeId: this.selectedOsakeId,
      name: this.form.value.name,
      level: 1,
      drinked: 1,
      userId: this.authServie.uid,
    });
  }
}
