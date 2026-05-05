import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Instructor } from '@app/interfaces/instructor';

@Component({
  selector: 'app-instructor-profile-card',
  imports: [],
  templateUrl: './instructor-profile-card.html',
  styleUrl: './instructor-profile-card.scss',
})
export class InstructorProfileCard {
  @Input() instructor!: Instructor;
}
