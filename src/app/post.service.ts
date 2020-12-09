import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';

// maximum results per page
const perPage = 6;
const apiUrl = "https://astinziani-web422-a5.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(page, tag, category): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${apiUrl}/api/posts?page=${page}&perPage=${perPage}${tag ? "&tag=" + tag.replace("#","") : ""}${category ? "&category=" + category : ""}`);
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`${apiUrl}/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`${apiUrl}/api/categories`);
  }

  getTags(): Observable<string[]>{
      return this.http.get<string[]>(`${apiUrl}/api/tags`);
  }

  getAllPosts(): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${apiUrl}/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`${apiUrl}/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`${apiUrl}/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`${apiUrl}/api/posts/${id}`);
  }

  constructor(private http: HttpClient) { }
}
