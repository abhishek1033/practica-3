export class WebResponseJson {
    application_id : number;
    return_message : string;
    status : number;
    message_description : string;
    isValidated : boolean;
    serviceStatus : boolean;	
    P_OUT_MSG : string;
    thumbnailFileName : string;
    responseData : string;
    role_name : string;   
    sessionTableData : object;
    error_message : Map<string,object>;
}
