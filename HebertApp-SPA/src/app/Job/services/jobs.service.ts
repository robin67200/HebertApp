import { Job } from './../models/job';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobsService {
    constructor(private http: HttpClient) {}
        getJobById(id: number) {
            return this.http.get<Job>('http://localhost:5000/api/jobs/' + id);
        }
        getJobs() {
            return this.http.get<Job[]>('http://localhost:5000/api/jobs/');
        }
        postJob(job: Job) {
            return this.http.post<Job>('https://localhost:5001/api/jobs/', job);
        }
        putJob(id: number, job: any) {
            return this.http.put<Job>('http://localhost:5000/api/jobs/' + id, job);
        }
        deleteJobById(id: number) {
            return this.http.delete<Job>('http://localhost:5000/api/jobs/' + id);
        }

}
