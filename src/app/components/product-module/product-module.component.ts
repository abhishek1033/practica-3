import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Property } from 'src/app/class/property';
import { WebResponseJson } from 'src/app/class/web-response-json';
import { PropertyServiceService } from 'src/app/services/property-service.service';

@Component({
  selector: 'app-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.css']
})
export class ProductModuleComponent implements OnInit {

  submitted=false;
  form: FormGroup;
  propertyForm : FormGroup;
  property : Property = new Property();
  selectedFile: File;
  webResponse : WebResponseJson=new WebResponseJson();
  allfiles : any = [];


  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private propertyService : PropertyServiceService) { }

  ngOnInit() {
    this.propertyForm=this.formBuilder.group(
      {
        PROPERTY_NAME:['',[Validators.required]],
        PROP_DESCRIPTION:['',[Validators.required]],
        ADDRESS : ['',[Validators.required]],
        AREA : ['',[Validators.required]],
        PRICE : ['',[Validators.required]],
        BEDROOM : ['',[Validators.required]],        
        BATHROOM : ['',[Validators.required]],
        CARPET_AREA : ['',[Validators.required]],
      }
    );
  }

  get f()
  {
      return this.propertyForm.controls;
  }

  upload(event) {    
    //this.selectedFile = event.target.files[0];

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.allfiles.push(files[i]);
    }
    
 }

  onSubmitForm()
  {
    this.submitted=true;
    if(this.propertyForm.invalid)
    {
        return;
    }
    else
    {   
      this.propertyService.savePropertyDetails(this.property).subscribe(data=>{                
        let webResponse = Object.assign(new WebResponseJson(),data);                             
        if(webResponse.status != null && webResponse.status == 1000) 
        {
          
                     
            if(this.allfiles != null)
            {
              for(let j=0 ; j<this.allfiles.length; j++)
              {
                
                const formData = new FormData();
                formData.append('file',this.allfiles[j]);
                this.propertyService.uploadPropertyImages(formData,webResponse.application_id).subscribe((response)=>{
                  let webResponse1 = Object.assign(new WebResponseJson(),data);
                });
              }
            }
            
            this.router.navigate(['/viewProperty'],{replaceUrl:true});
        }
        else
        {
            alert("fails");
        }
  })         

       
    }
  }
}
