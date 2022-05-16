import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  private baseUrl = 'https://graph.microsoft.com';
  public data;

  private authToken = `EwBwA8l6BAAUkj1NuJYtTVha+Mogk+HEiPbQo04AAQj/WOleyHnNf72VqYo8RWebatKiO7ToCvHu6ehAWZWEgDJ8mPfNU993TTPbwq7oV3PupXOBLECGJce6eBZAXvPdr7y607oA7BGCQLlx4KgT3Vw+vhkEk3Hjec0+Cm5s8jk4tZ20SUQbnjukYgFfHh0mYVhmi9cjGKDuEmlr6vR5ccunx2fE/tcqCuPOxJchgPkjBAKHwx1+jP9A6bKz5HlhM9ovllPsKk8WoJ7nK+B1Ci7Tu9/rXW+yYTyOe1QMiqYRQpsy+HY+VpD0xZhPPsR65YnAtM34v4GSzOIWt7ue+zx28PQDt7H6wnuNgpUyBlUm0xb6+Q0nQn+ucSYDHWQDZgAACOPQB6SIRIlhQAINdihCYqxX2IrD3rMWVgzjz0WN19258Xs78gATtE1fPXvAT48MvnEENYi5XMlVB2wzNO4GHotJeah3ZyBGot3JTci5lQQo5tgHjNv/gP05CTwBTDiCYg+SpOiGtr5sWWzJcEXnGTHdctyHEtBPCTNgBlLF7sULioWvvGtIiKyK/bqV3NDxz1WwOHIWJdJRan4Y+EbZPHPxLhwJCK/olGhD+KNMnk2pOh4ZaM+C0rWYq6ea9/yxpTrC+ynM6bef9UBCnTgRA+QRv1Vz+qQI7AiZPXJlm7h0GD08HXgJGWoIF9nagm8Hh3bcquJieVz10yDMnilr6KPIYI2KnQmwwqEInC3Ib+4pivDYcU7U/Zwu2P8axUJGb88TQI/T/eDsJy/WrGchIFCMifWs+kPlb8+NJ39l2neN7kHw+iTZq/hsqELFbu/Y5CIlMKPc69dWtJRolAVR/CSOyYYk5aKnUUpqnfDKzfH1USc2nUnXMl4dSQB/WT0RmW9F7n7srYxFpm2GojVp7rNBJ2/MXNwdv/3xo2XMVrCkQy6rauKBkIQn99OUpfngFAITusNpE6QBmSTRAn16vEoso87ZioXzH8XIYfOANSaTXMoUCGY6c0SAANCzRxiwqMqdpw8Mg2B5011OBYHIsIBuqPSSDgFRFRdO6vQJnGEMfoSYa37jWCcn5FC+1cP0FNfSV3aSBj9d2N6PjMjpRtzbJPM7cqAbuOgZiZiwqmwOQLz50vcZJYN4Gos7rsmTKYM6Myt9xe8MJsSLAg==`;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.data = this.fetchData('beta/me');
    this.data = this.fetchData('beta/me/').pipe(
      map((data) => JSON.stringify(data))
    );
  }

  private fetchData(api = '') {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authToken}`
    );
    return this.http.get(`${this.baseUrl}/${api}`, { headers: header });
  }
}
