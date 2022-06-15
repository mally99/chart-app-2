import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TOKEN } from "./config/constants";

@Injectable()
export class CustomHttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const hardcodedToken = TOKEN;
        const reqWithAuth = req.clone({
            setHeaders: {
                Authorization: TOKEN
            }
        })
        return next.handle(reqWithAuth);
    }
}