import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  
  year: number;
  month: number;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
  }

  viewAll() {
    this.router.navigate(['']);
  }
}
