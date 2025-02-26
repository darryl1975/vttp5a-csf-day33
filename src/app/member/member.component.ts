import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../model/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {

  memberForm!: FormGroup;
  
  member = new Member('', '', '', ['']);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      hobbies: this.fb.array([this.fb.control('')])
    });
  }

  processMemberForm() {
   this.member.name = this.memberForm.value.name;
   this.member.email = this.memberForm.value.email;
   this.member.mobileNo = this.memberForm.value.mobileNo;
   this.member.hobbies = this.memberForm.value.hobbies;
  }

  addNewHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  get hobbies() {
    return this.memberForm.get('hobbies') as FormArray;
  }

  removeHobby(_t50: number) {
    this.hobbies.removeAt(_t50);
  }
}
