import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { HomeComponent } from '../components/home/home.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';

//gaurd
import { AuthGuard } from '../gaurd/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
