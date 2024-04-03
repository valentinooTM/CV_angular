import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "education", component: EducationComponent},
    {path: "experience", component: ExperienceComponent},
    {path: "interests", component: InterestsComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", redirectTo: "/education", pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }