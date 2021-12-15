import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }
  getCourses = function(){
    return [
      { "kode": "IF210", "nama": "Algoritma dan Struktur Data" },
      { "kode": "IF402", "nama": "Pemrograman Berorientasi Objek" },
      { "kode": "IF300", "nama": "Pengantar Teknologi Internet" },
      { "kode": "IF430", "nama": "Pemrograman Web" },
      { "kode": "IF633", "nama": "Pemrograman Aplikasi Mobile" },
      { "kode": "IF733", "nama": "Pemrograman Mobile Cross-Platform" }
    ]
  }
}
