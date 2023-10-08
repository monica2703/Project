import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products :Product[]=[];
  product:Product=new Product();
  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const fourthlevelcategoryId = params['fourthlevelcategoryId'];

      this.productService.getProductsByFourthLevelCategoryId(fourthlevelcategoryId).subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
    });
  }
    private getProducts(){
      this. productService.getProductList().subscribe(data => {
        this.products = data;
      });
    }

    productDetails(productId: number){
      this.router.navigate(['product-details', productId]);
    }

    updateProduct(productId: number){
      this.router.navigate(['update-product', productId]);
    }

    deleteProduct(productId: number) {
      this.productService.deleteProduct(productId).subscribe(
        (data: any) => { 
          console.log(data); 
          this.getProducts();
        },
        (error: any) => { 
          console.error(error); 
        }
      );
    }

  }
    




  


