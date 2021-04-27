import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewProductDetails } from 'src/app/class/view-product-details';
import { PropertyServiceService } from 'src/app/services/property-service.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  
  propertyList : ViewProductDetails[];

  constructor(private router : Router ,
    private formBuilder : FormBuilder,
    private propertyService : PropertyServiceService) { }

  ngOnInit() {
    this.getProgramList();
  }

  getPropertyList()
  {

  }

  getProgramList()
  {
       this.propertyService.getPropertyList().subscribe(data=>{        
        this.propertyList = data.details;   
        console.log(this.propertyList);     
       });
  }
}
