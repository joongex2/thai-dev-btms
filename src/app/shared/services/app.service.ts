import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;

    constructor(private router: Router, private toastr: ToastrService) {}

    async loginByAuth({email, password}: any) {
        try {
            // const token = await Gatekeeper.loginByAuth(email, password);
            await this.loading();
            if (email === 'admin@example.com' && password === 'admin') {
                const token = '15269';
                localStorage.setItem('token', token);
                await this.getProfile();
                this.router.navigate(['/']);
            } else {
                throw Error('failed');
            }
        } catch (error: any) {
            console.log('here');
            this.toastr.error(error.message);
        }
    }

    async loading(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });
    }

    async getProfile() {
        try {
            // this.user = await Gatekeeper.getProfile();
            if (localStorage.getItem('token') === '15269') {
                this.user = {
                    ID: "7d0942e6-a274-4b5d-9ef6-568f9d39cba8",
                    createdAt: "2021-05-14T12:12:00.976Z",
                    email: "admin@example.com",
                    isVerified: false,
                    metadata: {},
                    provider: "AUTH",
                    updatedAt: "2021-05-14T12:12:00.976Z",
                    username: "admin"
                }
            } else {
                throw Error('failed');
            }
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}
