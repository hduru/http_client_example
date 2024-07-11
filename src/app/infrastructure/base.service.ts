import { HttpClient } from '@angular/common/http';

export abstract class BaseService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

}

//Class abstract olduğu için artık injectable değildir, kalıtım alacağız