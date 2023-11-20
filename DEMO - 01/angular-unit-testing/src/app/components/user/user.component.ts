import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user!: User

  constructor(private userService: UserService) {}
  
  async ngOnInit(): Promise<void> {
    this.userService.getUser().subscribe(data => {
      this.user = data["results"][0]
    })
  }

}
