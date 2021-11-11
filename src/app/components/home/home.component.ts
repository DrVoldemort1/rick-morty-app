import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RickandmortyapiServiceService } from 'src/app/services/rickandmortyapi-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters:any = []
  character_out:any = []
  constructor(
    private _service:RickandmortyapiServiceService,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) { }

  ngOnInit() {
    this._service.getCaracter().then(data=>{
      let dato:any = data
      let { results } = dato
      this.characters = results
    })
    
  }
  seeCharacter(character:any, modal:any){
    this.character_out = character
    this.modalService.open( modal,{ windowClass : "xlmodal", centered: true})
  }

}
