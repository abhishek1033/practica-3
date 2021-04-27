import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  private universityUrls ="http://localhost:8080/registration/prop/api";

  constructor(private http: HttpClient) { }

  savePropertyDetails(commonBo : any) : Observable<any>
    {
      let result: Observable<any>;
      result= this.http.post(`${this.universityUrls}`+`/savePropertyDetails`,commonBo);      
      return result;
    }

    uploadPropertyImages1(file: File , id : number) : Observable<any>  
    {
      let url = this.universityUrls + "/uploadPropertyImages/" + id ;  
      let result: Observable<any>;
      console.log(file);

      const uploadImageData = new FormData();
      uploadImageData.append('file', file, file.name);
      // const formdata: FormData = new FormData();
      // formdata.append('file', file);
      result= this.http.post(`${this.universityUrls}`+`/uploadPropertyImages/${id}`,uploadImageData);      
      return result;
    }

    
    uploadPropertyImages(formData : FormData , id : number) : Observable<any>  
    {
      
      let result: Observable<any>;      
      result= this.http.post(`${this.universityUrls}`+`/uploadPropertyImages/${id}`,formData);      
      return result;
    }

    getPropertyList(): Observable<any>
    {
      let result: Observable<any>;      
      result= this.http.get(`${this.universityUrls}`+`/getPropertiesList`);      
      return result;
    }
}
