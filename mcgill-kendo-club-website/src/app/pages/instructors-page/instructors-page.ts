import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
import data from "@assets/instructors.json";
import { Instructor } from '@app/interfaces/instructor';
import { InstructorProfileCard } from '@app/components/instructor-profile-card/instructor-profile-card';

@Component({
  selector: 'app-instructors-page',
  imports: [GeneralHeader, GeneralFooter, InstructorProfileCard],
  templateUrl: './instructors-page.html',
  styleUrl: './instructors-page.scss',
})
export class InstructorsPage {
  readonly instructors: Instructor[] = data.instructors;
}
