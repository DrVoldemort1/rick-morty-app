import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character:any
  @Output() characterOut = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  getGender(gender:any){
    return gender == "Male" ? '<i class="fas fa-mars"></i>' : gender == "Female" ? '<i class="fas fa-venus"></i>' : '<i class="fas fa-dna"></i>';
  }
  eventEmmiter(){
    this.characterOut.emit(this.character)
  }
}
